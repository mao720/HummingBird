import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import React, {useState} from "react"
import {getLabelMapOfPostsDataList, getLabels, getSortedPostsData} from "../lib/posts"
import PostItem from "../components/PostItem"
import Footer from "../components/Footer"
import {GRADIENT_COLORS} from "../components/colors";

export default function Home({labels, labelMap}: any) {
    let [postsList, setPostsList] = useState(labelMap[labels[0]])
    let [selectedLabelIndex, setSelectedLabelIndex] = useState(0)
    return (
        <div className="flex flex-col items-center h-screen overflow-y-hidden bg-gray-50">
            <Head>
                <title>蜂鸟之歌</title>
                <meta name="description" content="mao720 个人网站"/>
                <link rel="icon" href={"/images/hummingbird.jpeg"}/>
            </Head>
            <nav className="absolute flex items-center h-12 w-full shadow-md">
                <Link href={"/about"}>
                    <a className="flex h-12 flex-row items-center hover:bg-blue-100"
                       target="_self" rel="noopener noreferrer">
                        <Image className="" src="/images/hummingbird.jpeg" alt="hummingbird"
                               width={48} height={48}/>
                        <text className="mx-2 text-lg font-kai md:text-2xl">蜂鸟之歌</text>
                    </a>
                </Link>
                <p className="flex flex-1"/>
                <Link href={"/about"}>
                    <a className="h-12 flex px-4 items-center justify-center hover:bg-blue-100"
                       target="_self" rel="noopener noreferrer">
                        <text className="">About</text>
                    </a>
                </Link>
            </nav>
            <main className="flex w-full overflow-y-scroll flex-1 flex-col items-center mt-12 font-kai">
                <ul className="my-8 md:my-12 w-11/12 md:w-2/3">
                    <div className="flex flex-row mb-4 md:mb-8 flex-wrap">
                        {labels.map((value: any, index: number) => {
                                let style = selectedLabelIndex == index ? GRADIENT_COLORS[index % GRADIENT_COLORS.length]
                                    + " text-white" : ""
                                let length = labelMap[value].length;
                                return <button
                                    className={"mx-1 px-1 rounded text-sm font-thin bg-gradient-to-r " + style}
                                    onClick={() => {
                                        setSelectedLabelIndex(index)
                                        setPostsList(labelMap[value])
                                    }}
                                    key={value}>{value + (length > 0 ? (' (' + length + ')') : '')}</button>
                            }
                        )}
                    </div>
                    {postsList.map(({id, date, title}: any) =>
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
    const labelMap = getLabelMapOfPostsDataList(allPostsData)
    const labels = getLabels(labelMap)
    return {
        props: {
            labels,
            labelMap,
        }
    }
}
