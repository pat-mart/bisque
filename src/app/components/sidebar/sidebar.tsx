import MenuIcon from "../../../../public/images/menu-icon"
import {Disclosure, DisclosureButton, DisclosurePanel, Menu} from '@headlessui/react'
import XIcon from '../../../../public/images/x-icon'
import React, {ReactNode} from 'react'

export default function Sidebar() {

    function getMenuTile(text: string, icon?: ReactNode) {
        return (
            <div className="flex flex-col justify-between items-center">
                {icon}
                <h2 className={"flex drop-shadow-sm bg-gray-300 my-8 py-6 pl-5 hover:bg-gray-400 hover:bg-opacity-80"}>{text}</h2>
            </div>
        )
    }

    return (
        <div>
            <Disclosure as="nav">
                <DisclosureButton className="inline-flex items-center justify-between focus:outline-0 border-opacity-0 hover:opacity-40">
                    <div className="block h-6 w-6" aria-hidden="true">
                        <MenuIcon/>
                    </div>
                </DisclosureButton>
                <DisclosurePanel transition className="origin-left transition duration-200 ease-out ata-[closed]:-translate-y-6 data-[closed]:opacity-0">
                    <div className="backdrop-blur-md w-1/4 h-screen bg-gray-300 bg-opacity-80 z-20 fixed top-0 left-0 before:backdrop-brightness-50 before:backdrop-blur-md">
                        <DisclosureButton>
                            <div className="absolute opacity-70 right-0 mr-3 mt-6">
                                <div className="block h-10 w-10">
                                    <XIcon/>
                                </div>
                            </div>
                        </DisclosureButton>
                        <nav className="flex flex-col my-24 mx-3">
                            {getMenuTile("Browse")}
                            {getMenuTile("My recipes")}
                            {getMenuTile("Create new recipe")}
                            {getMenuTile("Account")}
                            <div className="flex bottom-1 mt-12 w-full flex-row justify-evenly items-center">
                                <a className="opacity-60 text-sm underline hover:bg-gray-400 hover:cursor-pointer rounded-sm">About Bisque</a>
                                <a className="opacity-60 text-sm underline hover:bg-gray-400 hover:cursor-pointer rounded-sm">Feedback</a>
                            </div>
                        </nav>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}