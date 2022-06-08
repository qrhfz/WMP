export const debounce = (func: Function, timeout = 600) => {
    let timer: number;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}