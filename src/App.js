import './App.css';

import SideBar from './components/SideBar';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <SideBar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
