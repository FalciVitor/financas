import './App.css';
import LeftMenu from './left_menu/index';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <main className='App-main'>
        <h1>Body</h1>
      </main>
    </div>
  );
}

export default App;
