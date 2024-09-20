'use client'

import React, {Fragment, MouseEventHandler, useEffect, useRef, useState} from 'react'
import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {useRouter, useSearchParams} from 'next/navigation'
import Link from 'next/link'

export default function Modal({
        children, buttonBody, title, buttons, urlExtension, overrideIsShown
    }: {children: Readonly<React.ReactNode>, buttonBody: React.ReactNode, title: string, buttons: Array<[string, MouseEventHandler]>, urlExtension: string, overrideIsShown?: boolean}
) {

    const params = useSearchParams()
    const router = useRouter()

    const query = params.get(urlExtension)

    return (
        <>
            <Link id="open-window" href={`?${urlExtension}=y`}>
                <div className="justify-center items-center">
                    {buttonBody}
                </div>
            </Link>
            <Transition appear show={query == 'y'} as={Fragment}>
                <Dialog transition open={overrideIsShown ?? query == 'y'} onClose={() => {
                    router.push("/")
                }} className="flex w-screen items-start relative z-50">
                    <TransitionChild as={Fragment}
                                     enter="ease-out duration-300"
                                     enterFrom="opacity-0 scale-95"
                                     enterTo="opacity-100 scale-100"
                                     leave="ease-in duration-200"
                                     leaveFrom="opacity-100 scale-100"
                                     leaveTo="opacity-0 scale-95">
                        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-gray-400 dark:bg-gray-900 dark:bg-opacity-60 bg-opacity-70">
                            <DialogPanel className="max-w-full w-[70vw] sm:w-[90vw] h-[90vh] max-h-full p-10 bg-gray-100 dark:bg-gray-950 rounded-[12px] overflow-scroll" transition>
                                <DialogTitle className="text-4xl font-semibold mb-4">{title}</DialogTitle>
                                <div className={"overflow-scroll"}>{children}</div>
                                <div className="absolute bottom-4 left-16 gap-5 border-3 p-2 flex flex-row border-4 backdrop-blur-md rounded-md border-red-400">
                                    {buttons.map((stringFuncPair, index) => {
                                        return <Link key={index} href={`/`} className={"w-min dark:hover:bg-gray-700 hover:bg-gray-400 rounded-md"} onClick={
                                            e => {
                                                stringFuncPair[1](e)
                                            }
                                        }
                                        ><h2
                                            className="text-xl w-max dark:bg-gray-800 backdrop-blur-xl text-gray-800 dark:text-gray-300 bg-gray-300 p-2 rounded-sm hover:bg-gray-400">{stringFuncPair[0]}</h2>
                                        </Link>
                                    })}
                                </div>
                            </DialogPanel>
                        </div>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </>
    )
}