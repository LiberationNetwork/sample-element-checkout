export const addItem = (reqBody) => ({
    type: 'ADD_ITEM',
    reqBody: reqBody
})

export const toggleDrawer = () => ({
    type: 'TOGGLE_DRAWER',
})

export const lessItem = (reqBody) => ({
    type: 'LESS_ITEM',
    reqBody: reqBody
})