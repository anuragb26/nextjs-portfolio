import Image from "next/image";

export default function Sidebar() {
  return (
    <section className="sidebar bg-gray-900 text-white flex w-full p-2">
      <ul className="w-full pt-4">
        <li className="flex w-full pb-4">
          <Image
            src="/images/capability.png"
            height={32}
            width={32}
            alt="Anurag Bajaj"
            className="rounded-full"
          />
          <p className="pl-2">Skills</p>
        </li>
        <li className="flex w-full pb-4">
          <Image
            src="/images/online.png"
            height={32}
            width={32}
            alt="Anurag Bajaj"
            className="rounded-full"
          />
          <p className="pl-2">Work experience</p>
        </li>
        <li className="flex w-full pb-4">
          <Image
            src="/images/certificate.png"
            height={32}
            width={32}
            alt="Anurag Bajaj"
            className="rounded-full"
          />
          <p className="pl-2">Certificates</p>
        </li>
        <li className="flex w-full pb-4">
          <Image
            src="/images/graduation-cap.png"
            height={32}
            width={32}
            alt="Anurag Bajaj"
            className="rounded-full"
          />
          <p className="pl-2">Education</p>
        </li>
      </ul>
    </section>
  );
}
