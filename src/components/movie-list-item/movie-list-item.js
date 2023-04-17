import "./movie-list-item.css";
const MovieListItem = () => {
  return (
    <div>
      <li className="list-group-item justify-content-between d-flex">
        <span className="list-group-item-label">Empire of Osman</span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={989}
        />
        <div className="justify-content-center d-flex align-items-center">
          <button type="button" className="btn btn-cookie btn-sm">
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    </div>
  );
};

export default MovieListItem;
