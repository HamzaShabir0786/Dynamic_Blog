import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export const getBlogData = async () => {
  const res = await client.fetch(
    `*[_type == "blog"]{title, description, image, _id}`
  );
  return res;
};

interface BlogType {
  title: string;
  description: string;
  image: IImage;
  _id: string;
}

export default async function Blog() {
  const data: BlogType[] = await getBlogData();
  console.log(data);
  return (
    <div className="max-w-[1440px] h-auto py-[40px] m-auto rounded-lg">
      <div className="grid-div">
        {data.map((items) => (
          <div
            key={items._id}
            className="bg-gray-100 rounded-lg overflow-x-hidden flex flex-col items-center justify-around custom-scrollbar"
          >
            <h1 className="text-[2.6rem] font-bold text-blue-600">
              {items.title}
            </h1>

            <Image
              className="rounded-md h-[250px] w-[400px]"
              src={urlForImage(items.image)?.url() || "/placeholder.jpg"}
              alt={items.title}
              height={300}
              width={300}
            />

            <Link
              href={`/readmore/${items._id}`}
              className="text-white flex justify-center items-center font-bold w-40 h-12 rounded-xl bg-blue-600 hover:bg-blue-800"
            >
              Read Blog
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
