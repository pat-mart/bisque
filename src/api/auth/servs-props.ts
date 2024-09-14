import {getServerSession} from 'next-auth'
import {options} from '@/api/auth/route'

export default async function getServerSideProps(context: any) {
    const session = await getServerSession(context.req, context.res, options)

    if(!session) { // Redirects to sign-in page
        return {
            redirect: {
                destination: "/home/?sign-in=y",
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}