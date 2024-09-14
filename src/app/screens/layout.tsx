'use client'

import Header from '@/app/components/header/header'
import {SessionProvider} from 'next-auth/react'

export default function RootLayout({
   children,
}: Readonly<{  children: React.ReactNode; }>) {
    return (
        <SessionProvider>
            <div className="overflow-hidden flex flex-col h-screen">
                <div className="overflow-hidden flex flex-col h-full">
                    <Header/>
                    <div className="flex h-full w-full overflow-scroll px-3">{children}</div>
                </div>
            </div>
        </SessionProvider>
    );
}