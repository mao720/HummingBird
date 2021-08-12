import {parseISO, format} from 'date-fns'
import React from "react";

export default function Date({dateString}: any) {
    if (!dateString) return <text className="text-sm md:text-base text-gray-400">0000年00月00日</text>
    const date = parseISO(dateString)
    return <time className="text-sm md:text-base text-gray-400"
                 dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>
};
