import Counter from './components/Counter.jsx';
import TodoList from './components/TodoList.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import SearchBox from './components/SearchBox.jsx';

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">WEEK 10 ASSIGNMENT</p>
        <h1>React Hooks</h1>
        <p className="intro">Four small examples of state, effects, and refs in action.</p>
      </header>

      <div className="component-grid">
        <section className="panel" aria-labelledby="counter-heading">
          <div className="panel-heading">
            <span className="step">01</span>
            <div><h2 id="counter-heading">Counter</h2><p>Manage a number with state.</p></div>
          </div>
          <Counter />
        </section>

        <section className="panel" aria-labelledby="todo-heading">
          <div className="panel-heading">
            <span className="step">02</span>
            <div><h2 id="todo-heading">Todo List</h2><p>Add and remove tasks.</p></div>
          </div>
          <TodoList />
        </section>

        <section className="panel" aria-labelledby="profile-heading">
          <div className="panel-heading">
            <span className="step">03</span>
            <div><h2 id="profile-heading">Profile Loader</h2><p>Load profile data after a short delay.</p></div>
          </div>
          <ProfileCard />
        </section>

        <section className="panel" aria-labelledby="search-heading">
          <div className="panel-heading">
            <span className="step">04</span>
            <div><h2 id="search-heading">Search Box</h2><p>Focus an input and count renders with refs.</p></div>
          </div>
          <SearchBox />
        </section>
      </div>
      <footer>Built with React Hooks</footer>
    </main>
  );
}

export default App;
