import "./App.css";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {

  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast()
  return (
    <main>
      {forecast ? (
        <Forecast data={forecast}/>
      ) : (
        
        <Search
        term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}></Search>
      )}
      
    
    </main>
  );
}

export default App
