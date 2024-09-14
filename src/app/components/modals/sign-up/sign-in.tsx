import Modal from '@/app/components/modals/modal'
import UserIcon from '../../../../../public/images/user-icon'
import {signIn} from 'next-auth/react'
import GoogleIcon from '../../../../../public/images/google-icon'

export default function SignIn() {
    return (
        <Modal buttonBody={<UserIcon/>} title={"Sign in to Bisque"} urlExtension={'sign-in'}
               buttons={[
                   ["Sign in", () => {
                    signIn('google')
                   }],
                   ["Cancel", () => {}],
               ]}>
            <div className={"flex flex-col"}>
                <form>
                    <h1 className={"text-xl"}>Right now, you need an account to post and save recipes.</h1>
                    <h2 className={"text-md text-gray-500"}>Users will be able to post without an account soon.</h2>
                    <div className="flex flex-col w-full justify-center items-center mt-12 space-y-16">
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Username</h1>
                            <input className="p-2 w-full rounded-sm text-xl" placeholder={"example@email.com"}
                                   type={"email"}/>
                        </div>
                        <div className={"items-start space-y-2 w-3/5"}>
                            <h1 className={"text-2xl"}>Password</h1>
                            <h2 className={"text-md text-gray-500 pb-2"}>Must be 8 characters long, contain a special
                                character, an uppercase and lowercase character, and number</h2>
                            <input className="p-2 w-full rounded-sm text-xl" placeholder={"Password"}
                                   type={"password"}/>
                        </div>
                        <button className="hover:bg-gray-300 bg-gray-200 p-2 rounded-sm drop-shadow-md w-3/5">
                            <div className="flex flex-row align-middle w-full justify-start">
                                <div className="my-auto scale-150"><GoogleIcon/></div>
                                <h2 className="text-xl">Sign in with Google</h2>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}