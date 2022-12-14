import './App.css';
import "./App.dark.css";
//Este blog tendrá un tema oscuro y uno claro, el tema oscuro aun no está configurado, por eso no funciona aun
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h3>
          New Posts: <span>1 posts</span> {/*hard-coded, will change later*/}
        </h3>
        <PostList />
      </main>
    </div>
  );
}

export default App;
