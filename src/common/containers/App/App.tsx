import * as React from 'react';

import UserContainer from '../User/UserContainer';
import TodoContainer from '../../../todo/containers/Todo/TodoContainer';

export class App extends React.Component {
  render() {
    return (
      <div>
        <UserContainer />
        <h1>Todos</h1>
        <TodoContainer />
      </div>
    )
  }
}
