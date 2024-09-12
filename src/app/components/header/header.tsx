'use client'

import React, {useState, useEffect} from "react";
import Sidebar from "@/app/components/header/sidebar";
import XIcon from '../../../../public/images/x-icon'
import SearchIcon from '../../../../public/images/search-icon'
import NotiIcon from '../../../../public/images/noti-icon'
import PlusIcon from '../../../../public/images/plus-icon'
import NewRecipe from '@/app/components/modals/new_recipe/new-recipe'

export default function Header() {

    const placeholderStrings: string[] = ["rice-a-roni", "beef wellington", "beef stew", "chicken noodle soup"]
    const [placeholder, setPlaceholder] = useState(placeholderStrings[0])
    const getPlaceholder = () => placeholderStrings[Math.floor(Math.random() * placeholderStrings.length)]

    const [query, setQuery] = useState('')
    const handleChange = (s: any) => setQuery(s.target.value)

    useEffect(() => {
        setPlaceholder(getPlaceholder())
    }, [])

    return (
        <div className="flex w-full bg-gradient-to-r from-gray-300 to-red-400 dark:bg-gradient-to-r dark:from-gray-600 dark:to-purple-900 h-20 justify-evenly items-center">
            <div className="flex flex-row mr-12">
                <Sidebar/>
                {/*Sidebar has mr-12 in highest level div*/}
                <h1 className="text-2xl font-bold">Bisque</h1>
            </div>
            <div id="searchbar" className="flex items-center w-1/2">
                <div className="opacity-70 w-6 h-6 -mr-7 z-20 relative">
                    <SearchIcon/>
                </div>
                <input className="z-0 relative dark:bg-gray-800 py-2.5 pl-9 w-full" value={query} placeholder={placeholder}
                       onChange={handleChange} inputMode={"search"}></input>
                <button className={`transition-opacity duration-300 ease-in-out -ml-8 ${
                    query.length === 0 ? "opacity-0" : "opacity-70"
                }`} onClick={() => setQuery("")}>
                    <div className={"block w-6 h-6"}>
                        <XIcon/>
                    </div>
                </button>
            </div>
            <div id="buttons" className="flex items-center justify-evenly ml-12">
                <div className="block w-6 h-6 cursor-pointer">
                    <NotiIcon/>
                </div>
                <div className="block w-6 h-6 ml-10 cursor-pointer">
                    <NewRecipe buttonBody={
                        <PlusIcon/>
                    }/>
                </div>
            </div>
        </div>
    )
}