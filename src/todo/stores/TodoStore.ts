import {observable, reaction} from 'mobx';
import {injectable, inject} from 'inversify';

import Todo from '../models/Todo';
import UserStore from '../../common/stores/UserStore';

@injectable()
export default class TodoStore {
  @observable todos: Todo[];

  constructor(
    @inject('window') private window,
    @inject(UserStore) private userStore
  ) {
    this.todos = JSON.parse(this.window.localStorage.getItem('todos') || '[]').map(values => new Todo(values));

    reaction(
      () => this.toJson(),
      todos => this.window.localStorage.setItem('todos', JSON.stringify(todos)),
    );
  }

  createTodo(name: string) {
    this.todos.push(new Todo({name, isDone: false, createdBy: this.userStore.userName}));
  }

  toJson() {
    return this.todos.map(({name, isDone}) => ({name, isDone}));
  }
}
