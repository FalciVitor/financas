import './home.css';
import Drawer from '../../layout/drawer/drawer';

function index() {
  return (
    <div className="App">
      <Drawer />
      <main className="App-header">
        <h1>Header</h1>
      </main>
    </div>
  );
}

export default index;
