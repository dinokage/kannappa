import Link from "next/link";
import { productCategories } from "@/lib/products";
import { notFound } from "next/navigation";
// import { CldImage } from "next-cloudinary";
import CloudinaryImage from "./CloudinaryImage";

interface ProductItemPageProps {
  params: {
    company: string;
    category: string;
    item: string;
  };
}

export async function generateStaticParams() {
  const paths: { company: string; category: string; item: string }[] = [];
  
  productCategories.forEach((company) => {
    const companySlug = company.href.split('/').pop() || '';
    
    company.categories?.forEach((category) => {
      const categorySlug = category.href.split('/').pop() || '';
      
      category.items?.forEach((item) => {
        const itemSlug = item.href.split('/').pop() || '';
        
        paths.push({
          company: companySlug,
          category: categorySlug,
          item: itemSlug,
        });
      });
    });
  });
  
  return paths;
}

export async function generateMetadata({ params }: ProductItemPageProps) {
  const company = productCategories.find(
    (c) => c.href.split('/').pop() === params.company
  );
  
  const category = company?.categories?.find(
    (cat) => cat.href.split('/').pop() === params.category
  );
  
  const item = category?.items?.find(
    (i) => i.href.split('/').pop() === params.item
  );

  if (!company || !category || !item) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${item.name} | ${company.name} | Classique Group`,
    description: `Details about ${item.name} from ${company.name}`,
  };
}

export default function ProductItemPage({ params }: ProductItemPageProps) {
  const company = productCategories.find(
    (c) => c.href.split('/').pop() === params.company
  );
  
  const category = company?.categories?.find(
    (cat) => cat.href.split('/').pop() === params.category
  );
  
  const item = category?.items?.find(
    (i) => i.href.split('/').pop() === params.item
  );

  if (!company || !category || !item) {
    notFound();
  }

  // Determine if we have an image for this product
  // const hasImage = item.image && item.image.length > 0;
  
  return (
    <div>
      <div className="mb-8">
        <Link 
          href={`/products/${params.company}/${params.category}`} 
          className="text-[#29567A] hover:text-[#00aeef]"
        >
          ← Back to {category.name}
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block bg-gray-100 text-[#29567A] px-3 py-1 text-sm font-semibold rounded-full">
                  {company.name}
                </span>
                <span className="inline-block bg-gray-100 text-[#29567A] px-3 py-1 text-sm font-semibold rounded-full ml-2">
                  {category.name}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
              
              {/* This would typically come from your database with the full product details */}
              <div className="flex-grow">
                <p className="text-gray-700 mb-6">
                  {/* Sample description - In a real application, this would come from your database */}
                  This premium product offers exceptional performance and reliability. 
                  Contact us for a personalized quote and specifications tailored to your needs.
                </p>
                
                <div className="border-t border-gray-200 pt-6 mt-auto">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>High quality build and materials</li>
                    <li>Energy efficient design</li>
                    <li>Long-lasting performance</li>
                    <li>Industry-leading warranty</li>
                    <li>Expert technical support</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/ContactUs"
                  className="inline-block bg-[#29567A] text-white py-3 px-6 rounded-lg hover:bg-[#00aeef] transition-colors"
                >
                  Request a Quote
                </Link>
                
                
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
            {item.image ? (
              <CloudinaryImage
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Product Image Coming Soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items?.slice(0, 3).filter(relatedItem => relatedItem.name !== item.name).map((relatedItem) => (
            <Link 
              href={relatedItem.href} 
              key={relatedItem.name}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#29567A]">{relatedItem.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">View Details</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#29567A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}