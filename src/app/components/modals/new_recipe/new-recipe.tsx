'use client'

import Modal from '@/app/components/modals/modal'
import {useState} from 'react'

export default function NewRecipe() {

    const [title, setTitle] = useState<string>('')

    const [cookTime, setCookTime] = useState<string>('')
    const [prepTime, setPrepTime] = useState<string>('')

    function isValidNumber(input: string): boolean {
        const num = parseInt(input)
        return !(isNaN(num) || num < 1 || num > 10000)
    } // Collapse in IDE

    function validateAndRound(input: string): string  {

        if(!isValidNumber(input))
            return ""

        const num = parseInt(input)

        return (Math.round(num / 5) * 5).toString()
    } // Collapse

    return (
        <Modal title={"Create new recipe"} urlExtension={'new-recipe'} buttons={[
            ["Save to drafts", () => {}],
            ["Publish", () => {}],
            ["Cancel", () => {}]
        ]}>
            <div className="flex flex-col">
                <input className="p-2 w-full text-xl font-semibold bg-gray-100 border-b-gray-400 border-b-2 pl-1" placeholder="Title"
                    value={title} onChange={(s) => setTitle(s.target.value)}/>
                <div className="flex mt-4 justify-evenly align-middle gap-x-4">
                    <div className="mt-4">
                        <h3 className="text-gray-400 pl-1">Prep time (min)</h3>
                        <input className="p-2 mt-2 pl-1 w-lg bg-gray-100" placeholder="30" value={prepTime}
                              onChange={(s) => setPrepTime(s.target.value)}
                              onBlur={(s) => setPrepTime(validateAndRound(prepTime))}
                        />
                    </div>
                    <div className="mt-4">
                        <h3 className="text-gray-400 pl-1">Cook time (min)</h3>
                        <input className="p-2 mt-2 pl-1 w-lg bg-gray-100" placeholder="30" value={cookTime}
                              onChange={(s) => setCookTime(s.target.value)}
                              onBlur={(s) => setCookTime(validateAndRound(cookTime))}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}