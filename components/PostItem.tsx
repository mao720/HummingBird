import React from "react";
import Link from "next/link";
import Date from "./date";

export default function PostItem({id, date, title}: any) {
    return <li className="flex flex-1 justify-center mt-2" key={id}>
        <Link href={`/posts/${id}`}>
            <a className="flex flex-1 flex-col border border-gray-300 p-4 rounded-lg hover:shadow-lg hover:bg-yellow-50 md:p-8">
                <Date dateString={date}/>
                <text className="text-base md:text-lg mt-2 text-black">{title}</text>
            </a>
        </Link>
    </li>
}
