import { PostBody } from '@/app/components/PostBody/PostBody';
import PostHeader from '@/app/components/PostHeader/PostHeader';
import { getPostContent } from '@/lib/blog';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react'

interface PageProps {
    params: {
      category: string;
      slug: string;
    };
  }

const page = async ({params} : PageProps) => {
    const post = getPostContent(params.category, params.slug);

    // Handle the case where post is null or undefined
    if (!post) {
      return (
        <main>
          <div className="my-8"></div>
          <h1>Post not found</h1>
        </main>
      );
    }

    const content = await markdownToHtml(post.content);

    console.log(post);

    return (
        <main>
            <div className="my-8"></div>
            <PostHeader postTitle={post?.data.title} />
            <PostBody content={content} />
        </main>
    )
}

export default page;