import "@/app/globals.css";
import { getHubCategories, getPostsByCategory } from "@/lib/blog";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function HubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getHubCategories();

  return (
    <div className="drawer lg:drawer-open container mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center">
        {/* Page content here */}
          <div className=" grow">
            <div className="py-3 px-4 border-b border-gray-800 lg:hidden">
              <label htmlFor="my-drawer-2" className=" flex items-center drawer-button">
                <ChevronRightIcon className="size-5 mr-0" />
                Menü
              </label>
            </div>
            <div className="p-4 lg:p-8 lg:max-w-2/3">
              {children}
            </div>
          </div>
      </div>
      <div className="drawer-side h-[calc(100vh-4rem)] top-16">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
        <ul className="menu | bg-base-300/30 backdrop-blur-2xl lg:bg-base-300/0 lg:backdrop-blur-none | border-r border-gray-700 | text-base-content min-h-full w-80 | p-4 pt-10 | sticky top-0">
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
