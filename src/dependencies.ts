import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';

import TodoStore from './common/stores/TodoStore';

export const container = new Container({ defaultScope: 'Singleton' });
export const { lazyInject } = getDecorators(container);

container.bind<any>('window').toConstantValue(window);
container.bind<any>('document').toConstantValue(document);

container.bind<TodoStore>(TodoStore).to(TodoStore);
