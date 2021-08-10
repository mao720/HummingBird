import {parseISO, format} from 'date-fns'
import React from "react";

export default function Date({dateString}: any) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>
}
