import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
export const getBlogData = async () => {
  const res = await client.fetch(
    `*[_type == "blog"]{title, description,  image, id}`
  );
  return res;
};
interface i {
  title: string;
  description: string;
  price: number;
  image: IImage;
  id: number;
}
export default async function Blog() {
  const data: i[] = await getBlogData();
  console.log(data);
  return (
    <div className=" w-[96%]  m-auto rounded-lg">
      <div className="grid grid-cols-3 gap-2 ">
        {data.map((items: i, index: number) => {
          return (
            <div
              key={items.id}
              className={`bg-gray-400 rounded-lg  overflow-x-hidden h-[400px] w-[500px] flex flex-col  items-center justify-around custom-scrollbar ${
                items.id === 3
                  ? "bg-red-100"
                  : items.id === 2
                    ? "bg-green-100"
                    : items.id === 1
                      ? "bg-yellow-100"
                      : "bg-pink-900"
              }`}
            >
              <h1 className={`text-[2.6rem] font-bold text-blue-600 `}>
                {items.title}
              </h1>

              <Image
                className="rounded-md h-[250px] w-[400px]"
                src={urlForImage(items.image).url()}
                alt={items.title}
                height={300}
                width={300}
              />

              <details className="text-[1.2rem] text-black text-center cursor-pointer">
                {items.description}
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}
