export default function AuthLayout({children} :{children : React.ReactNode}){
    return(
<main className="flex justify-center items-center flex-col min-h-dvh h-dvh overflow-auto relative p-4">
    {children}
    </main>
    )
}