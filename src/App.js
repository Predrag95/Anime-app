import './App.css';
import Search from './assets/Search';
import Sidebar from './assets/Sidebar';
import View from './assets/View';

function App() {
  return (
    <div className="app">
      <Search />
      <div className='content-wrapper'>
        <Sidebar />
        <View />
      </div>      
    </div>
  );
}

export default App;
