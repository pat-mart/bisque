export default function Background({children}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="w-full h-full relative z-20">
                {children}
            </div>
        </div>
    )
}