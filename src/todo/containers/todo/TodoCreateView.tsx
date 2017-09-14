import * as React from 'react';

interface ITodoCreateViewProps {
  newTodo: string;
  onSubmit: React.EventHandler<any>;
  onChange: React.EventHandler<React.ChangeEvent<any>>;
}

const TodoCreateView: React.StatelessComponent<ITodoCreateViewProps> = ({
  newTodo,
  onSubmit,
  onChange,
}: ITodoCreateViewProps) => (
  <form onSubmit={onSubmit}>
    <input onChange={onChange} value={newTodo} />
    <button>Add</button>
  </form>
);

export default TodoCreateView;
