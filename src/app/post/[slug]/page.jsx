import React from "react";
import { getAllPosts } from "../../../../utils/loadmd";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

const allPostData = getAllPosts();

export const generateStaticParams = async () => {
  return allPostData.map(({ slug }) => ({ slug }));
};

const page = async ({ params }) => {
  const { slug } = await params;

  const { content, metadata } = allPostData.find((post) => post.slug == slug);

  return (
    <div className="container mx-auto h-full md:w-6/12 flex flex-col">
      <main>
        <p className="text-2xl md:text-4xl font-serif text-wrap mt-8">
          {metadata.title}
        </p>
        <div className="flex justify-between text-xs md:text-sm italic font-semibold mt-3">
          <p>{metadata.date}</p>
          <p>{metadata.author}</p>
        </div>
        <div className="flex gap-2 text-xs my-3">
          {metadata.tags.map((tag, index) => (
            <p className="border-[2px] rounded-full p-1" key={index}>
              {tag.title}
            </p>
          ))}
        </div>

        <hr />

        <div className="mt-6 leading-relaxed mb-4">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: { rehypePlugins: [rehypeHighlight] },
            }}
          />
        </div>
        <hr />
      </main>
    </div>
  );
};

export default page;
