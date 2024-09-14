import {ChangeEventHandler} from 'react'

export default function MeasurementField({inputId, onEdit, value} : {inputId: string, onEdit: ChangeEventHandler, value: number}) {
    return (
        <div className="flex-col flex ">
            <h3 className="text-lg ml-3">Measurement</h3>
            <input id={inputId} className="m-2 text-md font-normal bg-gray-200 pl-1 py-1 dark:bg-gray-700 rounded-sm px-2" placeholder={"3 1/4"} name={`quantity`}
                   type="number" min="0" max="999" onChange={onEdit} value={value}/>
        </div>
    )
}