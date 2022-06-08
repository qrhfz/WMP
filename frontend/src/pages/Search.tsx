import { useState } from "react"
import { debounce } from "../utils/debounce"

export const Search = () => {
    const [searchPhrase, setSearchPhrase] = useState("")
    const fetchSearchResult = debounce((phrase: string) => {
        setSearchPhrase(phrase)
    })

    return <div>
        <input
            type="text"
            className="outline-gray-400 border-2 w-full p-2"
            placeholder="Search songs, artists or albums"
            onChange={e => fetchSearchResult(e.target.value)}
        />
        <div>{searchPhrase}</div>
    </div>
}