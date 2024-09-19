import {ChangeEventHandler} from 'react'

export default function NameField({inputId, placeholder, onEdit, value} : {inputId: string, placeholder: string, onEdit: ChangeEventHandler, value: string}) {

    return (
        <div className="flex flex-row justify-between w-full items-center mb-4">
            <input
                id={inputId}
                className="m-2 text-2xl font-semibold bg-gray-200 border-b-2 border-b-gray-400 w-2/3 pl-1 py-1 dark:bg-gray-700 rounded-sm px-2"
                placeholder={placeholder}
                onChange={onEdit}
                value={value}
            />
        </div>
    )
}