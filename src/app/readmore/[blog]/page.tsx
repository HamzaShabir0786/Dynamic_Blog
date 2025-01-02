import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

interface BlogProps {
  params: {
    blog: string;
  };
}

export default async function BlogPage({ params }: BlogProps) {
  const blog = await client.fetch(`*[_type == "blog" && _id == $id][0]`, {
    id: params.blog,
  });

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-[800px] m-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">{blog.title}</h1>
      <Image
        className="rounded-md"
        src={urlForImage(blog.image)?.url() || "/placeholder.jpg"}
        alt={blog.title}
        width={700}
        height={400}
      />
      <p className="mt-4 text-lg text-gray-700">{blog.description}</p>
    </div>
  );
}
