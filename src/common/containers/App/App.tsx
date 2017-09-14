import * as React from 'react';

import TodoContainer from '../../../todo/containers/todo/TodoContainer';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoContainer />
      </div>
    )
  }
}
