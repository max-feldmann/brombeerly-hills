import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'content/hub')

// Returns a list of all categories
export function getHubCategories() {
    const categories = fs.readdirSync(postsDirectory);
    return categories.filter((category) =>
      fs.statSync(path.join(postsDirectory, category)).isDirectory()
    );
}

// Get all posts by a category
export function getPostsByCategory(category) {
  const categoryPath = path.join(postsDirectory, category);
  if (!fs.existsSync(categoryPath)) return [];

  return fs.readdirSync(categoryPath).map((filename) => {
    const filePath = path.join(categoryPath, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
    };
  });
}

// Get a post by its slug
export function getPostContent(category, slug) {
  const filePath = path.join(postsDirectory, category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { data, content };
}

// Converts "Getting Started" → "getting-started"
export function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-"); 
}

// Converts "getting-started" → "Getting Started"
export function deslugify(slug) {
  return slug.replace(/-/g, " "); 
}