import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import TodoListView from './TodoListView';
import TodoCreateView from './TodoCreateView';

import {lazyInject} from '../../dependencies';
import TodoStore from '../../stores/TodoStore';

@observer
export default class TodoContainer extends React.Component {
  @lazyInject(TodoStore) todoStore;

  @observable newTodo: string = "";

  render() {
    return (
      <div>
        <TodoListView onTodoChange={this.handleTodoChange} todos={this.todoStore.todos} />
        <TodoCreateView
          newTodo={this.newTodo}
          onChange={this.handleNewTodoChange}
          onSubmit={this.handleTodoCreate}
        />
      </div>
    );
  }

  private handleTodoChange = (index: number) =>
    (event: React.ChangeEvent<any>) => this.todoStore.todos[index].isDone = event.target.checked;

  private handleTodoCreate = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (this.newTodo === '') {
      return;
    }
    this.todoStore.createTodo(this.newTodo);
    this.newTodo = '';
  }

  private handleNewTodoChange = (e: React.ChangeEvent<any>) => {
    this.newTodo = e.target.value;
  }
}
