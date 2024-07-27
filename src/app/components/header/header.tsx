'use client'

import React, {useState, useEffect} from "react";
import Sidebar from "@/app/components/sidebar/sidebar";
import XIcon from '../../../../public/images/x-icon'
import SearchIcon from '../../../../public/images/search-icon'
import NotiIcon from '../../../../public/images/noti-icon'

export default function Header({isSignedIn}: { isSignedIn: boolean }) {

    const placeholderStrings: string[] = ["rice-a-roni", "beef wellington", "beef stew", "chicken noodle soup"]
    const [placeholder, setPlaceholder] = useState(placeholderStrings[0])
    const getPlaceholder = () => placeholderStrings[Math.floor(Math.random() * placeholderStrings.length)]

    const [query, setQuery] = useState('')
    const handleChange = (s: any) => setQuery(s.target.value)

    useEffect(() => {
        setPlaceholder(getPlaceholder())
    }, [])

    return (
        <div className="flex w-full h-20 bg-red-400 saturate-50 justify-evenly items-center">
            <h1 className="text-2xl font-bold">Bisque</h1>
            <div className="flex items-center w-1/2">
                <div className="opacity-70 w-6 h-6 -mr-7 z-20 relative">
                    <SearchIcon/>
                </div>
                <input className="z-0 relative py-2.5 pl-9 w-full" value={query} placeholder={placeholder} onChange={handleChange} inputMode={"search"}></input>
                <button className={`transition-opacity duration-300 ease-in-out -ml-8 ${
                    query.length === 0 ? "opacity-0" : "opacity-70"
                }`} onClick={() => setQuery("")}>
                    <div className={"block w-6 h-6"}>
                        <XIcon/>
                    </div>
                </button>
                <div className="block w-6 h-6 ml-8">
                    <NotiIcon/>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}