export default function Error() {
    return (
        <main className="bg-slate-900 min-h-screen flex flex-col gap-y-12 items-center">
            <img src="../../public/error404.webp" width={400} />
            <p className="font-extrabold text-3xl text-slate-50">Página não encontrada: <a href="#"><u>Clique aqui</u></a> para retornar ao menu!</p>
        </main>
    )
}