/**
 * @author Dzmitry Misiuk
 */

export interface Action<T> {
    type: string;
    payload: T;
    error?: boolean;
    meta?: any;
}
