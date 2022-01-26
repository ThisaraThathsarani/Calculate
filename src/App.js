import './App.css';
import Header from './components/Header/header';
import Calculate from './components/calculator/calculation';
import Button from './components/Button/button';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculate />
      <Button />
    </div>
  );
}

export default App;
