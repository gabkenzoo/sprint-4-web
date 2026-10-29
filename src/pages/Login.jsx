import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("aluno@jovi.com");
  const [password, setPassword] = useState("jovi123");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    if (login(email, password)) {
      navigate("/dashboard");
    } else {
      setError("E-mail ou senha incorretos. Use os dados de demonstração indicados abaixo.");
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="grid min-h-[calc(100vh-69px)] place-items-center px-4 py-12">
        <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 sm:p-9">
          <Link to="/" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
            ← Voltar para o início
          </Link>
          <div className="mt-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-2xl text-white">
              ◉
            </span>
            <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
              Acesse sua Lens
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Entre para visualizar e organizar suas capturas.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <label className="block text-sm font-semibold text-slate-700">
              E-mail
              <input
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              Senha
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>
            {error && (
              <p role="alert" className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">
                {error}
              </p>
            )}
            <button className="w-full rounded-xl bg-blue-600 px-4 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
              Entrar na plataforma
            </button>
          </form>
          <div className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
            <strong>Conta para demonstração</strong>
            <p className="mt-1">E-mail: aluno@jovi.com</p>
            <p>Senha: jovi123</p>
          </div>
          <p className="mt-5 text-center text-xs leading-5 text-slate-400">
            Autenticação demonstrativa para fins acadêmicos. Não utilize dados pessoais.
          </p>
        </section>
      </main>
    </div>
  );
}
