import { Framework } from './framework'

export namespace ComponentFoo {
    interface FooData {
        foo: string;
    }

    export interface Events extends Framework.Lifecycle {
        'foo': FooData
    }

    export interface Props {
        'name': string;
    }

    export interface Public {
        'hello': string;
    }
}