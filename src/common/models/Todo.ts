import {observable} from "mobx";

export interface ITodo {
  name: string;
  isDone: boolean;
}

export default class Todo {
  @observable name: string;
  @observable isDone: boolean;

  constructor({name, isDone}: ITodo) {
    this.name = name;
    this.isDone = isDone;
  }
}
