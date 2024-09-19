'use client'

import Modal from '@/app/components/modals/modal'
import GoogleIcon from '../../../../../public/images/google-icon'
import {useState} from 'react'
import Link from 'next/link'
import {auth} from '@/api/fb-init'
import {getAuth, signInWithEmailAndPassword} from '@firebase/auth'

export default function SignIn({buttonBody} : {buttonBody: React.ReactNode}) {

    const passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const usernameRegex: RegExp = /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const validUsername = (): boolean => {
        return usernameRegex.test(username)
    }

    const validPassword = (): boolean => {
        return passwordRegex.test(password)
    }

    const handleSignIn = async () => {
        try {
            const auth = getAuth()!
            signInWithEmailAndPassword(auth, username, password).then(() => {

            })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Modal buttonBody={buttonBody} title={"Sign in to Bisque"} urlExtension={'sign-in'}
               buttons={[
                   ["Cancel", () => {}],
               ]}>
            <div className={"flex flex-col overflow-scroll"}>
                <form>
                    <h1 className={"text-xl"}>Right now, you need an account to post and save recipes.</h1>
                    <h2 className={"text-md text-gray-500"}>Users will be able to post without an account soon. Stay tuned!</h2>
                    <div className="flex flex-col w-full justify-center items-center mt-6 space-y-12">
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Email</h1>
                            <input className={`p-2 w-full rounded-sm text-xl drop-shadow-sm ${!validUsername() && username.length > 0 ? 'bg-red-300 dark:bg-rule-600' : 'bg-white dark:bg-gray-800'}`}
                                   placeholder={"emailusername@domain.com"} required aria-required
                                   type={"email"} value={username} onChange={s => setUsername(s.target.value)}/>
                        </div>
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Password</h1>
                            <h2 className={"text-md text-gray-500 pb-2"}>Must be 8 characters long, contain a special
                                character, an uppercase and lowercase character, and number</h2>
                            <input className={`p-2 w-full rounded-sm drop-shadow-sm text-xl ${!validPassword() && password !== '' ? 'bg-red-300 dark:bg-rule-600' : 'bg-white dark:bg-gray-800'}`} placeholder={"Password"} required aria-required
                                   type={"password"}
                                   pattern={'' + passwordRegex}
                                   value={password}
                                   onChange={s => setPassword(s.target.value)}
                            />
                        </div>
                        <div className="flex flex-row space-x-3 pb-12">
                            <Link href="/" onClick={handleSignIn} className={`hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 p-3 rounded-sm drop-shadow-sm w-64 md:w-56 sm:w-40 dark:bg-gray-800 ${auth ? 'disabled:bg-gray-400 disabled:pointer-events-none aria-disabled:pointer-events-none' : ''}`}>
                                <div className="flex flex-row align-middle w-full justify-center items-center">
                                    <h2 className="md:text-lg sm:text-sm">Sign in</h2>
                                </div>
                            </Link>
                            <Link href="/" className="hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 p-3 rounded-sm drop-shadow-sm w-64 md:w-56 sm:w-40 dark:bg-gray-800">
                                <div className="flex flex-row align-middle w-full justify-start items-center">
                                    <div className="my-auto scale-150 px-2 relative z-50 mr-2"><GoogleIcon/></div>
                                    <h2 className="md:text-lg sm:text-sm">Sign in with Google</h2>
                                </div>
                            </Link>
                            <Link href="/screens/sign-up" className="hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 p-3 rounded-sm drop-shadow-sm w-64 md:w-56 sm:w-40 dark:bg-gray-800">
                                <div className="flex flex-row align-middle w-full justify-center items-center ">
                                    <h2 className="md:text-lg sm:text-sm font-semibold ">Create new account</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}