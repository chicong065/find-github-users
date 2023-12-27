import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ProgressIndicator from './components/ProgressIndicator';
import './App.css'

const App = () => {
  return (
    <div>
      <SearchBar />
      <ProgressIndicator />
      <UserList />
    </div>
  );
};

export default App;
