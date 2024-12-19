import { PROJECT_TYPE } from "./types"


export const setProject = (project: string) => ({
    type: PROJECT_TYPE,
    payload: { project }
})