import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="header-main-div bg-blue-600 w-full h-[3.5rem] flex justify-around items-center">
        <h1 className="text-[1.7rem] text-white font-thin first-letter:text-[2.1rem] first-letter:text-red-200 first-letter:font-bold ">
          Blog
        </h1>
        <ul className="flex text-white gap-6">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <a href={"https://hamzah.vercel.app/"} target="_blank">
            <li>Portfolio</li>
          </a>
        </ul>
      </div>
    </>
  );
}
