import { hashColor } from "../utils/hashColor"

interface PropType {
    id: string,
    children: JSX.Element[] | JSX.Element
}

export function ColoredSquareTile({ id, children }: PropType) {
    return <div
        className="p-2 aspect-square flex justify-center items-center"
        style={{ backgroundColor: hashColor(id) }}>
        {children}
    </div>
}