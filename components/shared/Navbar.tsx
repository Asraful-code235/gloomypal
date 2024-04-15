import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-[#48484A] flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-lg w-full">
      {/* logo */}
      <div className="text-white flex items-center tracking-wider">
        <Image
          src={"/icons/logo.svg"}
          width={80}
          height={44}
          alt="logo"
          className="w-20 h-11 object-center object-cover aspect-auto"
        />
        POU
      </div>
      {/* social */}
      <div className="flex items-center gap-4">
        <a
          href="https://x.com/PouInBio?t=hPPyaF7ndX-R_P9THaHeGw&s=09"
          target="_blank"
        >
          <Image
            src={"/icons/twitter.svg"}
            width={80}
            height={44}
            alt="logo"
            className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
          />
        </a>
        <a
          href="https://www.pump.fun/144QUTGfmdmbsU3qniHRcWmDa9WGHJXQ6h9P3EEM32eo"
          target="_blank"
        >
          <Image
            src={"/icons/pill.svg"}
            width={80}
            height={44}
            alt="logo"
            className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
          />
        </a>
        <a href="https://t.me/+rGKTdKl3VO1lMjI0" target="_blank">
          <Image
            src={"/icons/telegram.svg"}
            width={80}
            height={44}
            alt="logo"
            className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
          />
        </a>
        <Image
          src={"/icons/owl.svg"}
          width={80}
          height={44}
          alt="logo"
          className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
        />
        <a
          href="https://www.instagram.com/gloomypalofficial?igsh=MW1zNTJpdzV4NjZqcg=="
          target="_blank"
        >
          <Image
            src={"/icons/instagram.svg"}
            width={80}
            height={44}
            alt="logo"
            className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
          />
        </a>
      </div>
    </header>
  );
}
