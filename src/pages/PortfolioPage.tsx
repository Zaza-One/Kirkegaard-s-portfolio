import { Link } from 'react-router-dom';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-hero">
        <h1>Portfolio</h1>
        <div className="section-divider" aria-hidden="true" />
        <p className="portfolio-hero-sub">
          Costume construction, tailoring, and historical garments — five years of work across school, stage, and personal projects.
        </p>
      </header>

      <div className="portfolio-grid">
        {PORTFOLIO_CATEGORIES.map((cat) => (
          <Link key={cat.id} to={cat.path.replace('/portfolio', '')} className="portfolio-card">
            <div className="portfolio-card-badge">{cat.dateRange}</div>
            <h2 className="portfolio-card-title">{cat.title}</h2>
            <p className="portfolio-card-desc">{cat.description}</p>
            <span className="portfolio-card-count">{cat.badge} →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
