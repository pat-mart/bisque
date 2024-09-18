'use client'

import GoogleIcon from '../../../../public/images/google-icon'
import {useState} from 'react'
import Link from 'next/link'
import {createUserWithEmailAndPassword, getAuth} from '@firebase/auth'
import {app} from '@/api/fb-init'

export default function SignUp() {

    const passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const usernameRegex: RegExp = /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/

    const [username, setUsername] = useState<string>('')

    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const validUsername = (): boolean => {
        return usernameRegex.test(username)
    }

    const validPassword = (): boolean => {
        return passwordRegex.test(password) && confirmPassword === password
    }

    const handleSignUp = async () => {
        try {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, username, password)
                .then(userCredential => {
                    const user = userCredential.user
                })
                .catch(error => {
                    console.error(error)
                })
        }
        catch (e) {
            console.error(e)
        }
    }

    console.log(app)

    return (
        <div className="flex flex-col w-full h-full align-middle">
            <h1 className="relative top-4 left-4 ml-3 text-3xl font-semibold">Create new account</h1>
            <div className={"flex flex-col overflow-scroll justify-center align-middle my-auto"}>
                <form>
                    <div className="flex flex-col w-full justify-center items-center mt-6 space-y-12">
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Email</h1>
                            <h2 className={"text-md text-gray-500 pb-2"}>Your email username will be your username on
                                Bisque.</h2>
                            <input
                                className={`p-2 w-full rounded-sm text-xl drop-shadow-sm bg-gray-100 dark:bg-gray-800`}
                                placeholder={"emailusername@domain.com"} required aria-required
                                type={"email"} value={username} onChange={s => setUsername(s.target.value)}/>
                        </div>
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Password</h1>
                            <h2 className={"text-md text-gray-500 pb-2"}>Minimum 8 characters long, must contain special
                                character, uppercase, lowercase, and number</h2>
                            <input
                                className={`p-2 w-full rounded-sm drop-shadow-sm text-xl bg-gray-100 dark:bg-gray-800`}
                                placeholder={"Password"} required aria-required
                                type={"password"}
                                pattern={'' + passwordRegex}
                                value={password}
                                onChange={s => setPassword(s.target.value)}
                            />
                            <input
                                className={`p-2 w-full rounded-sm drop-shadow-sm text-xl bg-gray-100 dark:bg-gray-800`}
                                placeholder={"Confirm password"} required aria-required
                                type={"password"}
                                pattern={'' + passwordRegex}
                                value={confirmPassword}
                                onChange={s => setConfirmPassword(s.target.value)}
                            />
                        </div>
                        <div className="flex flex-row space-x-3 pb-12">
                            <Link href="/" className="hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 p-3 rounded-sm drop-shadow-sm w-64 md:w-56 sm:w-40 dark:bg-gray-800">
                                <div className="flex flex-row align-middle w-full justify-start items-center">
                                    <div className="my-auto scale-150 px-2 relative z-50 mr-2"><GoogleIcon/></div>
                                    <h2 className="md:text-lg sm:text-sm dark:text-gray-200">Sign in with Google</h2>
                                </div>
                            </Link>
                            <Link href="/screens/home" onClick={handleSignUp} className={`hover:bg-gray-300 dark:hover:bg-gray-600 bg-gray-200 p-3 rounded-sm drop-shadow-sm w-64 md:w-56 sm:w-40 dark:bg-gray-800 disabled:opacity-50 ${validPassword() && validUsername() ? '' : 'opacity-50 pointer-events-none aria-disabled:true'}`} >
                                <div className="flex flex-row align-middle w-full justify-center items-center">
                                    <h2 className="md:text-lg sm:text-sm font-bold dark:text-gray-200 my-auto">Create</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}