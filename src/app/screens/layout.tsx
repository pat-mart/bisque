'use client'

import Header from '@/app/components/header/header'
import {Suspense} from 'react'
import Background from '@/app/background'

export default function RootLayout({
   children,
}: Readonly<{  children: React.ReactNode; }>) {
    return (

        <Suspense fallback={null}>
            <div className="overflow-hidden flex flex-col h-screen">
                <div className="overflow-hidden flex flex-col h-full">
                    <Header/>
                    <div className="flex h-full w-full overflow-scroll relative">
                        <Background>{children}</Background>
                    </div>
                </div>
            </div>
        </Suspense>

    );
}