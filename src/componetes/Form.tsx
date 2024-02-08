export function Form() {
    return (
        <form className="flex flex-col gap-3">
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Digite seu nome" className="rounded-md py-2 px-2 text-sm"/>
            </div>

            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu melhor e-mail" className="rounded-md py-2 px-2 text-sm"/>
            </div>

            <div className="flex flex-col">
                <div>
                    <span>➜</span>
                    <a href="#" className="text-sx underline mb-2">Leia os termos</a>
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <label htmlFor="agreen">Concordo com os termos</label>
                </div>
            </div>
            <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 text-white rounded-md">Cadastre-se</button>
        </form>

    );
}