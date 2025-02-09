document.addEventListener('DOMContentLoaded', function() {
  // Login form submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(loginForm);
      const data = Object.fromEntries(formData.entries());
      try {
        const response = await fetch('https://api.greb.com.br/functions/code_e506c2/create_user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('message').textContent = result.success ? 'Login/Cadastro realizado com sucesso!' : result.error || 'Erro na operação';
      } catch (error) {
        console.error(error);
      }
    });
  }

  // Course form submission
  const courseForm = document.getElementById('courseForm');
  if (courseForm) {
    courseForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(courseForm);
      const data = Object.fromEntries(formData.entries());
      try {
        const response = await fetch('https://api.greb.com.br/functions/code_e506c2/process', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        document.getElementById('courseMessage').textContent = result.success ? 'Curso salvo com sucesso!' : result.error || 'Erro ao salvar curso';
      } catch (error) {
        console.error(error);
      }
    });
  }
});
