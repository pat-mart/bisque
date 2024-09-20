'use client'

import React, {useState} from "react";
import Sidebar from "@/app/components/header/sidebar";
import XIcon from '../../../../public/images/x-icon'
import SearchIcon from '../../../../public/images/search-icon'
import Link from 'next/link'
import PlusIcon from '../../../../public/images/plus-icon'
import NewRecipe from '@/app/components/modals/new_recipe/new-recipe'
import SignIn from '@/app/components/modals/sign-up/sign-in'
import UserIcon from '../../../../public/images/user-icon'
import {getAuth} from '@firebase/auth'

export default function Header() {

    const [query, setQuery] = useState('')
    const handleChange = (s: any) => setQuery(s.target.value)

    const auth = getAuth()

    console.log(auth.currentUser)

    return (
        <div className="flex w-full bg-red-300 dark:bg-purple-900 h-20 justify-evenly items-center">
            <div className="flex flex-row mr-12">
                <Sidebar/>
                {/*Sidebar has mr-12 in highest level div*/}
                <Link href={"/screens/home"}><h1 className="text-2xl font-bold">Bisque</h1></Link>
            </div>
            <div id="searchbar" className="flex items-center w-1/2">
                <div className="opacity-70 w-6 h-6 -mr-8 relative z-10">
                    <SearchIcon/>
                </div>
                <input className="z-0 relative rounded-sm dark:bg-gray-900 py-2.5 pl-10 w-full" value={query} placeholder={"beef wellington"}
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
                    <Link href={"/screens/account"}><UserIcon/></Link>
                </div>
                <div className="block w-6 h-6 ml-10 cursor-pointer">
                    {auth.currentUser != null ? (
                        <NewRecipe buttonBody={
                            <PlusIcon/>
                        }/>
                    ):
                        <SignIn buttonBody={<PlusIcon/>}/>
                    }
                </div>
            </div>
        </div>
    )
}