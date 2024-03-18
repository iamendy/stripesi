import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-[30%]  h-full">
      <div className="flex flex-col gap-y-3  ">
        <Link
          href="/dashboard"
          className="p-2 border rounded-md bg-black/90 text-white text-center font-semibold"
        >
          Dashboard
        </Link>

        <Link href="/store" className="p-2 border text-center">
          Payment Links
        </Link>

        <Link href="/store" className="p-2 border text-center">
          Create Shop
        </Link>

        <Link href="/withdraw" className="p-2 border text-center">
          Withdraw
        </Link>

        <Link href="/withdraw" className="p-2 border text-center">
          Settings
        </Link>
      </div>
    </aside>
  );
};
export default Sidebar;
