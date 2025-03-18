import { PostBody } from '@/app/components/PostBody/PostBody';
import PostHeader from '@/app/components/PostHeader/PostHeader';
import { getPostContent } from '@/lib/blog';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react'



const page = async (props) => {
    const params = await props.params;
    
    const post = getPostContent(params.category, params.slug);

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

export default page