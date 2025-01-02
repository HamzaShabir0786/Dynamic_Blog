import Link from "next/link";
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
  index: number;
}
export default async function Blog() {
  const data: i[] = await getBlogData();
  console.log(data);
  return (
    <div className=" max-w-[1440px] h-auto py-[40px] m-auto rounded-lg">
      <div className="grid-div ">
        {data.map((items: i, index: number) => {
          return (
            <div
              key={items.id}
              className={`bg-gray-100 rounded-lg  overflow-x-hidden  flex flex-col  items-center justify-around custom-scrollbar `}
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
              <div className="flex items-center gap-12">
                <details className="text-[1.2rem] text-black text-center  cursor-pointer">
                  {items.description}
                </details>
              </div>
              <Link
                href={`${index == 0 ? "/readmore/0index" : index == 1 ? " readmore/1index" : index == 2 ? "/readmore/2ndex" : index == 3 ? "/readmore/3index" : index == 4 ? "/readmore/4index" : index == 5 ? "/readmore/5index" : "/"} `}
                className="text-white  flex justify-center items-center font-bold w-40 h-12 rounded-xl bg-blue-600 hover:bg-blue-800"
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
