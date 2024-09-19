'use client'

import {ChangeEvent, useCallback, useEffect, useRef, useState} from 'react'
import MinusIcon from '../../../../../public/images/minus-icon'
import PlusIcon from '../../../../../public/images/plus-icon'
import {uuidv4 as uuid} from '@firebase/util'
import MeasurementField from '@/app/components/modals/new_recipe/input-fields/measure-field'
import UnitField from '@/app/components/modals/new_recipe/input-fields/unit-field'
import NameField from '@/app/components/modals/new_recipe/input-fields/name-field'
import XIcon from '../../../../../public/images/x-icon'

export default function IngrList() {

    const [ingrShown, setIngrShown] = useState<boolean>(true)
    const [itemData, setItemData] = useState<Ingredient[]>([])

    const [removedItemId, setRemovedItemId] = useState<string | null>(null)

    // Used to auto scroll to bottom on item add
    const endListRef = useRef<any>(null)

    const handleAdd = () => {
        const newItem: Ingredient = {
            allergens: [""],
            measurement: 0,
            name: '',
            unit: '',
            id: uuid()
        }
        const items = [...itemData, newItem]
        setItemData(items)

        localStorage.setItem('ingrFormData', JSON.stringify(items))
    }

    const handleRemove = (idToRemove: string) => {
        const items = itemData.filter(item => item.id !== idToRemove)
        setRemovedItemId(idToRemove)

        setTimeout(() => {
            setItemData(items)
            setRemovedItemId(null)
            localStorage.setItem('ingrFormData', JSON.stringify(itemData))
        }, 250)
    }

    const handleEdit = useCallback((id: string, field: keyof Ingredient, value: string) => {
        const items = itemData.map(item =>
            item.id === id ? {...item, [field]: value} : item
        )

        setItemData(items)
        localStorage.setItem('ingrFormData', JSON.stringify(items))
    }, [itemData])

    useEffect(() => {
        const savedItems = localStorage.getItem('ingrFormData')
        if(savedItems)
            setItemData(JSON.parse(savedItems))
    }, [])

    useEffect(() => {
        localStorage.setItem('ingrFormData', JSON.stringify(itemData))
        if(endListRef.current) {
            endListRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [itemData])

    function IngredientRow({ingredient, index}: {ingredient: Ingredient, index: number}) {
        return (
            <>
                <div className="flex flex-col bg-gray-200 dark:bg-gray-800 w-full rounded-sm">
                    <div className="flex flex-row items-center">
                        <h3 className={"ml-2 mr-1 pb-1 text-xl text-gray-600"}>{index}.</h3>
                        <NameField inputId={"i" + ingredient.id} placeholder={"Ingredient"}
                                   onEdit={(s: ChangeEvent<HTMLInputElement>) => handleEdit(ingredient.id, 'name', s.target.value)}
                                   value={ingredient.name}/></div>
                    <div className="flex flex-row w-full justify-between items-end">
                        <div className="flex flex-row w-full space-x-3">
                            <MeasurementField inputId={"m" + ingredient.id} onEdit={(s: ChangeEvent<HTMLInputElement>) => handleEdit(ingredient.id, 'measurement', s.target.value)} value={ingredient.measurement}/>
                            <UnitField inputId={"u" + ingredient.id} onEdit={(s: ChangeEvent<HTMLInputElement>) => handleEdit(ingredient.id, 'unit', s.target.value)} value={ingredient.unit}/>
                        </div>
                        <button className="hover:opacity-70" onClick={() => handleRemove(ingredient.id)}>
                            <div className="h-6 w-6 mr-4 mb-2 items-center">
                                <XIcon/>
                            </div>
                        </button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div id={"ingredients"}>
            <div className="flex flex-row w-full items-center">
                <h3 className="text-xl">Ingredients</h3>
                <button aria-label="Add ingredient" disabled={!ingrShown} // Button to add new ingredient
                        className={`enabled:ml-4 enabled:w-6 enabled:h-6 enabled:border-2 rounded-sm enabled:border-gray-300 enabled:hover:border-gray-400`}
                        onClick={() => {
                            if(ingrShown) {
                                handleAdd()
                            }
                            endListRef.current?.scrollIntoView({behavior: 'smooth'})
                        }}><PlusIcon/>
                </button>

                <button aria-label="Hide ingredients list" className="ml-4 text-xl text-gray-400 hover:text-gray-500"
                        onClick={() => {setIngrShown(!ingrShown)}}>
                    {ingrShown ? "[hide ingredients]" : "[show ingredients]"}
                </button>
            </div>

            <div className={"flex flex-col align-middle overflow-scroll mb-6"}>
                <div className="mt-4 overflow-scroll">
                    {itemData.length === 0 && ingrShown?
                        <div className={'flex '}>
                            <div className={'m-auto font-normal align-middle text-gray-500'}><p>Click the '+' to add an
                                ingredient!</p></div>
                        </div>
                        : // Ingredient list begins
                        <>
                            <ol className={`${!ingrShown ? `hidden` : ``} list-none overflow-scroll space-y-3 transition duration-100 ease-in-out`}>
                                {itemData.map((ingredient, index) => {
                                    return (
                                        <li className={`list-none ${ingredient.id === removedItemId ? 'animate-fadeOut' : 'animate-fadeIn'}`} key={ingredient.id} id={ingredient.id}>
                                            {IngredientRow({ingredient: ingredient, index: index + 1})}
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