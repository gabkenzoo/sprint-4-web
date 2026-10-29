import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[#0d1940] text-white">
          <div className="absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-blue-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" /> JOVI SMART CAMERA
              </span>
              <h1 className="mt-7 max-w-xl text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl">
                Sua câmera.
                <br />
                <span className="text-blue-300">Seu contexto.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Muito além da foto: transforme o que você captura em conteúdo útil para estudar,
                compartilhar e expressar suas ideias.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/login"
                  className="rounded-xl bg-blue-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-400"
                >
                  Experimentar JOVI Lens <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="#como-funciona"
                  className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white hover:bg-white/10"
                >
                  Como funciona
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
                <span>✓ Conteúdo organizado</span>
                <span>✓ Foco em estudantes</span>
                <span>✓ Acesso simples</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute inset-8 rounded-[2.5rem] bg-blue-500/30 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-slate-50 p-5 text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        Sua biblioteca
                      </p>
                      <h2 className="mt-1 text-xl font-black">Capturas inteligentes</h2>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-xl text-white">
                      ◉
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 p-4">
                      <span className="text-4xl">📐</span>
                      <p className="mt-4 text-sm font-bold">Resumo de Matemática</p>
                      <small className="text-slate-500">Estudos · Hoje</small>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 p-4">
                      <span className="text-4xl">👥</span>
                      <p className="mt-4 text-sm font-bold">Encontro com a turma</p>
                      <small className="text-slate-500">Social · Ontem</small>
                    </div>
                    <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-100 text-xl">
                        ✨
                      </span>
                      <div>
                        <p className="text-sm font-bold">Seu conteúdo, no lugar certo</p>
                        <p className="mt-1 text-xs text-slate-500">
                          Busque, favorite e organize suas ideias.
                        </p>
                      </div>
                      <span className="ml-auto text-blue-600">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[.2em] text-blue-600">
              Um novo jeito de capturar
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              A tecnologia acompanha o seu contexto.
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              A proposta JOVI Lens conecta a ideia de uma câmera contextual com uma central digital
              para que cada registro tenha uma utilidade.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "📚",
                "Aprenda melhor",
                "Capture o quadro e mantenha materiais de estudo organizados.",
              ],
              ["👥", "Guarde momentos", "Reúna registros sociais e encontre tudo quando precisar."],
              [
                "✨",
                "Expresse suas ideias",
                "Organize conteúdos criativos para desenvolver seu próprio estilo.",
              ],
            ].map(([icon, title, desc]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-2xl">
                  {icon}
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200 px-5 py-7 text-center text-xs text-slate-500">
        © 2026 JOVI Lens · Projeto acadêmico JOVI Challenge
      </footer>
    </div>
  );
}
