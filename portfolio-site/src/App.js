import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-primary h-screen w-screen bg-contain">
      {/* Code below is published on branch gh-pages. */}
      <div class="h-screen bg-cover bg-center bg-no-repeat bg-[url('./assets/in_progress.jpg')]">
        <div class="text-4xl text-center text-red-600 pt-20">This site is still in progress.</div>
      </div>

      {/* Code below is published on branch main. */}
      {/* <Navbar /> */}

    </div>
  );
}

export default App;
