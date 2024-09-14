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
                    <DialogPanel className="max-w-full w-[70vw] sm:w-[90vw] h-[90vh] max-h-full p-10 bg-gray-100 dark:bg-gray-950 rounded-[12px]" transition>
                        <DialogTitle className="text-4xl font-semibold mb-4">{title}</DialogTitle>
                        <div>{children}</div>
                        <div className="absolute flex bottom-2 left-2 gap-5 mt-6">
                            {buttons.map((stringFuncPair, index) => {
                                return <Link key={index} href={`/`} onClick={
                                    (e) => {
                                        stringFuncPair[1](e)
                                    }
                                }
                                ><h2 className="text-xl bg-gray-200 p-2 rounded-sm hover:bg-gray-300">{stringFuncPair[0]}</h2></Link>
                            })}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}