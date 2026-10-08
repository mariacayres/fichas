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
import { useState } from "react";
import Card from "./Card.jsx";
 
const initialCards = [
  { name: " araujo ", type: "diva", attack: 7, defense: 5, liked: false },
  { name: " rafa ", type: "especial", attack: 4, defense: 8, liked: false },
  { name: " eliseu ", type: "especial", attack: 6, defense: 6, liked: false },
  { name: " dinis ", type: "diva", attack: 5, defense: 7, liked: false },
  { name: " francisco ", type: "especial", attack: 9, defense: 3, liked: false },
];
 
function App() {
  const [cards, setCards] = useState(initialCards);
  const [filter, setFilter] = useState("todas");
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
 
  const visible = cards.filter(
    (card) =>
      (filter === "todas" || card.type === filter) &&
      card.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleRandomCard = () => {
    const pool = visible.length > 0 ? visible : cards;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setSelectedCard(pool[randomIndex]);
  };

  const handleToggleLike = (cardName) => {
    setCards((currentCards) =>
      currentCards.map((card) =>
        card.name === cardName ? { ...card, liked: !card.liked } : card
      )
    );
  };
 
  return (
    <main>
      <h1>A minha coleção</h1>
 
      <p>
        voce tem {cards.length} cartas ({visible.length} para usar)
      </p>
 
      <div>
        <button onClick={() => setFilter("todas")}>Todas</button>
        <button onClick={() => setFilter("especial")}>cartas especiais</button>
        <button onClick={() => setFilter("diva")}>cartas bem divas</button>
      </div>
 
      <p>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="pesquisa"
        />
      </p>

      {selectedCard && (
        <div>
          <h2>Carta sorteada</h2>
          <p>
            {selectedCard.name} ({selectedCard.type}) – ataque {selectedCard.attack}, defesa {selectedCard.defense}
          </p>
        </div>
      )}
 
      <ul>
        {visible.map((card) => (
          <Card
            key={card.name}
            card={card}
            onToggleLike={handleToggleLike}
          />
        ))}
      </ul>

      <div>
        <button onClick={handleRandomCard}>aleatorio</button>
      </div>
    </main>
  );
}
 
export default App;
 