import './App.css'

//import UserList1 from './components/task1/UserList1';
//import UserList2 from './components/task1/UsersList2';
//import Search from './components/task2/Search';
// import Todo from './components/task4/Todo';
// import SortUsers from './components/task5/SortUsers';
// import SignupForm from './components/task6/SignupForm';
// import OptimizedSearch from './components/task3/OptimizedSearch';
// import ShoppingCart from './components/task7/ShoppingCart';
// import Pagination from './components/task8/Pagination';
//import InfiniteScroll from './components/task9/InfiniteScroll';

import Counter from './components/task11/Counter';

import { useDisplayMode } from './components/task10/DisplayModeProvider';

function App() {
  const { displayMode, toggleDisplayMode } = useDisplayMode();

  const appStyle = {
    background: displayMode === "light" ? "#ffffff" : "#333333",
    color: displayMode === "light" ? "#333333" : "#ffffff",
    padding: "5px",
  };

  return (
    <div>
     <p>React Components</p>
     {/* <UserList2 /> */}
     {/* <Search /> */}
     {/* <Todo /> */}
     {/* <SortUsers /> */}
     {/* <SignupForm /> */}
     {/* <OptimizedSearch /> */}
     {/* <ShoppingCart /> */}
     {/* <Pagination /> */}
     {/* <InfiniteScroll /> */}
     {/* <div style={appStyle}>
      <h3>Press below button to change the display mode</h3>
      <button onClick={() => toggleDisplayMode()}>
        {displayMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
     </div> */}
    <Counter />
    </div>
  )
}

export default App
