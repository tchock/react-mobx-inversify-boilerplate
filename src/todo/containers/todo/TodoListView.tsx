import * as React from 'react';
import {observer} from 'mobx-react';
import Todo from '../../models/Todo';

interface ITodoViewListProps {
  todos: Todo[];
  onTodoChange: (index: number) => React.EventHandler<any>;
}

const TodoListView: React.StatelessComponent<ITodoViewListProps> = ({todos, onTodoChange}: ITodoViewListProps) => (
  <div>
    {
      todos.map((todo: Todo, index: number) => (
        <div key={index}>
          <span>{todo.name} (by {todo.createdBy})</span>
          <input type='checkbox' checked={todo.isDone} onChange={onTodoChange(index)} />
        </div>
      ))
    }
  </div>
);

export default observer(TodoListView);
