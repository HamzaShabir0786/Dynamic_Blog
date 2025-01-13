import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as IImage } from "sanity";
import CommentSection from "@/app/components/comment/page";

// interface BlogProps {
//   params: {
//     blog: string;
//   };
// }
interface BlogProps {
  params: Promise<{
    blog: string;
  }>;
}

export default async function BlogPage({ params }: BlogProps) {
  const blog = await client.fetch(`*[_type == "blog" && _id == $id][0]`, {
    id: (await params).blog,
  });
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-[1000px] m-auto p-8 flex flex-col items-center bg-blue-200">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">{blog.title}</h1>
      <Image
        className="rounded-md"
        src={urlForImage(blog.image)?.url() || "/placeholder.jpg"}
        alt={blog.title}
        width={700}
        height={400}
      />
      <p className="mt-4 text-lg text-gray-700">{blog.description}</p>
      <div className=" h-[auto]   mt-8 w-[500px] flex flex-col justify-between items-center">
        <CommentSection />
      </div>
    </div>
  );
}
