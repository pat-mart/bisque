export default function GenericPage({title, children}: {title: string, children: Readonly<React.ReactNode> | null}){
    return (
        <>
            <h1 className="ml-3 my-3 text-4xl font-semibold">{title}</h1>
            <div className="flex flex-col">{children}</div>
        </>
    )
}