import Image from "next/image";

export default function Header() {
  return (
    <header
      className=" col-span-1 sticky top-0 p-2 opacity-90  text-white uppercase font-extrabold font-serif grid grid-cols-[1fr_9fr] bg-slate-800
      shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
    "
    >
      <div className="col-span-1 flex justify-center items-center">
        <Image
          src="/images/pic.jpg"
          height={64}
          width={64}
          alt="Anurag Bajaj"
          className="rounded-full"
        />
      </div>
      <p className="col-span-1 flex items-center">Anurag Bajaj</p>
    </header>
  );
}
