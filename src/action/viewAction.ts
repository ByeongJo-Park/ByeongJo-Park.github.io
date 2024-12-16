import { VIEW_TYPE } from "./types"


export const setView = (view: string) => ({
    type: VIEW_TYPE,
    payload: { view }
})