'use client'

import React, {MouseEventHandler} from 'react'
import {Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import {useSearchParams} from 'next/navigation'
import Link from 'next/link'

export default function Modal({
        children, buttonBody, title, buttons, urlExtension
    }: {children: Readonly<React.ReactNode>, buttonBody: React.ReactNode, title: string, buttons: Array<[string, MouseEventHandler]>, urlExtension: string}
) {

    const params = useSearchParams()
    const isShown = params.get(urlExtension) === 'y'

    return (
        <>
            <Link id="open-window" href={`?${urlExtension}=y`}>
                <div className="justify-center items-center">
                    {buttonBody}
                </div>
            </Link>
            <Dialog transition open={isShown} onClose={() => {}} className="flex w-screen items-start relative z-50">
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-gray-400 bg-opacity-70">
                    <DialogPanel className="max-w-full w-[70vw] h-[90vh] max-h-full p-10 bg-gray-100 dark:bg-gray-950" transition>
                        <DialogTitle className="text-2xl font-semibold mb-4">{title}</DialogTitle>
                        <div>{children}</div>
                        <div className="flex gap-5 mt-6">
                            {buttons.map((stringFuncPair, index) => {
                                return <Link key={index} className="hover:bg-gray-300 rounded-sm px-1" href={'?new-recipe=n'} onClick={
                                    (e) => {
                                        stringFuncPair[1](e)
                                    }
                                }
                                >{stringFuncPair[0]}</Link>
                            })}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}