'use client'

import PlusIcon from '../../../../../public/images/plus-icon'
import {useState} from 'react'
import MinusIcon from '../../../../../public/images/minus-icon'
import {v4 as uuid} from 'uuid'

export default function IngrList() {

    const [list, setList] = useState<[Ingredient?]>([])

    const addIngredient = () => {
        const newItem: Ingredient = {
            id: uuid(),
            quantity: 0,
            name: '',
            unit: '',
            allergens: null
        }

        // @ts-ignore
        setList([...list, newItem])
    }

    const removeIngredient = (id: string) => {
        // @ts-ignore
        setList(list.filter((ingr) => ingr.id !== id))
    }

    function IngredientRow({ingredient}: {ingredient: Ingredient}) {
        return (
            <div className="flex flex-row mt-2 h-[5vh] bg-gray-200 align-middle">
                <button aria-label="Remove this ingredient" onClick={() => {
                    removeIngredient(ingredient.id)
                }}>
                    <div className="w-6 h-6 mr-2">
                        <MinusIcon/>
                    </div>
                </button>
                <h1>Dummy text</h1>
            </div>
        )
    }

    return (
        <div className="flex mt-2 flex-col">
            <div className="flex flex-row w-full align-middle">
                <h3 className="text-xl">Ingredients</h3>
                <button aria-label="Add ingredient"  className="ml-4 w-6 h-6 border-2 overflow-hidden" onClick={addIngredient}><PlusIcon/></button>
            </div>
            <div className="h-[30vh] overflow-scroll">
                {list === null ? <></> :
                    <li className={`${list.length === 0 ? `hidden` : ``} transition duration-100 ease-out list-none`}>
                        {list!.map((ingredient) => {
                            return <IngredientRow ingredient={ingredient!} key={ingredient!.id}/>
                        })}
                    </li>
                }
            </div>
        </div>
    )
}