import { Framework } from './framework'
import { Mapper } from './template';

export namespace App {
    /**
     * 手动声明
     */
    interface Events extends Framework.Lifecycle {
        'foo': {
            foofoo: string;
        };
        'bar': {
            barbar: string;
        };
    }

    /**
     * 手动声明
     */
    interface Props {
        'p': string;
        'list': Array<{
            key: string;
        }>
    }

    interface Public {
        name: string;
    }

    /**
     * 逻辑
     */
    export const setup: Mapper.Setup<Props, Events, Public> = (ctx, on, props, emit) => {
        // 静态值
        ctx.booName = 'a'
        ctx.boomName = 'b'

        // 响应式追踪
        Framework.watchEffect(() => {
            ctx.boom2Name = props.p;
            ctx.list = props.list.map(item => {
                return {
                    name: item.key
                    }
            });
        })

        // 子组件事件
        on('boom1', data => {
            ctx.booName = data.boom;
        })

        // 子组件事件
        on('foo1', data => {
            ctx.booName = data.foo
        })

        // 当前组件生命周期
        on('created', data => {
            console.log(data.time);
        })

        // 子组件生命周期
        on('fooCreated', data => {
            ctx.boom2Name = data.time.toFixed();
        })

        // 子组件生命周期
        on('fooSetup', data => {
            console.log(data.hello);
        })

        // 自定义事件
        emit('foo', {
            foofoo: 'hello'
        })

        // 自定义事件
        emit('bar', {
            barbar: 'bye'
        })

        // 暴露数据
        return {
            name: 'my'
        }
    }
}
