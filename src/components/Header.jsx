import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Header({ search, setSearch, authenticated = false }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function sair() {
    logout();
    navigate("/");
  }
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to={authenticated ? "/dashboard" : "/"} className="flex shrink-0 items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-200">
            ◉
          </span>
          <span>
            <strong className="block text-lg font-black tracking-tight text-slate-950">
              JOVI Lens
            </strong>
            <small className="hidden text-xs text-slate-500 sm:block">
              Câmera que entende você
            </small>
          </span>
        </Link>
        {authenticated && (
          <label className="hidden w-full max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 md:flex">
            <span>⌕</span>
            <input
              className="w-full bg-transparent py-2 text-sm outline-none"
              placeholder="Buscar conteúdo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        )}
        {authenticated ? (
          <button
            onClick={sair}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Sair
          </button>
        ) : (
          <Link
            to="/login"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
          >
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
}
