'use client'

import Modal from '@/app/components/modals/modal'
import React, {useState} from 'react'
import IngrList from '@/app/components/modals/new_recipe/ingr-list'

export default function NewRecipe({buttonBody} : {buttonBody: React.ReactNode}) {

    const [title, setTitle] = useState<string>('')

    const [cookTime, setCookTime] = useState<string>('')
    const [prepTime, setPrepTime] = useState<string>('')

    const [servings, setServings] = useState<string>('')

    function isValidNumber(input: string): boolean {
        const num = parseInt(input)
        return !(isNaN(num) || num < 1 || num > 1000)
    } // Collapse in IDE

    function validateAndRound(input: string): string  {

        if(!isValidNumber(input))
            return ""

        const num = parseInt(input)

        return (Math.round(num / 5) * 5).toString()
    } // Collapse

    function validateServings(input: string): string {
        if(!isValidNumber(input)){
            return ""
        }

        return input
    }

    return (
        <Modal buttonBody={buttonBody} title={"Create new recipe"} urlExtension={'new-recipe'}
           buttons={[
            ["Save to drafts", () => {}],
            ["Publish", () => {}],
            ["Cancel", () => {}]
        ]}>
        <div className="flex flex-col">
                <input className="p-2 w-full text-xl font-semibold bg-gray-100 border-b-gray-400 border-b-2 pl-1" placeholder="Title"
                    value={title} onChange={(s) => setTitle(s.target.value)}/>
            <div className="flex mt-4 justify-start align-middle gap-x-4">
                <div className="mt-2">
                    <h3 className="text-gray-400 pl-1">Prep time (min)</h3>
                    <input className="p-2 pl-1 w-[30%] bg-gray-100" placeholder="30" value={prepTime}
                           onChange={(s) => setPrepTime(s.target.value)}
                           onBlur={(s) => setPrepTime(validateAndRound(prepTime))}
                    />
                </div>
                <div className="mt-2">
                    <h3 className="text-gray-400 pl-1">Cook time (min)</h3>
                    <input className="p-2 pl-1 w-[30%] bg-gray-100" placeholder="30" value={cookTime}
                           onChange={(s) => setCookTime(s.target.value)}
                           onBlur={(s) => setCookTime(validateAndRound(cookTime))}
                    />
                </div>
                <div className="mt-2">
                    <h3 className="text-gray-400 pl-1">Serves</h3>
                    <input className="p-2 pl-1 w-[30%] bg-gray-100" placeholder="4" value={servings}
                           onChange={(s) => setServings(s.target.value)}
                           onBlur={(s) => setServings(validateAndRound(cookTime))}
                    />
                </div>
            </div>
            <IngrList/>
        </div>
        </Modal>
    )
}