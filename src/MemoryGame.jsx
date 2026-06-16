import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

export default function MemoryGame({ words, onComplete }) {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    // Generate cards from words
    if (!words || words.length === 0) return;
    
    // Select up to 4 words (8 cards total)
    const selectedWords = words.slice(0, 4);
    
    let initialCards = [];
    selectedWords.forEach(word => {
      initialCards.push({ id: \\_zh\, content: word.zh, type: 'zh', matchId: word.zh });
      initialCards.push({ id: \\_en\, content: word.en, type: 'en', matchId: word.zh });
    });
    
    // Shuffle cards
    initialCards = initialCards.sort(() => Math.random() - 0.5);
    setCards(initialCards);
    setFlippedIndices([]);
    setMatchedIds([]);
    setIsLocked(false);
  }, [words]);

  const handleCardClick = (index) => {
    if (isLocked) return;
    if (flippedIndices.includes(index)) return;
    if (matchedIds.includes(cards[index].matchId)) return;

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setIsLocked(true);
      const card1 = cards[newFlipped[0]];
      const card2 = cards[newFlipped[1]];

      if (card1.matchId === card2.matchId) {
        // Match!
        setTimeout(() => {
          setMatchedIds(prev => [...prev, card1.matchId]);
          setFlippedIndices([]);
          setIsLocked(false);
          
          // Check win condition
          if (matchedIds.length + 1 === cards.length / 2) {
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 1000);
          }
        }, 800);
      } else {
        // No match
        setTimeout(() => {
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1200);
      }
    }
  };

  if (!words || words.length === 0) {
    return <div style={{padding: '20px', textAlign: 'center'}}>这本故事没有词汇可以复习哦！</div>;
  }

  return (
    <div className="memory-game-container">
      <div className="memory-cards-grid">
        {cards.map((card, index) => {
          const isFlipped = flippedIndices.includes(index) || matchedIds.includes(card.matchId);
          const isMatched = matchedIds.includes(card.matchId);
          
          return (
            <div 
              key={card.id} 
              className={\memory-card \ \\}
              onClick={() => handleCardClick(index)}
            >
              <div className="memory-card-inner">
                <div className="memory-card-front">
                  <span>?</span>
                </div>
                <div className="memory-card-back">
                  <span className={\memory-card-content \\}>
                    {card.content}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
