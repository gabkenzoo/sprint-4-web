import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getContents } from "../services/contentApi";

// Hook customizado: toda a lógica da biblioteca de capturas fica aqui,
// e o Dashboard só cuida de mostrar na tela.
export function useContents() {
  const [content, setContent] = useLocalStorage("jovi-content-v2", []);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("inicio");

  // carrega da API só se ainda não tiver nada salvo
  useEffect(() => {
    let ativo = true;

    getContents()
      .then((items) => {
        if (ativo) {
          setContent((atual) => (atual.length > 0 ? atual : items));
        }
      })
      .catch(() => {
        setNotice("Não foi possível carregar os dados. Tente atualizar a página.");
      })
      .finally(() => {
        if (ativo) setLoading(false);
      });

    return () => {
      ativo = false;
    };
  }, [setContent]);

  // aviso some depois de uns segundos
  function showNotice(text) {
    setNotice(text);
    setTimeout(() => setNotice(""), 2800);
  }

  const filtered = useMemo(() => {
    const busca = search.toLowerCase().trim();

    return content.filter((item) => {
      const achouBusca =
        item.title.toLowerCase().includes(busca) || item.description.toLowerCase().includes(busca);

      let achouCategoria = true;
      if (category === "favoritos") {
        achouCategoria = item.favorite;
      } else if (category !== "inicio") {
        achouCategoria = item.category === category;
      }

      return achouBusca && achouCategoria;
    });
  }, [content, search, category]);

  const stats = {
    total: content.length,
    studies: content.filter((item) => item.category === "estudos").length,
    social: content.filter((item) => item.category === "social").length,
    expression: content.filter((item) => item.category === "expressao").length,
  };

  function toggleFavorite(id) {
    setContent((atual) =>
      atual.map((item) => (item.id === id ? { ...item, favorite: !item.favorite } : item)),
    );
  }

  function deleteContent(id) {
    const item = content.find((c) => c.id === id);
    setContent((atual) => atual.filter((c) => c.id !== id));
    showNotice(`"${item ? item.title : "Conteúdo"}" foi excluído.`);
  }

  function addContent() {
    const novo = {
      id: Date.now(),
      title: "Nova captura",
      description: "Adicione aqui a descrição do seu registro.",
      category: "estudos",
      icon: "📷",
      date: "Agora",
      favorite: false,
    };
    setContent((atual) => [novo, ...atual]);
    showNotice("Nova captura adicionada à sua biblioteca.");
  }

  return {
    filtered,
    stats,
    loading,
    notice,
    search,
    setSearch,
    category,
    setCategory,
    toggleFavorite,
    deleteContent,
    addContent,
  };
}
