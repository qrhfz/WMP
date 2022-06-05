import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Track from "./track";

export enum RepeatMode {
    False, One, Queue
}

export interface TrackQueueState {
    mainQueue: Array<Track>,
    sideQueue: Array<Track>,
    repeat: RepeatMode,
    random: boolean
}

const initialState: TrackQueueState = {
    mainQueue: [],
    sideQueue: [],
    repeat: RepeatMode.False,
    random: false
}

export const trackQueueSlice = createSlice({
    name: "trackQueue",
    initialState,
    reducers: {
        push: (state, action: PayloadAction<Track>) => {
            state.mainQueue.push(action.payload)
        },
        pushPlay: (state, action: PayloadAction<Track>) => {
            state.mainQueue.unshift(action.payload)
        },
        pushAll: (state, action: PayloadAction<Array<Track>>) => {
            state.mainQueue.concat(action.payload)
        },
        popCurrent: state => {
            const track = state.mainQueue.shift()
            if (track)
                state.sideQueue.push(track)
        },
        clear: state => {
            state.mainQueue = []
            state.sideQueue = []
        },
        next: state => {
            const track = state.mainQueue.shift()
            if (track) {
                state.sideQueue.push(track)
            }




            if (state.mainQueue.length > 0) return

            if (state.repeat === RepeatMode.Queue) {
                state.mainQueue = [...state.sideQueue]
                state.sideQueue = []
            } else if (state.repeat === RepeatMode.False) {
                state.mainQueue = []
            }

            if (state.random) {
                let randomIndex = Math.floor(Math.random() * state.mainQueue.length)
                if (randomIndex === 0)
                    randomIndex = 1
                let temp = state.mainQueue[0]
                state.mainQueue[0] = state.mainQueue[randomIndex]
                state.mainQueue[randomIndex] = temp
            }
        },
        toggleRepeat: state => {
            switch (state.repeat) {
                case RepeatMode.False:
                    state.repeat = RepeatMode.One
                    break;
                case RepeatMode.One:
                    state.repeat = RepeatMode.Queue
                    break;
                default:
                    state.repeat = RepeatMode.False
                    break;
            }
        },
        toggleRandom: state => {
            state.random = !state.random
        }
    }
})

export const { popCurrent, push, clear, next, toggleRepeat, pushPlay, pushAll, toggleRandom } = trackQueueSlice.actions

export default trackQueueSlice.reducer