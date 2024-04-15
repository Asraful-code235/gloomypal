"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import BarCode from "./shared/BarCode";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = "144QUTGfmdmbsU3qniHRcWmDa9WGHJXQ6h9P3EEM32eo";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard:", textToCopy);
        setCopied(true);
        // Optionally, you can provide user feedback here
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
        // Handle any error occurred during copying
      });
  };
  return (
    <section className="bg-white rounded-lg h-full flex-1 w-full p-4 flex flex-col gap-10 items-center justify-center">
      <Image
        src={"/icons/hero.svg"}
        width={478}
        height={427}
        alt="logo"
        className="w-full  max-w-[600px] object-center object-cover aspect-auto cursor-pointer"
      />
      <Button
        onClick={() => setOpen(!open)}
        variant={"outline"}
        className="shadow-md tracking-wider"
      >
        SCAN ME
      </Button>

      <div className="flex items-center gap-4 justify-center">
        <p className="tracking-wider max-md:text-[8px] whitespace-pre-wrap break-words ">
          CA: 144QUTGfmdmbsU3qniHRcWmDa9WGHJXQ6h9P3EEM32eo
        </p>
        <Button
          onClick={handleCopyClick}
          variant={"outline"}
          className="flex items-center gap-2 tracking-wider"
        >
          {" "}
          {copied ? "COPIED" : "COPY"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </Button>
      </div>
      <BarCode open={open} setOpen={setOpen} />
    </section>
  );
}
