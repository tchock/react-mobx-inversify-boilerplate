import {observable} from 'mobx';
import {injectable} from 'inversify';

@injectable()
class UserStore {
  @observable userName: string = "";
}

export default UserStore;
