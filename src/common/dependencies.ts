import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';

import UserStore from './stores/UserStore';

export const container = new Container({ defaultScope: 'Singleton' });
export const { lazyInject } = getDecorators(container);

container.bind<any>('window').toConstantValue(window);
container.bind<any>('document').toConstantValue(document);
container.bind<UserStore>(UserStore).to(UserStore);
