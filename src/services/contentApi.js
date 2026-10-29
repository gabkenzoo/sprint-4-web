// Busca os conteúdos iniciais na API (arquivo JSON da pasta public/api)
export async function getContents() {
  const resposta = await fetch("/api/contents.json");

  if (!resposta.ok) {
    throw new Error("Erro ao buscar os conteúdos");
  }

  return resposta.json();
}
