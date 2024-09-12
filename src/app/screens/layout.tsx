import Header from '@/app/components/header/header'

export default function RootLayout({
   children,
}: Readonly<{  children: React.ReactNode; }>) {
    return (
        <div className="overflow-hidden flex flex-col h-screen">
            <div className="overflow-hidden flex flex-col h-full">
                <Header/>
                <div className="flex h-full w-full overflow-scroll px-3">{children}</div>
            </div>
        </div>
    );
}