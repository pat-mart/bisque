'use client'

import Modal from '@/app/components/modals/modal'
import React, {useState} from 'react'
import IngrList from '@/app/components/modals/new_recipe/ingr-list'

export default function NewRecipe({buttonBody} : {buttonBody: React.ReactNode}) {

    const [cookTime, setCookTime] = useState<string>('') // All these kept for rounding purposes
    const [prepTime, setPrepTime] = useState<string>('')

    const [servings, setServings] = useState<string>('')

    function isValidNumber(input: string): boolean {
        const num = parseInt(input)
        return !(isNaN(num) || num < 1 || num > 1000)
    } // Collapse in IDE

    function validateAndRound(input: string, to: number): string  {

        if(!isValidNumber(input))
            return ""

        const num = parseInt(input)

        return (Math.round(num / to) * to).toString()
    } // Collapse

    return (
        <Modal buttonBody={buttonBody} title={"Create new recipe"} urlExtension={'new-recipe'}
           buttons={[
            ["Save to drafts", () => {}],
            ["Publish", () => {}],
            ["Cancel", () => {}]
        ]}>
            <div className="flex flex-col">
                    <input className="p-2 w-full text-xl font-semibold bg-gray-100 border-b-gray-400 dark:bg-gray-700 border-b-2 pl-1" placeholder="Title"/>
                <div className="flex mt-4 justify-start align-middle gap-x-4 mb-4">
                    <div className="mt-2">
                        <h3 className="text-gray-400 mb-1 dark:text-gray-200">Prep time (min)</h3>
                        <input className="p-2 pl-1 w-[30%] bg-gray-100 dark:bg-gray-700" placeholder="30" value={prepTime} type="number" max="999"
                               onChange={(s) => setPrepTime(s.target.value)}
                               onBlur={(s) => setPrepTime(validateAndRound(prepTime, 5))}
                        />
                    </div>
                    <div className="mt-2">
                        <h3 className="text-gray-400 mb-1 dark:text-gray-200">Cook time (min)</h3>
                        <input className="p-2 pl-1 w-[30%] bg-gray-100 dark:bg-gray-700" placeholder="30" value={cookTime} type="number" max="999"
                               onChange={(s) => setCookTime(s.target.value)}
                               onBlur={(s) => setCookTime(validateAndRound(cookTime, 5))}
                        />
                    </div>
                    <div className="mt-2">
                        <h3 className="text-gray-400 mb-1 dark:text-gray-200">Serves</h3>
                        <input className="p-2 pl-1 w-[30%] bg-gray-100 dark:bg-gray-700" placeholder="4" value={servings} type="number" max="999"
                               onChange={(s) => setServings(s.target.value)}
                               onBlur={(s) => setServings(validateAndRound(servings, 1))}
                        />
                    </div>
                </div>
                <IngrList/>
            </div>
        </Modal>
    )
}