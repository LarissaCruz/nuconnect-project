async function obterTodosEditais() {
    try {
      const response = await fetch('/api/v1/edital');
      return await response.json();
    } catch (error) {
      console.error('Erro ao obter todos os editais:', error.message);
      throw error;
    }
  }

  async function obterEditalPorId(id) {
    try {
      const response = await fetch('/api/v1/edital/${id}');
      return await response.json();
    } catch (error) {
      console.error('Erro ao obter o edital:', error.message);
      throw error;
    }
  }

module.exports = {
  obterTodosEditais,
  obterEditalPorId
};