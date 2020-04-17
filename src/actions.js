export const addItem = item => ({
    type: `ADD_ITEM`,
    item
})

export const removeItem = item => ({
    type: `REMOVE_ITEM`,
    item
})

export const updateItem = (item, quantity) => ({
    type: `UPDATE_QUANTITY`,
    item,
    quantity
})