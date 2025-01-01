import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
export const getBlogData = async () => {
  const res = await client.fetch(
    `*[_type == "blog"]{title, description,  image}`
  );
  return res;
};
interface i {
  title: string;
  description: string;
  price: number;
  image: IImage;
}export default async function Blog() {
  const data: i[] = await getBlogData();
  console.log(data);
  return (
    <div className="border-2 border-red-800 w-[50%]  m-auto rounded-lg">
      <h1 className="text-center text-[3rem] mt-2">Hello World</h1>
      <div className="flex justify-between  gap-2 ">
        {data.map((items: i, index: number) => {
          return (
            <div
              key={index}
              className="bg-red-300 rounded-lg  overflow-x-hidden h-[500px] w-[600px] flex flex-col justify-around items-center "
            >
              <h1 className="text-[2.6rem] text-green-600">{items.title}</h1>
              <Image
                className="rounded-md h-[200px] w-[400px]"
                src={urlForImage(items.image).url()}
                alt={items.title}
                height={200}
                width={400}
              />

              <details className="text-[1.2rem] text-green-700">
                {items.description}
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}
