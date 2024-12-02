import Hero from "@/components/Hero/page";
import { getAllPosts } from "../../utils/loadmd";
import PostCard from "@/components/BlogCard/page";

export default async function Home() {
  const PostsData = await getAllPosts();

  return (
    <div className="container mx-auto h-full md:w-6/12 flex flex-col">
      <Hero />
      <div className="p-4">
        {Object.values(PostsData).map((post) => (
          <div key={post.metadata.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
