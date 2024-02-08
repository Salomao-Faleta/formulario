import { User } from "../types/User"
import { useState, FormEvent } from "react";
import { Validate } from "../utils/Validate";

export function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [erros, setErros] = useState<User | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setErros(null)

    const data: User = {
      name,
      email,
      agree
    }

    const validateErros = Validate(data);

    console.log(data)

    if (Object.keys(validateErros).length > 0) {
      setErros(validateErros);

      return;
    }

    setName("");
    setEmail("");
    setAgree(false);

    alert('Obrigado por se inscrever')
  }


  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="Name">Nome</label>
        <input type="text"
          id="name"
          placeholder="Digite seu nome"
          className="rounded-md py-2 px-2 text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {erros?.name && (
        <small className="text-xs text-red-500">{erros?.name}</small>
      )}

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">E-mail</label>
        <input type="email"
          id="email"
          placeholder="Digite seu melhor e-mail"
          className="rounded-md py-2 px-2 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {erros?.email && (
        <small className="text-xs text-red-500">{erros?.email}</small>
      )}

      <div className="flex flex-col">
        <div>
          <span>➜</span>
          <a href="#" className="text-sx underline mb-2">Leia os termos</a>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree" id="agree">Concordo com os termos</label>
        </div>

        {erros?.agree && (
        <small className="text-xs text-red-500">{erros?.agree}</small>
      )}

      </div>
      <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 text-white rounded-md">Cadastre-se</button>
    </form>

  );
}