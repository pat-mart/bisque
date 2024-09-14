'use client'

import MenuIcon from "../../../../public/images/menu-icon"
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import XIcon from '../../../../public/images/x-icon'
import React, {useRef} from 'react'
import SearchIcon from '../../../../public/images/search-icon'
import ListIcon from '../../../../public/images/list-icon'
import UserIcon from '../../../../public/images/user-icon'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import NewRecipe from '@/app/components/modals/new_recipe/new-recipe'
import PlusIcon from '../../../../public/images/plus-icon'

export default function Sidebar() {

    // Highlights tab of page user is on
    const pathname = usePathname()
    const isActive = (path: string) => path === pathname

    const closeMenuRef = useRef<any>(null)
    const onLinkClick = () => { // Gets menu to close after page change
        if (closeMenuRef.current)
            closeMenuRef.current?.click()
    }

    // Keep this collapsed in IDE
    function getMenuTile(text: string, icon: React.JSX.Element, link_route: string) {
        return (
            <Link href={link_route ?? "/public"} onClick={onLinkClick}>
                <div className="justify-between items-center">
                    <h2 className={`flex drop-shadow-sm rounded-sm bg-gray-300 dark:bg-gray-600 ${isActive(link_route) ? "bg-gray-400 saturate-50" : ""} my-8 py-6 pl-5 hover:bg-gray-400 hover:saturate-50 hover:cursor-pointer items-center`}>
                        <div className="block h-6 w-6 mr-3 opacity-60">
                            {icon}
                        </div>
                        {text}
                    </h2>
                </div>
            </Link>
        )
    }

    return (
        <div className="mr-12">
            <Disclosure as="nav">
                <DisclosureButton className="inline-flex items-center justify-between focus:outline-0 border-opacity-0 hover:opacity-40">
                    <div className="block h-6 w-6" aria-hidden="true">
                        <MenuIcon/>
                    </div>
                </DisclosureButton>
                <DisclosurePanel transition className="origin-left transition duration-200 ease-out ata-[closed]:-translate-y-6 data-[closed]:opacity-0">
                    <div className="backdrop-blur-md w-1/4 h-screen bg-gray-300 dark:bg-neutral-900 z-20 bg-opacity-70 fixed top-0 left-0 before:backdrop-brightness-50 before:backdrop-blur-md">
                        <DisclosureButton ref={closeMenuRef} id="close-menu-button">
                            <div className="absolute opacity-70 right-0 mr-3 mt-6">
                                <div className="block h-10 w-10">
                                    <XIcon/>
                                </div>
                            </div>
                        </DisclosureButton>
                        <nav className="flex flex-col my-24 mx-3">
                            <NewRecipe buttonBody={
                                <h2 className="text-center rounded-sm flex drop-shadow-sm bg-red-300 dark:bg-purple-500 my-8 py-6 pl-5 hover:bg-gray-400 hover:saturate-50 hover:cursor-pointer items-center">
                                    <div className="flex flex-row">
                                        <div className="w-6 h-6 mr-3">
                                            <PlusIcon/>
                                        </div>
                                        Create new recipe
                                    </div>
                                </h2>
                            }/>
                            {getMenuTile("Home", <SearchIcon/>, "/screens/home")}
                            {getMenuTile("My recipes", <ListIcon/>, "/screens/my-recipes")}
                            {getMenuTile("Account", <UserIcon/>, "/screens/account")}
                            <div className="flex bottom-1 mt-24 w-full flex-row justify-evenly items-center">
                            <a className="text-sm px-1 underline hover:bg-gray-300 hover:cursor-pointer rounded-sm">About Bisque</a>
                                <a className="text-sm px-1 underline hover:bg-gray-300 hover:cursor-pointer rounded-sm">Feedback</a>
                            </div>
                        </nav>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}