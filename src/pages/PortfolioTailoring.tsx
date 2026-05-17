import { Link } from 'react-router-dom';
import { TAILORING_ITEMS } from '../data/portfolio';

export default function PortfolioTailoring() {
  return (
    <div className="portfolio-cat">
      <Link to="/" className="portfolio-back">← Portfolio</Link>

      <header className="portfolio-cat-header">
        <p className="portfolio-cat-date">2024–2025</p>
        <h1>Tailoring</h1>
        <div className="section-divider" aria-hidden="true" />
        <p className="portfolio-cat-intro">
          Late 18th-century tailored men's suits, a period shirt, and a boned bodice —
          each piece built with period-accurate construction techniques.
        </p>
      </header>

      <ul className="portfolio-items-list" aria-label="Tailoring pieces">
        {TAILORING_ITEMS.map((item) => (
          <li key={item.title} className="portfolio-item">
            <span className="portfolio-item-title">{item.title}</span>
            {item.pieces.length > 0 && (
              <ul className="portfolio-sub-list">
                {item.pieces.map((piece) => (
                  <li key={piece}>{piece}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
