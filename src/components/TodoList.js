import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// map으로 컴포넌트 변환시 key, props로 전달해줘야함
// key에는 각 항목의 고유 id를 넣어줘야함
// todo 데이터는 통째로 props로 전달 (이후 성능최적화에 용이)
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    // 세 값을 객체로 받아와 사용
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  // console.log('===todo===', todo);
  // console.log('===todos===', todos);
  return (
    // <div className="TodoList">
    //   {todos &&
    //     todos.map((todo) => (
    //       <TodoListItem
    //         todo={todo}
    //         key={todo.id}
    //         onRemove={onRemove}
    //         onToggle={onToggle}
    //       />
    //     ))}
    // </div>
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목 랜더링할 때 쓰는 함수
      list={todos}
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
