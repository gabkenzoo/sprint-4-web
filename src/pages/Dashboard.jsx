import Header from "../components/Header";
import ContentCard from "../components/ContentCard";
import StatCard from "../components/StatCard";
import { useContents } from "../hooks/useContents";

const menu = [
  { id: "inicio", label: "Visão geral", icon: "⌂" },
  { id: "estudos", label: "Estudos", icon: "📚" },
  { id: "social", label: "Social", icon: "👥" },
  { id: "expressao", label: "Expressão", icon: "✨" },
  { id: "favoritos", label: "Favoritos", icon: "♡" },
];

export default function Dashboard() {
  const {
    filtered,
    stats,
    loading,
    notice,
    search,
    setSearch,
    category: active,
    setCategory: setActive,
    toggleFavorite: favoriteContent,
    deleteContent,
    addContent,
  } = useContents();

  const title = menu.find((item) => item.id === active)?.label || "Visão geral";
  return (
    <div className="min-h-screen">
      <Header search={search} setSearch={setSearch} authenticated />
      <div className="mx-auto flex max-w-7xl">
        <aside className="sticky top-[69px] hidden h-[calc(100vh-69px)] w-60 shrink-0 flex-col border-r border-slate-200 bg-white p-5 md:flex">
          <p className="mb-4 px-3 text-[11px] font-black tracking-[.18em] text-slate-400">
            BIBLIOTECA
          </p>
          <nav className="space-y-1">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${active === item.id ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-2xl bg-[#101d40] p-4 text-white">
            <p className="text-xs font-black tracking-widest text-blue-200">JOVI SMART CAMERA</p>
            <p className="mt-3 text-sm font-bold">
              Você mostra.
              <br />A JOVI entende.
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-300">Seu contexto, em um só lugar.</p>
          </div>
        </aside>
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101d40] via-blue-800 to-blue-600 p-6 text-white sm:p-9 lg:p-10">
            <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="text-[11px] font-black tracking-[.2em] text-blue-200">
                  JOVI SMART CAMERA
                </span>
                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Sua câmera. Seu contexto.
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
                  Tudo o que você captura, organizado para estudar, guardar momentos e criar.
                </p>
              </div>
              <button
                onClick={addContent}
                className="shrink-0 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                ＋ Nova captura
              </button>
            </div>
          </section>
          <section
            aria-label="Estatísticas da biblioteca"
            className="mt-5 grid grid-cols-1 gap-3 min-[440px]:grid-cols-2 xl:grid-cols-4"
          >
            <StatCard icon="📷" label="Capturas" value={stats.total} detail="itens na biblioteca" />
            <StatCard
              icon="📚"
              label="Estudos"
              value={stats.studies}
              detail="materiais de aprendizagem"
            />
            <StatCard icon="👥" label="Social" value={stats.social} detail="momentos registrados" />
            <StatCard
              icon="✨"
              label="Expressão"
              value={stats.expression}
              detail="conteúdos criativos"
            />
          </section>
          <section className="mt-9">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-black tracking-[.18em] text-blue-600">
                  CENTRAL DE CONTEÚDO
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">
                  {active === "inicio" ? "Capturas recentes" : title}
                </h2>
              </div>
              <span className="text-sm text-slate-500">
                {filtered.length} {filtered.length === 1 ? "item" : "itens"}
              </span>
            </div>
            <label className="mb-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 md:hidden">
              <span className="text-slate-400">⌕</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar conteúdo..."
                className="w-full bg-transparent py-3 text-sm outline-none"
              />
            </label>
            <div className="mb-5 flex gap-2 overflow-x-auto pb-1 md:hidden">
              {menu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${active === item.id ? "bg-blue-600 text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {notice && (
              <p
                role="status"
                className="mb-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
              >
                {notice}
              </p>
            )}
            {loading ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500">
                Carregando sua biblioteca...
              </div>
            ) : filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <span className="text-4xl">🔎</span>
                <h3 className="mt-4 font-bold text-slate-900">Nenhum conteúdo encontrado</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Tente mudar a busca ou selecione outra categoria.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item) => (
                  <ContentCard
                    key={item.id}
                    item={item}
                    onFavorite={favoriteContent}
                    onDelete={deleteContent}
                  />
                ))}
              </div>
            )}
          </section>
          <section className="mt-8 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="font-extrabold text-slate-900">Uma câmera que entende você.</h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  Organize seus registros e encontre a informação certa mais rápido.
                </p>
              </div>
            </div>
            <button
              onClick={addContent}
              className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              Experimentar
            </button>
          </section>
          <footer className="py-7 text-center text-xs text-slate-400">
            © 2026 JOVI Lens · JOVI Challenge · Sprint 4
          </footer>
        </main>
      </div>
    </div>
  );
}
