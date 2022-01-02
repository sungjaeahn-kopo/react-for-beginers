import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventPractice from './EventPractice';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>                                                                   
//   );
// }

// const App = () => {
//   return <EventPractice/>;
// };

// const App = () => {
//   return (
//     <div>
//       Todo App을 만들자!
//     </div>
//   );
// };

const App = () => {
  // todos 상태 사용
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트의 기초를 알아보자',
      checked : true,
    },
    {
      id : 2,
      text : '컴포넌트 스타일링 해보기',
      checked : true,
    },
    {
      id : 3,
      text : '일정관리 앱 만들어 보기',
      checked : false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todo={todos}/>
    </TodoTemplate>
  );
};

export default App;
