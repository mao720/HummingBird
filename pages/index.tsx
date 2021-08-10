import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import React from "react"
import {getSortedPostsData} from "../lib/posts"
import PostItem from "../components/PostItem"
import Footer from "../components/Footer"

export default function Home({allPostsData}: any) {
    return (
        <div className="flex flex-col items-center h-screen overflow-y-hidden bg-gray-50">
            <Head>
                <title>蜂鸟之歌</title>
                <meta name="description" content="mao720 个人网站"/>
                <link rel="icon" href={"/images/hummingbird.jpeg"}/>
            </Head>
            <nav className="absolute flex items-center h-12 w-full shadow-md">
                <Link href="/about">
                    <a className="flex h-12 flex-row items-center hover:bg-blue-100"
                       target="_self" rel="noopener noreferrer">
                        <Image className="" src="/images/hummingbird.jpeg" alt="hummingbird"
                               width={48} height={48}/>
                        <text className="mx-2 text-lg font-kai md:text-2xl">蜂鸟之歌</text>
                    </a>
                </Link>
                <p className="flex flex-1"/>
                <Link href="/about">
                    <a className="h-12 flex px-4 items-center justify-center hover:bg-blue-100"
                       target="_self" rel="noopener noreferrer">
                        <text className="">About</text>
                    </a>
                </Link>
            </nav>
            <main className="flex w-full overflow-y-scroll flex-1 flex-col items-center mt-8 md:mt-12 pb-12 font-kai">
                <ul className="w-11/12  my-8 md:w-2/3">
                    {allPostsData.map(({id, date, title}: any) =>
                        <PostItem id={id} date={date} title={title} key={id}/>
                    )}
                </ul>
            </main>
            <Footer/>
        </div>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
