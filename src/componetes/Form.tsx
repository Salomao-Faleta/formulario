export function Form() {
    return (
        <form>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Digite seu nome"/>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu melhor e-mail"/>
            </div>
            <div>
                <a href="#">Leia os termos</a>
                <div>
                    <input type="checkbox"/>
                    <label>Concordo com os termos</label>
                </div>
            </div>
            <button>Cadastre-se</button>
        </form>

    );
}