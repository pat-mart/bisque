'use client'

import Modal from '@/app/components/modals/modal'
import {signIn} from 'next-auth/react'
import GoogleIcon from '../../../../../public/images/google-icon'
import {useState} from 'react'

export default function SignIn({buttonBody} : {buttonBody: React.ReactNode}) {

    const passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const usernameRegex: RegExp = /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const validUsername = (value: string): boolean => {
        return usernameRegex.test(username)
    }

    const validPassword = (value: string): boolean => {
        return passwordRegex.test(password)
    }

    return (
        <Modal buttonBody={buttonBody} title={"Sign in to Bisque"} urlExtension={'sign-in'}
               buttons={[
                   ["Sign in", () => {
                    signIn('google')
                   }],
                   ["Cancel", () => {}],
               ]}>
            <div className={"flex flex-col overflow-scroll"}>
                <form>
                    <h1 className={"text-xl"}>Right now, you need an account to post and save recipes.</h1>
                    <h2 className={"text-md text-gray-500"}>Users will be able to post without an account soon. Stay tuned!</h2>
                    <div className="flex flex-col w-full justify-center items-center mt-6 space-y-12">
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Email</h1>
                            <h2 className={"text-md text-gray-500 pb-2"}>Your email username will be your username on Bisque.</h2>
                            <input className={`p-2 w-full rounded-sm text-xl drop-shadow-sm ${!validUsername(username) && username.length > 0 ? 'bg-red-300 dark:bg-rule-600' : 'bg-white dark:bg-gray-800'}`}
                                   placeholder={"emailusername@domain.com"} required aria-required
                                   type={"email"} value={username} onChange={s => setUsername(s.target.value)}/>
                        </div>
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Password</h1>
                            <h2 className={"text-md text-gray-500 pb-2"}>Must be 8 characters long, contain a special
                                character, an uppercase and lowercase character, and number</h2>
                            <input className={`p-2 w-full rounded-sm drop-shadow-sm text-xl ${!validPassword(password) && password !== '' ? 'bg-red-300 dark:bg-rule-600' : 'bg-white dark:bg-gray-800'}`} placeholder={"Password"} required aria-required
                                   type={"password"}
                                   pattern={'' + passwordRegex}
                                   value={password}
                                   onChange={s => setPassword(s.target.value)}
                            />
                        </div>
                        <button className="hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 p-2 rounded-sm drop-shadow-sm w-64 dark:bg-gray-800">
                            <div className="flex flex-row align-middle w-full justify-start">
                                <div className="my-auto scale-150 px-2 mr-6 relative z-50"><GoogleIcon/></div>
                                <h2 className="text-xl md:text-lg sm:text-md">Sign in with Google</h2>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}