import { Box } from "@chakra-ui/react";
import "./App.css";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {

  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast()
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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
      
    
    </Box>
  );
}

export default App
