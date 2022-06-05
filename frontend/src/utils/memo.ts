export const memoize = (fn: Function): Function => {
    const cache: any = {}

    return (...arg: any) => {
        if (cache[arg] === undefined) {

            cache[arg] = fn(...arg)
        }
        return cache[arg]
    }
}