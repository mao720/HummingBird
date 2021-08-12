import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import React from "react";
import Date from "../../components/date";

export default function Post({postData}: any) {
    return <div className="w-full flex flex-col items-center">
        <Head><title>{postData.title}</title></Head>
        <article
            className="prose prose-yellow w-11/12 md:w-2/3 md:max-w-5xl flex flex-col items-center py-8 px-4 md:px-24 my-6 border border-gray-300">
            <h2 className="font-kai">{postData.title}</h2>
            <Date dateString={postData.date}/>
            <p className="w-full bg-gray-300 h-px"/>
            <div className="" dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
        </article>
    </div>
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: any) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
