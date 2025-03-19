import "@/app/globals.css";
import { getHubCategories, getPostsByCategory } from "@/lib/blog";
import Link from "next/link";

export default function HubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getHubCategories();

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center">
        {/* Page content here */}
          <div className=" grow">
            <div className="py-2 border-b border-gray-800 lg:hidden">
              <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button">
                Menü
              </label>
            </div>
            <div className="p-4 lg:p-8 lg:max-w-2/3">
              {children}
            </div>
          </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-10">
          {/* Sidebar content here */}
            {
              categories.map((category) => (
                <li key={category} className="mt-4">
                    <span className="font-semibold">
                      {category}
                      </span>
                  <ul className="ml-4">
                    {getPostsByCategory(category).map((post) => (
                      <li key={post.slug}>
                        <Link href={`/hub/${category}/${post.slug}`}>
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            }
        </ul>
      </div>
    </div>
  );
}
