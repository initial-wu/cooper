import { Framework } from './framework';

export namespace ComponentBoom {
    interface BoomData {
        boom: string;
    }

    export interface Events extends Framework.Lifecycle {
        'boom': BoomData;
    }

    export interface Props {
        'name': string;
    }
}