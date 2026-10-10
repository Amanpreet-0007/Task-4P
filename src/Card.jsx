import './Cardlist.css';

function Card(props) {
  return (
    <div className='card-item'>
      <img src={props.image} alt={props.title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-desc">{props.description}</p>
        <p className="card-tag">{props.tag}</p>
        <div className="card-footer-info">
          <span className="card-rating">{props.rating}</span>
          <span className="card-author">{props.author}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;