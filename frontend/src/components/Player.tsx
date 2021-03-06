import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import Song from "../models/song";
import { next, clear, toggleRepeat, RepeatMode, toggleRandom } from "../track_queue/trackQueueSlice";

export function Player() {
    const [isPlaying, setPlaying] = useState(false)
    const [isMuted, setMute] = useState(false)
    const [timer, setTimer] = useState("00:00")
    const audioRef = useRef<HTMLAudioElement>(null)
    const sliderRef = useRef<HTMLInputElement>(null)
    const volumeRef = useRef<HTMLInputElement>(null)
    const trackQueue = useSelector((state: RootState) => state.trackQueue)
    const dispatch = useDispatch()

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        if (trackQueue.mainQueue.length > 0) {
            audio.play()
        }

    }, [trackQueue])

    function togglePlay() {
        const audio = audioRef.current
        if (audio?.paused) {

            audio?.play()
        } else {

            audio?.pause()
        }

    }

    function setTime() {
        const audio = audioRef.current
        const currentTime = (audio?.currentTime ?? 0)
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime - minutes * 60);

        const minuteValue = minutes.toString().padStart(2, '0');
        const secondValue = seconds.toString().padStart(2, '0');

        const mediaTime = `${minuteValue}:${secondValue}`;
        setTimer(mediaTime);
    }

    function stop() {

        dispatch(clear())
    }

    function seek() {
        const audio = audioRef.current
        if (!audio) return
        const current = Number.parseInt(sliderRef.current?.value ?? "0")
        audio.currentTime = current

    }

    function changeVol() {
        const audio = audioRef.current
        const volume = volumeRef.current

        if (!audio || !volume) return

        audio.volume = Number.parseInt(volume.value) / 100
    }

    function currentSong(): Song | undefined {
        return trackQueue.mainQueue[0]
    }

    function toggleMute() {
        const audio = audioRef.current
        if (!audio) return


        const muted = audio.muted
        audio.muted = !muted
        setMute(!muted)
    }


    return (
        (currentSong()) ? <div className="fixed bottom-0 w-full">

            <audio
                loop={trackQueue.repeat == RepeatMode.One}
                ref={audioRef}
                onTimeUpdate={setTime}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
                onEnded={() => dispatch(next())}
                src={currentSong()?.file}
            ></audio>
            <div className="flex flex-col md:flex-row items-center gap-4 border-t-2 p-2">
                <div className="whitespace-nowrap md:w-64">
                    <div className="inline md:block">{currentSong()?.title}</div>
                    <div className="inline md:hidden"> | </div>
                    <div className="inline md:block">{currentSong()?.artists?.[0].name ?? ''}</div>

                </div>
                <input
                    type="range"
                    max={(audioRef.current?.duration ?? 0).toString()}
                    min="0"
                    value={audioRef.current?.currentTime ?? 0}
                    onInput={seek}
                    ref={sliderRef}
                    className="w-full"
                />
                <div className="hidden md:block">{timer}</div>
                <div className=' flex flex-row w-min gap-4'>
                    <i className={`text-3xl bx ${isPlaying ? 'bx-pause' : 'bx-play'}`} onClick={togglePlay}></i>
                    <i className='text-3xl bx bx-stop' onClick={stop}></i>
                    <i className='text-3xl bx bx-skip-next' onClick={() => dispatch(next())}></i>
                    <div className={`relative ${(trackQueue.repeat !== RepeatMode.False) && "text-green-700"}`}>
                        <i className="text-3xl bx bx-repeat"
                            onClick={() => dispatch(toggleRepeat())}></i>
                        <div className="absolute top-[-0.5rem] right-[-0.5rem] text-sm">
                            {(trackQueue.repeat == RepeatMode.One) && "1"}
                            {(trackQueue.repeat == RepeatMode.Queue) && <i className='bx bx-refresh'></i>}
                        </div>
                    </div>


                    <i className={`text-3xl bx bx-shuffle ${trackQueue.random && 'text-green-700'}`} onClick={() => dispatch(toggleRandom())}></i>
                </div>



                <div className="hidden relative volume-container md:flex flex-col justify-center  ">
                    <div className="absolute w-min volume-bar pl-8">
                        <input type="range" min="0" max="100" ref={volumeRef} onInput={changeVol} />
                    </div>
                    <i className={`text-xl bx ${isMuted ? 'bxs-volume-mute' : 'bxs-volume'} rotate-90`} onClick={toggleMute}></i>
                </div>
            </div>

        </div> : <></>

    )
}