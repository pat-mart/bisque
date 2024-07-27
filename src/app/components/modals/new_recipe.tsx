'use client'

import Modal from '@/app/components/modals/modal'
import {useState} from 'react'

export default function NewRecipe() {

    const [isModal, setIsModal] = useState<boolean>(false)

    const toggle = () => setIsModal(!isModal)

    return (
        <Modal isShown={isModal} onClose={() => setIsModal(false)}>
            <>
                <h2>Modal title</h2>
                <p>Modal content</p>
            </>
        </Modal>
    )
}