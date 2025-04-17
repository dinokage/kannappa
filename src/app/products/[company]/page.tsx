import Link from "next/link";
// import Image from "next/image";
import { productCategories } from "@/lib/products";
import { notFound } from "next/navigation";

interface CompanyPageProps {
  params: {
    company: string;
  };
}

export async function generateStaticParams() {
  return productCategories.map((company) => ({
    company: company.href.split('/').pop() || '',
  }));
}

export async function generateMetadata({ params }: CompanyPageProps) {
  const company = productCategories.find(
    (c) => c.href.split('/').pop() === params.company
  );

  if (!company) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${company.name} Products - Classique Group`,
    description: `Explore ${company.name} products offered by Classique Group`,
  };
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = productCategories.find(
    (c) => c.href.split('/').pop() === params.company
  );

  if (!company) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <Link 
          href="/products" 
          className="text-[#29567A] hover:text-[#00aeef]"
        >
          ← Back to All Products
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8">{company.name} Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {company.categories?.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#29567A]">{category.name}</h2>
              <div className="space-y-2">
                {category.items?.slice(0, 5).map((item) => (
                  <Link 
                    href={item.href} 
                    key={item.name}
                    className="block text-gray-700 hover:text-[#00aeef]"
                  >
                    • {item.name}
                  </Link>
                ))}
                {(category.items?.length || 0) > 5 && (
                  <p className="text-gray-500 italic">And {(category.items?.length || 0) - 5} more...</p>
                )}
              </div>
              <div className="mt-6">
                <Link 
                  href={category.href}
                  className="inline-block bg-[#29567A] text-white py-2 px-4 rounded hover:bg-[#00aeef] transition-colors"
                >
                  View All {category.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}