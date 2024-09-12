import {ChangeEventHandler} from 'react'

export default function UnitField({inputId, onEdit, value} : {inputId: string, onEdit: ChangeEventHandler, value: string}) {

    return (
        <div className="flex-col flex">
            <h3 className="text-lg ml-3 mr-3">Unit</h3>
            <input className="m-2 text-md font-normal bg-gray-200 pl-1 py-1" id={inputId} placeholder={"cups"} name={`unit`}
                onChange={onEdit} value={value}
            />
        </div>
    )
}