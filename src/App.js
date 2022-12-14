import './App.css';
import "./App.dark.css";
//Este blog tendrá un tema oscuro y uno claro
import Header from './components/Header';
import PostList from './components/PostList';
import {AppContext, AppProvider} from "./context/AppState";

function App() {
  return (
    <AppProvider>
      <Header />
      <AppContext.Consumer>
        {({ posts, darkTheme, setDarkTheme }) => (
          <>
            <main className={`${darkTheme ? 'dark' : ''}`}>
              <h3>
                New Posts: <span>1 posts</span> {/*hard-coded, will change later*/}
              </h3>
              <PostList />
            </main>
            <footer
              onClick={() => setDarkTheme(!darkTheme)}
              className={`${darkTheme ? 'dark' : ''}`}
            >
              <i className={`fas fa-${darkTheme ? 'sun' : 'moon'}`}></i>
            </footer>
          </>
        )}
        </AppContext.Consumer>
    </AppProvider>
    
  );
}

export default App;
