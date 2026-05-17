import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar" aria-label="Site navigation">
      <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
        Moonwater <span>Portfolio</span>
      </Link>

      <ul className={`navbar-links${open ? ' open' : ''}`} role="list">
        {PORTFOLIO_CATEGORIES.map((cat) => (
          <li key={cat.id}>
            <Link
              to={cat.path.replace('/portfolio', '')}
              className={location.pathname === cat.path.replace('/portfolio', '') ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {cat.title}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="navbar-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
}
