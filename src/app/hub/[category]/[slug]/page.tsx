import Headline from '@/app/components/Headline/Headline';
import Paragraph from '@/app/components/Paragraph/Paragraph';
import { PostBody } from '@/app/components/PostBody/PostBody';
import PostHeader from '@/app/components/PostHeader/PostHeader';
import { getPostContent } from '@/lib/blog';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react'

type Params = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostContent(params.slug);

  if (!post) {
    return (
      <div>
        <Headline as="h1">Beitrag konnte nicht gefunden werden!</Headline>
        <Paragraph>Der Beitrag konnte nicht gefunden werden. Bitte überprüfe die URL. Vielleicht haben wir den Beitrag in der Zwischenzeit auch gelöscht oder die Inhalte verschoben.</Paragraph>
      </div>
    )
  }

  const content = await markdownToHtml(post.content);
  return (
      <main>
          <div className="my-8"></div>
          <PostHeader postTitle={post?.data.title} />
          <PostBody content={content} />
      </main>
  )
}