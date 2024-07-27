import React, {ReactNode} from 'react'

export default function Modal({isShown, children, onClose}: {isShown: boolean, children: ReactNode, onClose: () => void}) {

    if(!isShown) return null

    return (
        <div className={"fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center z-50"}>
            <div className={"bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"}>
                {children}
            </div>
            <button onClick={onClose}>Close</button>
        </div>
    )
}