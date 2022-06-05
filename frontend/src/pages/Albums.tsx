import { useGetAlbumsQuery } from "../api/apiSlice"
import randomColor from "../utils/randomColor"

export const Albums = () => {

    const { data: albums, isLoading } = useGetAlbumsQuery()

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div>
            <h2>Album</h2>
            <div className="grid grid-cols-3 gap-2 text-black text-2xl">
                {albums?.map(album => (
                    <div
                        className="p-2 aspect-square"
                        key={album.id}
                        style={{ backgroundColor: randomColor() }}>
                        <strong>{album.title}</strong>
                        <div>
                            {album.artists?.map(artist => (
                                <span className="pr-1">{artist.name}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

