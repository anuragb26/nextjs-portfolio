import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-slate-700 col-span-1 sticky top-0 p-3 text-white uppercase font-extrabold font-serif flex">
      <div>
        <Image
          src="/images/pic.jpg" // Route of the image file
          height={48} // Desired size with correct aspect ratio
          width={48} // Desired size with correct aspect ratio
          alt="Anurag Bajaj"
          className="rounded-full"
        />
      </div>
      <p className="align-middle px-2">Anurag Bajaj</p>
    </header>
  );
}
