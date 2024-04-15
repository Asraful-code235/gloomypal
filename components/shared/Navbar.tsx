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
        <Image
          src={"/icons/twitter.svg"}
          width={80}
          height={44}
          alt="logo"
          className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
        />
        <Image
          src={"/icons/pill.svg"}
          width={80}
          height={44}
          alt="logo"
          className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
        />
        <Image
          src={"/icons/telegram.svg"}
          width={80}
          height={44}
          alt="logo"
          className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
        />
        <Image
          src={"/icons/owl.svg"}
          width={80}
          height={44}
          alt="logo"
          className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
        />
        <Image
          src={"/icons/instagram.svg"}
          width={80}
          height={44}
          alt="logo"
          className="w-5 h-5 object-center object-cover aspect-auto cursor-pointer"
        />
      </div>
    </header>
  );
}
