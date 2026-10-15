import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DepartmentLandingPage } from "@/components/department-landing-page";
import { departmentPages } from "@/lib/landing-pages";

export function generateStaticParams() {
  return departmentPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const department = departmentPages.find((item) => item.slug === slug);

  if (!department) return {};

  return {
    title: `${department.title} (${department.code}) | Pneu`,
    description: department.intro,
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = departmentPages.find((item) => item.slug === slug);

  if (!department) notFound();

  return <DepartmentLandingPage department={department} />;
}
