import { useContext } from 'react'
import './App.css';
import { Header } from './Components/Header/Header'
import { Content } from './Components/Content/Content'
import { ThemeContext} from './Context/Context'

const style = {
  light : {
    color : "grey"
  },
  dark : {
    color : "indianred"
  }
}

function App() {
  const [state, toggleState] = useContext(ThemeContext);
  return (
    <div className="App">
        <h1 style={style[state]}>Toggle Theme Application</h1>
        <Header />
        <Content />
    </div>
  );
}

export default App;
