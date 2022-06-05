export default function randomColor() {
    const hue = Math.floor(Math.random() * 360).toString()
    const saturation = "80%"
    const lightness = "80%"

    return `hsl(${hue}, ${saturation}, ${lightness})`
}

