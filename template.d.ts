import { Framework } from './framework'
import { ComponentBoom } from './component-boom';
import { ComponentFoo } from './component-foo';

declare module './template' {
    /**
     * 模板编译
     */
    namespace Mapper {
        interface Ctx {
            boomName: ComponentBoom.Props['name'];
            boom2Name: ComponentBoom.Props['name'];
            booName: ComponentFoo.Props['name'];
            list: Array<{
                name: ComponentFoo.Props['name'];
            }>
        }
    
        interface AddListener extends Framework.AddLifecycleListener {
            (name: 'boom1', handler: (data: ComponentBoom.Events['boom']) => void): void;
            (name: 'boom2', handler: (data: ComponentBoom.Events['boom']) => void): void;
            (name: 'foo1', handler: (data: ComponentFoo.Events['foo']) => void): void;
            (name: 'fooCreated', handler: (data: Framework.Lifecycle['created']) => void): void;
            (name: 'fooSetup', handler: (data: Framework.Lifecycle<ComponentFoo.Public>['setup']) => void): void;
        }
    
        export interface Setup<Props, Events, Data> {
            (ctx: Ctx, on: AddListener, props: Props, emit: <Key extends keyof Events>(name: Key, data: Events[Key]) => void): Data;
        }
    }
}
