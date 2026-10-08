export default function Card({ card, onToggleLike }) {
  return (
    <li className="card-item">
      <span>
        {card.attack >= 6 && <span className="strong">forte</span>}
        {card.name} ({card.type}) – ataque {card.attack}
      </span>
      <button className="like-button" onClick={() => onToggleLike(card.name)}>
        {card.liked ? "♥" : "♡"}
      </button>
    </li>
  );
}