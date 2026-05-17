import { Link } from 'react-router-dom';
import { COURSEWORK_SECTIONS } from '../data/portfolio';

export default function PortfolioCoursework() {
  return (
    <div className="portfolio-cat">
      <Link to="/" className="portfolio-back">← Portfolio</Link>

      <header className="portfolio-cat-header">
        <p className="portfolio-cat-date">2023–2025</p>
        <h1>Academic Coursework</h1>
        <div className="section-divider" aria-hidden="true" />
        <p className="portfolio-cat-intro">
          Projects from Show Class, Drafting, and History of Costume —
          the foundational courses that shaped my understanding of construction, pattern making, and historical silhouette.
        </p>
      </header>

      <div className="coursework-blocks">
        {COURSEWORK_SECTIONS.map((section) => (
          <div key={section.title} className="coursework-block">
            <h2 className="coursework-block-title">
              {section.title}
              {section.dateRange && (
                <span className="coursework-block-date"> — {section.dateRange}</span>
              )}
            </h2>
            <ul className="portfolio-items-list">
              {section.projects.map((project) => (
                <li key={project} className="portfolio-item">
                  <span className="portfolio-item-title">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
