import React, { useCallback, useRef, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import EventPractice from './EventPractice';
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
    {
      id : 4,
      text : '일정관리 앱 만들어 보기22',
      checked : false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref 사용해서 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id == id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
  );
};

export default App;
