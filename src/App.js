import Action from "./COMPONENTS/Action";
import Comedy from "./COMPONENTS/Comedy";
import Navbar from "./COMPONENTS/Navbar";
import TrendingMovies from "./COMPONENTS/TrendingMovies";


function App() {
  return (
    <div>
        <Navbar/>
        <TrendingMovies/>
        <Action/>
        <Comedy/>
    </div>
  );
}

export default App;
