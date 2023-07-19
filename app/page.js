import {SampleBlogPostsData} from "@/libraries/sampleBlogPostsData";
import BlogCard from "@/components/blogCard/BlogCard";

export default function Home() {
  return (
    <main className=" h-full flex-grow flex items-center">
        <div className="grid grid-cols-3 gap-6">
            {SampleBlogPostsData.map(post=>{
                return <BlogCard key={post.id} post={post} />
            })}
        </div>
    </main>
  )
}
