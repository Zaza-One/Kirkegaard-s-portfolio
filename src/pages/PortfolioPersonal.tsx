import { Link } from 'react-router-dom';
import { PERSONAL_COSTUMES } from '../data/portfolio';

export default function PortfolioPersonal() {
  return (
    <div className="portfolio-cat">
      <Link to="/" className="portfolio-back">← Portfolio</Link>

      <header className="portfolio-cat-header">
        <p className="portfolio-cat-date">Ongoing</p>
        <h1>Personal Costumes</h1>
        <div className="section-divider" aria-hidden="true" />
        <p className="portfolio-cat-intro">
          Costumes made for personal wear — each one chosen because the character or story resonated,
          and built with the same care as any stage production piece.
        </p>
      </header>

      <ul className="portfolio-items-list" aria-label="Personal costumes">
        {PERSONAL_COSTUMES.map((costume) => (
          <li key={costume.title} className="portfolio-item">
            <span className="portfolio-item-title">{costume.title}</span>
            <span className="portfolio-item-source">{costume.source}</span>
            {costume.pieces.length > 0 && (
              <ul className="portfolio-sub-list">
                {costume.pieces.map((piece) => (
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
