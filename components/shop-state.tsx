"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { catalogProducts } from "@/lib/products";

type CartItem = { productId: string; quantity: number };
type ShopContextValue = {
  cart: CartItem[];
  favorites: string[];
  addToCart: (productId: string) => void;
  toggleFavorite: (productId: string) => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);
const storageKey = "pneu-shop-state";
const knownProductIds = new Set(catalogProducts.map((product) => product.id));

function readSavedState(): Pick<ShopContextValue, "cart" | "favorites"> {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return { cart: [], favorites: [] };

    const parsed: unknown = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object") return { cart: [], favorites: [] };
    const state = parsed as { cart?: unknown; favorites?: unknown };
    const cart = Array.isArray(state.cart)
      ? state.cart.filter((item): item is CartItem =>
          typeof item?.productId === "string" &&
          knownProductIds.has(item.productId) &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0,
        )
      : [];
    const favorites = Array.isArray(state.favorites)
      ? [...new Set(state.favorites.filter((id): id is string => typeof id === "string" && knownProductIds.has(id)))]
      : [];
    return { cart, favorites };
  } catch {
    return { cart: [], favorites: [] };
  }
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const state = readSavedState();
    setCart(state.cart);
    setFavorites(state.favorites);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(storageKey, JSON.stringify({ cart, favorites }));
  }, [cart, favorites, loaded]);

  const value = useMemo<ShopContextValue>(() => ({
    cart,
    favorites,
    addToCart: (productId) => {
      if (!knownProductIds.has(productId)) return;
      setCart((current) => {
        const existing = current.find((item) => item.productId === productId);
        if (existing) return current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item);
        return [...current, { productId, quantity: 1 }];
      });
    },
    toggleFavorite: (productId) => {
      if (!knownProductIds.has(productId)) return;
      setFavorites((current) => current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]);
    },
  }), [cart, favorites]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const value = useContext(ShopContext);
  if (!value) throw new Error("useShop must be used inside ShopProvider");
  return value;
}
