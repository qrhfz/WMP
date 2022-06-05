import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import Track from "../track_queue/track"
import { push, pushPlay } from "../track_queue/trackQueueSlice"

export const Home = () => {
    const trackQueue = useSelector((state: RootState) => state.trackQueue)
    const dispatch = useDispatch()
    const tracks: Array<Track> = [

    ]

    return <div>

        {tracks.map((track) => {
            return (
                <div
                    className="pb-2 border-b-2 mb-2 flex flex-row"
                    key={track.audioURL} >
                    <i className='bx bx-play-circle text-4xl p-2'
                        onClick={() => {
                            dispatch(pushPlay(track))
                        }}
                    ></i>
                    <div>
                        <div className='text-lg'>{track.title}</div>
                        <div className='text-sm'>{track.artists[0]}</div>
                    </div>
                    <div className='flex-1'></div>
                    <i className='bx bxs-add-to-queue text-2xl p-2'
                        onClick={() => {
                            dispatch(push(track))
                        }}>
                    </i>

                </div>
            )
        })}
    </div>
}