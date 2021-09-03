import regionTypes from "./region.types";

const regionAction = (event) => ({
    type: regionTypes.SELECTED_REGION,
    payload: event.target.value
})

export default regionAction
