import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function About() {
    return <div className="flex flex-col h-screen overflow-y-hidden">
        <Head>
            <title>网站简介</title>
            <meta name="description" content="mao720 个人网站"/>
            <link rel="icon" href={"/images/hummingbird.jpeg"}/>
        </Head>
        <nav className="absolute flex items-center h-12 w-full shadow-md">
            <Link href="/">
                <a className="flex h-12 flex-row items-center hover:bg-blue-100"
                   target="_self" rel="noopener noreferrer">
                    <Image className="" src="/images/hummingbird.jpeg" alt="Home"
                           width={48} height={48}/>
                    <text className="mx-2 text-lg font-kai md:text-2xl">蜂鸟之歌</text>
                </a>
            </Link>
        </nav>
        <main className="flex flex-1 flex-col mt-12 items-center justify-center overflow-y-auto">
            <text className="font-kai text-xl md:text-3xl">学而不思则罔，思而不学则殆</text>
            <text className="text-base md:text-xl mt-36 mb-4">（记录知识的个人网站）</text>
            <text className="text-base md:text-xl font-kai mt-4">Email: mao720@foxmail.com</text>
            <Link href="https://github.com/mao720">
                <a className="flex h-12 flex-row items-center"
                   target="_self" rel="noopener noreferrer">
                    <Image className="rounded-full" src="/images/profile.jpg" alt="profile"
                           width={24} height={24}/>
                    <text className="mx-2 text-base font-kai md:text-xl">Github: mao720</text>
                </a>
            </Link>
        </main>
        <Footer/>
    </div>
}
