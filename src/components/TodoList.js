import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// map으로 컴포넌트 변환시 key, props로 전달해줘야함
// key에는 각 항목의 고유 id를 넣어줘야함
// todo 데이터는 통째로 props로 전달 (이후 성능최적화에 용이)
const TodoList = ({ todos }) => {
    return (
        <div className='TodoList'>
            {/* <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/> */}
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;