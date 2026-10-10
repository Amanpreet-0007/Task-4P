import Card from "./Card";
import './Cardlist.css';

function Cardlist({ items, searchTerm }) {
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cards-grid">
      {filteredItems.map((item) => (
        <Card 
          key={item.key}
          image={item.image}
          title={item.title}
          description={item.description}
          tag={item.tag}
          rating={item.rating}
          author={item.author}
        />
      ))}
    </div>
  );
}

export default Cardlist;