import Link from "next/link";
// import Image from "next/image";
import { productCategories } from "@/lib/products";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    company: string;
    category: string;
  };
}

export async function generateStaticParams() {
  const paths: { company: string; category: string }[] = [];
  
  productCategories.forEach((company) => {
    const companySlug = company.href.split('/').pop() || '';
    
    company.categories?.forEach((category) => {
      const categorySlug = category.href.split('/').pop() || '';
      
      paths.push({
        company: companySlug,
        category: categorySlug,
      });
    });
  });
  
  return paths;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const company = productCategories.find(
    (c) => c.href.split('/').pop() === params.company
  );
  
  const category = company?.categories?.find(
    (cat) => cat.href.split('/').pop() === params.category
  );

  if (!company || !category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} - ${company.name} | Classique Group`,
    description: `Explore our ${category.name} from ${company.name}`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const company = productCategories.find(
    (c) => c.href.split('/').pop() === params.company
  );
  
  const category = company?.categories?.find(
    (cat) => cat.href.split('/').pop() === params.category
  );

  if (!company || !category) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <Link 
          href={`/products/${params.company}`} 
          className="text-[#29567A] hover:text-[#00aeef]"
        >
          ← Back to {company.name} Products
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-8">{company.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items?.map((item) => (
          <Link 
            href={item.href} 
            key={item.name}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#29567A]">{item.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-700">View Details</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#29567A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}