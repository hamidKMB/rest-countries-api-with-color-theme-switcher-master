import regionTypes from "./region.types";

const regionAction = (event) => ({
    type: regionTypes.SELECTED_REGION,
    payload: event.target.value
})

export const emptyRegion = () => ({
    type: regionTypes.DELETE_REGION
})

export default regionAction