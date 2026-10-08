// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
const cards = [{ name: "araujo ", type: "Criatura", attack: 7, defense: 5 },
  { name: "rafa ", type: "Criatura", attack: 4, defense: 8 },
  { name: "eliseu ", type: "Criatura", attack: 6, defense: 6 },
  { name: "dinis ", type: "Criatura", attack: 5, defense: 7 },
  { name: "francisco ", type: "Criatura", attack: 9, defense: 3 },];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
    </main>
  );
}

export default App;
