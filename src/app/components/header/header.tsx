export default function Header() {
  return (
    <>
      <div className="header-main-div bg-blue-600 w-full h-[3.5rem] flex justify-around items-center">
        <h1 className="text-[1.7rem] font-bold first-letter:text-[2.1rem] first-letter:text-red-900">
          Hamza
        </h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </>
  );
}
