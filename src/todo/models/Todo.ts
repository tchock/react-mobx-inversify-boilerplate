import {observable} from "mobx";

export interface ITodo {
  name: string;
  isDone: boolean;
  createdBy: string;
}

export default class Todo {
  @observable name: string;
  @observable isDone: boolean;
  @observable createdBy: string;

  constructor({name, isDone, createdBy}: ITodo) {
    this.name = name;
    this.isDone = isDone;
    this.createdBy = createdBy;
  }
}
