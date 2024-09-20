import {ChangeEventHandler} from 'react'

export default function NameField({inputId, placeholder, onEdit, value} : {inputId: string, placeholder: string, onEdit: ChangeEventHandler, value: string}) {

    return (
        <div className="flex h-min flex-row justify-between w-full items-center my-auto">
            <input
                id={inputId}
                className="m-2 text-2xl font-semibold bg-gray-200 border-b-gray-400 w-2/3 pl-1 dark:bg-gray-700 px-2"
                placeholder={placeholder}
                onChange={onEdit}
                value={value}
            />
        </div>
    )
}