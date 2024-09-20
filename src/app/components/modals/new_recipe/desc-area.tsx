'use client'

import {useState} from 'react'

export default function DescriptionArea() {

    const [desc, setDesc] = useState<string>('')

    return (
        <div className={"flex flex-col mb-4"}>
            <div className={"flex flex-row items-center space-x-3 mb-2"}>
                <h3 className={"text-xl"}>Description</h3>
                <h3 className={"text-xl text-gray-400"}>({desc.trim().length}/500)</h3>
            </div>
            <div className="flex flex-col bg-gray-200 dark:bg-gray-800 w-full rounded-sm">
                <div className="flex flex-row w-full justify-between items-end">
                    <div className="flex flex-col w-full space-x-3 mr-3">
                        <textarea name="description" maxLength={500} placeholder={"Briefly describe your recipe."}
                                  className={"rounded-sm bg-gray-100 py-1 pl-1 m-2"} value={desc} onChange={s => setDesc(s.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}