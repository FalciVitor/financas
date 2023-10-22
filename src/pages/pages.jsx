import './pages.css';
import Drawer from '../layout/drawer/drawer';

function index() {
  return (
    <div className="App">
      <Drawer />
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <main className='App-main'>
        <h1>Body</h1>
      </main>
    </div>
  );
}

export default index;
