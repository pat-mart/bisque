import {Session} from 'next-auth'
import PlusIcon from '../../../../public/images/plus-icon'
import NewRecipe from '@/app/components/modals/new_recipe/new-recipe'
import React from 'react'
import UserIcon from '../../../../public/images/user-icon'

type Props = {
    session: Session | null
}

export default function HeaderActionButton({session} : Props) {
    if(session) {
        return (
            <>
                <NewRecipe buttonBody={
                    <PlusIcon/>
                }/>
            </>
        )
    }

    return (
        <>
            <NewRecipe buttonBody={
                <UserIcon></UserIcon>
            }/>
        </>
    )
}