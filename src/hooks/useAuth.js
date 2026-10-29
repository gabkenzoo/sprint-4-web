// Hook customizado: cuida do login e do logout
// (assim as telas não precisam mexer no localStorage direto)
const CHAVE = "jovi-session";

const EMAIL_TESTE = "aluno@jovi.com";
const SENHA_TESTE = "jovi123";

export function useAuth() {
  const logado = localStorage.getItem(CHAVE) === "true";

  function login(email, senha) {
    if (email.trim().toLowerCase() === EMAIL_TESTE && senha === SENHA_TESTE) {
      localStorage.setItem(CHAVE, "true");
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem(CHAVE);
  }

  return { logado, login, logout };
}
