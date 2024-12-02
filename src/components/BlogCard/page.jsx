import Link from "next/link";
import React from "react";

const PostCard = ({post}) => {

  // console.log(post.metadata.tags);
  
  return (
    <section className="py-4 font-serif">
      <div className="text-xl md:text-3xl mb-1"><Link href={`/post/${post.slug}`}>{post.metadata.title}</Link></div>
      <div className="flex justify-between text-xs font-thin mb-2 italic">
        <p>{post.metadata.date}</p>
        <p>{post.metadata.author}</p>
      </div>
      <hr></hr>
      <div className="my-2 text-sm md:text-md">{post.metadata.description}</div>
      <div className="flex text-xs md:text-sm gap-2 font-thin py-2 md:my-3">
        {post.metadata.tags.map((tag) => (
          <p className="rounded-full p-2 bg-[#99625B]" key={tag.title}>{`#${tag.title}`}</p>
        ))}
      </div>
    </section>
  );
};

export default PostCard;
