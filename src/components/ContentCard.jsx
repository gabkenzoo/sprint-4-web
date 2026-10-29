const categoryLabels = { estudos: "Estudos", social: "Social", expressao: "Expressão" };
const backgrounds = {
  estudos: "from-blue-100 to-indigo-50",
  social: "from-orange-100 to-amber-50",
  expressao: "from-violet-100 to-fuchsia-50",
};

export default function ContentCard({ item, onFavorite, onDelete }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div
        className={`relative grid h-36 place-items-center bg-gradient-to-br ${backgrounds[item.category] || backgrounds.estudos}`}
      >
        <span className="text-6xl transition group-hover:scale-110">{item.icon}</span>
        <button
          aria-label={item.favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          onClick={() => onFavorite(item.id)}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-xl text-rose-500 shadow-sm hover:scale-105"
        >
          {item.favorite ? "♥" : "♡"}
        </button>
      </div>
      <div className="p-5">
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">
          {categoryLabels[item.category] || item.category}
        </span>
        <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
        <p className="mt-2 min-h-10 text-sm leading-6 text-slate-500">{item.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
          <small className="text-xs text-slate-400">{item.date}</small>
          <button
            onClick={() => onDelete(item.id)}
            className="text-xs font-semibold text-rose-500 hover:text-rose-700"
          >
            Excluir
          </button>
        </div>
      </div>
    </article>
  );
}
