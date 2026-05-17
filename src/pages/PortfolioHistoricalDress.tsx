import { Link } from 'react-router-dom';
import { HISTORICAL_DRESS_PIECES } from '../data/portfolio';

export default function PortfolioHistoricalDress() {
  return (
    <div className="portfolio-cat">
      <Link to="/" className="portfolio-back">← Portfolio</Link>

      <header className="portfolio-cat-header">
        <p className="portfolio-cat-date">2025–2026</p>
        <h1>1897 Historical Dress Show</h1>
        <div className="section-divider" aria-hidden="true" />
        <p className="portfolio-cat-intro">
          A complete late-Victorian ensemble constructed for the 1897 Historical Dress Show,
          built layer by layer from the foundational undergarments through to the finished outer garments.
        </p>
      </header>

      <ul className="portfolio-items-list" aria-label="Pieces">
        {HISTORICAL_DRESS_PIECES.map((piece) => (
          <li key={piece} className="portfolio-item">
            <span className="portfolio-item-title">{piece}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
