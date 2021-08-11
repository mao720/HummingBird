import Image from "next/image";
import React from "react";

export default function Footer() {
    return <footer className="w-full border-t border-gray-200 flex justify-center">
        <a className="flex h-12 flex-row items-center"
           target="_blank" rel="noopener noreferrer"
           href="https://www.bilibili.com/read/cv11909914">
            <Image className="rounded-2xl" src="/images/hummingbird.jpeg" alt="Hummingbird Logo"
                   width={20} height={20}/>
            <text className="ml-2">Dios aprieta pero no ahoga</text>
        </a>
    </footer>
}
