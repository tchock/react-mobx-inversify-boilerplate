import * as React from 'react';
import {observer} from 'mobx-react';

import {lazyInject} from '../../dependencies';
import UserStore from '../../stores/UserStore';

import UserView from './UserView';

@observer
export default class UserContainer extends React.Component {
  @lazyInject(UserStore) userStore;

  render() {
    return (
      <UserView
        userName={this.userStore.userName}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = (e: React.ChangeEvent<any>) => this.userStore.userName = e.target.value;
}
