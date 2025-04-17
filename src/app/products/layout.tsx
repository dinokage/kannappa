import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Eshani Group",
  description: "Explore our diverse range of products",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="products-container min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}