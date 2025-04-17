import Link from "next/link";
import { productCategories } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((company) => (
          <div key={company.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#29567A]">{company.name}</h2>
              <div className="space-y-2">
                {company.categories?.slice(0, 3).map((category) => (
                  <Link 
                    href={category.href} 
                    key={category.name}
                    className="block text-gray-700 hover:text-[#00aeef]"
                  >
                    • {category.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link 
                  href={company.href}
                  className="inline-block bg-[#29567A] text-white py-2 px-4 rounded hover:bg-[#00aeef] transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}