import "./app.css";
import AppInfo from "../appinfo/appinfo";
import AppFilter from "../appfilter/appfilter";
import SearchPanel from "../searchpanel/searchpanel";
import MovieList from "../movielist/movielist";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
