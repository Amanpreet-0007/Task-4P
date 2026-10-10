import { useState } from 'react';
import Cardlist from '../Cardlist';
import { articlesList, tutorialsList } from '../articleslist';
import '../Cardlist.css';

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="homepage-container">
      {/* Deakin University Campus Banner */}
      <div className="banner-section">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80" 
          alt="Deakin University Campus" 
          className="banner-img"
        />
      </div>

      {/* Search Input Bar */}
      <div className="search-wrapper">
        <input 
          type="text" 
          placeholder='Search articles or tutorials...' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="home-search-input"
        />
      </div>

      {/* Featured Articles Section */}
      <section className="section-block">
        <h2 className="section-heading">Featured Articles</h2>
        <Cardlist items={articlesList} searchTerm={search} />
        <div className="see-all-container">
          <button className="see-all-btn">See all articles</button>
        </div>
      </section>

      {/* Featured Tutorials Section */}
      <section className="section-block">
        <h2 className="section-heading">Featured Tutorials</h2>
        <Cardlist items={tutorialsList} searchTerm={search} />
        <div className="see-all-container">
          <button className="see-all-btn">See all tutorials</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;