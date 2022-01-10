import React, { useCallback, useRef, useReducer } from 'react';
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

function createBuilkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로추가
      // {type : 'INSERT', todo : {id : 1, text : 'todo', checked : false}}
      return todos.concat(action.todo);
    case 'REMOVE': // 새로추가
      // {type : 'INSERT', todo : {id : 1, text : 'todo', checked : false}}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': // 새로추가
      // {type : 'INSERT', todo : {id : 1, text : 'todo', checked : false}}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // todos 상태 사용
  // 함수 형태가 아닌 파라미터 형태로 넣으면 첫 랜더링떄만 함수실행
  const [todos, dispatch] = useReducer(
    todoReducer,
    undefined,
    createBuilkTodos,
  );

  // 고윳값으로 사용될 id
  // ref 사용해서 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
