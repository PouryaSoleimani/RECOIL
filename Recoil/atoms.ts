import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

//^ATOMS
export const COUNT = atom({ key: "COUNT", default: 0, effects_UNSTABLE: [persistAtom], })
export const TODOS = atom({ key: "TODOS", default: [], effects_UNSTABLE: [persistAtom], })