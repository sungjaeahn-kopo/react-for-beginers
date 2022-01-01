import logo from './logo.svg';
import './App.css';
import EventPractice from './EventPractice';
import TodoTemplate from './components/TodoTemplate';

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
  return (
    <TodoTemplate>
      Todo App을 만들자!
    </TodoTemplate>
  );
};

export default App;
