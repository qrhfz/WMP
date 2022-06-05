import { memoize } from "./memo";

function hashColor(s: string): string {
    function hash(s: string): number {
        let hash = 0, i, chr;
        if (s.length === 0) return hash;
        for (i = 0; i < s.length; i++) {
            chr = s.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash
    }

    const hue = hash(s) % 360
    const saturation = "80%"
    const lightness = "80%"
    return `hsl(${hue}, ${saturation}, ${lightness})`
}

const memoizedHashColor = memoize(hashColor)

export { memoizedHashColor as hashColor }