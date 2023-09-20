import Computers from './pages/computers/computers';
import Sidebar from './sidebar/sidebar';

import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <main className="content">
      <Sidebar />
      <Header />
      <Computers />
    </main>
  );
}

export default App;
