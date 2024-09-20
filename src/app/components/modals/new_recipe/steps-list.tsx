'use client'

import {ChangeEvent, useCallback, useEffect, useRef, useState} from 'react'
import PlusIcon from '../../../../../public/images/plus-icon'
import {uuidv4 as uuid} from '@firebase/util'
import NameField from '@/app/components/modals/new_recipe/input-fields/name-field'
import XIcon from '../../../../../public/images/x-icon'

export default function StepsList() {

    const [stepsShown, setStepsShown] = useState<boolean>(true)
    const [stepData, setStepData] = useState<Step[]>([])

    const [removedItemId, setRemovedItemId] = useState<string | null>(null)

    // Used to auto scroll to bottom on item add
    const endListRef = useRef<any>(null)

    const handleAdd = () => {
        const newStep: Step = {
            id: uuid(),
            name: "",
            description: "",
        }
        const items = [...stepData, newStep]
        setStepData(items)

        localStorage.setItem('stepFormData', JSON.stringify(items))
    }

    const handleRemove = (idToRemove: string) => {
        const items = stepData.filter(item => item.id !== idToRemove)
        setRemovedItemId(idToRemove)

        setTimeout(() => {
            setStepData(items)
            setRemovedItemId(null)
            localStorage.setItem('stepFormData', JSON.stringify(stepData))
        }, 250)
    }

    const handleEdit = useCallback((id: string, field: keyof Ingredient, value: string) => {
        const items = stepData.map(item =>
            item.id === id ? {...item, [field]: value} : item
        )

        setStepData(items)
        localStorage.setItem('stepFormData', JSON.stringify(items))
    }, [stepData])

    useEffect(() => {
        const savedItems = localStorage.getItem('stepFormData')
        if(savedItems)
            setStepData(JSON.parse(savedItems))
    }, [])

    useEffect(() => {
        localStorage.setItem('stepFormData', JSON.stringify(stepData))
        if(endListRef.current) {
            endListRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [stepData])

    function StepRow({step, index} : {step: Step, index: number}) {
        return (
            <>
                <div className="flex flex-col bg-gray-200 dark:bg-gray-800 w-full rounded-sm">
                    <div className="flex flex-row items-center mb-2">
                        <h3 className={"ml-2 mr-1 pb-1 text-xl text-gray-600 my-auto h-min"}>{index}.</h3>
                        <NameField inputId={"i" + step.id} placeholder={"Step"}
                                   onEdit={(s: ChangeEvent<HTMLInputElement>) => handleEdit(step.id, 'name', s.target.value)}
                                   value={step.name}/>
                    </div>
                    <div className="flex flex-row w-full justify-between items-end">
                        <div className="flex flex-col w-full space-x-3 mr-3">
                            <div className="flex flex-row">
                                <h3 className={"text-lg ml-3"}>Description</h3>
                                <h3 className={"text-lg text-gray-400"}>({stepData[index].description.length}/400)</h3>
                            </div>
                            <textarea placeholder={"Add more detail here"} className={"rounded-sm bg-gray-100 py-1 pl-1 m-2"}/>
                        </div>
                        <button className="hover:opacity-70" onClick={() => handleRemove(step.id)}>
                            <div className="h-6 w-6 mr-2 mb-2 items-center">
                                <XIcon/>
                            </div>
                        </button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div id={"steps"} className={"mb-4"}>
            <div className="flex flex-row w-full items-center">
                <h3 className="text-xl">Steps</h3>
                <button aria-label="Add step" disabled={!stepsShown} // Button to add new ingredient
                        className={`rounded-sm enabled:ml-4 enabled:w-6 enabled:h-6 enabled:border-2 enabled:border-gray-300 enabled:hover:border-gray-400`}
                        onClick={() => {
                            if(stepsShown) {
                                handleAdd()
                            }
                            endListRef.current?.scrollIntoView({behavior: 'smooth'})
                        }}><PlusIcon/>
                </button>

                <button aria-label="Hide ingredients list" className="ml-4 text-xl text-gray-400 hover:text-gray-500"
                        onClick={() => {setStepsShown(!stepsShown)}}>
                    {stepsShown ? "[hide steps]" : "[show steps]"}
                </button>
            </div>

            <div className={"flex flex-col align-middle overflow-scroll"}>
                <div className="mt-4 overflow-scroll h-full">
                    {stepData.length === 0 && stepsShown?
                        <div className={'flex'}>
                            <div className={'m-auto font-normal align-middle text-gray-500'}><p>Click the '+' to add a step!</p></div>
                        </div>
                        : // Ingredient list begins
                        <>
                            <ol className={`${!stepsShown ? `hidden` : ``} list-none overflow-scroll space-y-3 transition duration-100 ease-in-out`}>
                                {stepData.map((step, index) => {
                                    return (
                                        <li className={`list-none ${step.id === removedItemId ? 'animate-fadeOut' : 'animate-fadeIn'}`} key={step.id} id={step.id}>
                                            {StepRow({step: step, index: index + 1})}
                                        </li>
                                    )
                                })}
                            </ol>
                            <li className={"list-none"} ref={endListRef}></li>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}