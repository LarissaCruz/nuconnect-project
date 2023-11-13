async function registrarUsuario(data) {
    try {
      const response = await fetch('/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      // Verifica o status da resposta HTTP
      if (response.ok) {
        // Se a resposta tiver status 201 (OK), retorna 'true'
        console.log('Entrou em OK');
        return true;
      } else {
        // Caso contrário, lança um erro com a mensagem do status da resposta
        console.log('Entrou em Erro_REQ');
        throw new Error('Erro na requisição. Status: ' + response.status);
      }
  
    } catch (error) {
      console.error('Erro ao resgistrar usuario :', error.message);
      throw error;
    }
  }

  async function loginUsuario(data) {
    try {
      const response = await fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      // Verifica o status da resposta HTTP
      if (response.ok) {
        // Se a resposta tiver status 200 (OK), retorna 'true'
        return true;
      } else {
        // Caso contrário, lança um erro com a mensagem do status da resposta
        throw new Error('Erro na requisição. Status: ' + response.status);
      }
  
    } catch (error) {
      console.error('Erro ao logar usuario :', error.message);
      throw error;
    }
  }


 module.exports = {
    registrarUsuario,
    loginUsuario
 };