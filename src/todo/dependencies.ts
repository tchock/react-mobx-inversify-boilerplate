import getDecorators from 'inversify-inject-decorators';
import { Container } from 'inversify';

import {container as parentContainer} from '../common/dependencies';

import TodoStore from './stores/TodoStore';

export const container = new Container({ defaultScope: 'Singleton' });
container.parent = parentContainer;
export const { lazyInject } = getDecorators(container);

container.bind<TodoStore>(TodoStore).to(TodoStore);
