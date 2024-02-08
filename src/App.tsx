import { Form } from "./componetes/Form";

function App() {
    return (
        <div>
            <h1 className="text-3xl text-red-700">Inscreva-se</h1>
            <p>Assine nossa plataforma e mantenha-se informado</p>
            <div>
                <Form/>
            </div>
            <p>Ao se inscrever, você passará a receber nossos e-mails com as melhores dicas, novidades e ofertas</p>
        </div>
    )
}

export default App
