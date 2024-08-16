import './App.css';
import { Contact } from './components/Contact';
// Headerコンポーネントをimportする
import { Header } from './components/Header';
import { Skills } from './components/Skills';


function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
