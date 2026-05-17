import { Link } from 'react-router-dom';
import { PRODUCTIONS } from '../data/portfolio';

export default function PortfolioPlaysOperas() {
  return (
    <div className="portfolio-cat">
      <Link to="/" className="portfolio-back">← Portfolio</Link>

      <header className="portfolio-cat-header">
        <p className="portfolio-cat-date">2024–2026</p>
        <h1>Plays & Operas</h1>
        <div className="section-divider" aria-hidden="true" />
        <p className="portfolio-cat-intro">
          Fountain School of Performing Arts, Dalhousie University —
          costume construction across five productions, working under professional costume designers.
        </p>
      </header>

      <div className="productions-list">
        {PRODUCTIONS.map((prod) => (
          <article key={prod.title} className="production-card">
            <div className="production-top">
              <div>
                <h2 className="production-title">{prod.title}</h2>
                <p className="production-date">{prod.date}</p>
              </div>
            </div>
            <p className="production-designer">
              Costume Designer: <span>{prod.costumeDesigner}</span>
            </p>
            <div className="costume-tags">
              {prod.costumes.map((c) => (
                <span key={c} className="costume-tag">{c}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
