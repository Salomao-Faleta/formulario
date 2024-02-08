import { Form } from "./componetes/Form";

function App() {
    return (
        <div className="bg-slate-800 min-h-screen w-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-white text-4xl">Inscreva-se</h1>
            <p className="text-white">Assine nossa plataforma e mantenha-se informado</p>
            <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-md">
                <Form/>
            </div>
            <p className="text-slate-100 text-xs w-96 mt-2 text-center">Ao se inscrever, você passará 
                a receber nossos e-mails com as melhores dicas, novidades e ofertas.
            </p>
        </div>
    )
}

export default App
