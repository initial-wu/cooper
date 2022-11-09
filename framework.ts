export namespace Framework {
    export interface CreatedEvent {
        time: number;
    }
    export interface UpdatedEvent {
        time: number;
    }

    export interface Lifecycle<Public = void> {
        'setup': Public;
        'created': CreatedEvent;
        'updated': UpdatedEvent;
    }

    export interface AddLifecycleListener {
        (name: 'created', handler: (data: CreatedEvent) => void): void;
        (name: 'updated', handler: (data: UpdatedEvent) => void): void;
    }

    export function watchEffect(effect: (onCleanup: OnCleanup) => void): StopHandle {
        return () => {};
    }

    type StopHandle = () => void
    type OnCleanup = (cleanupFn: () => void) => void
}