import React from 'react'
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { removeItem, updateItem} from "../actions";

function CartItem({item}) {

    const dispatch = useDispatch();

    return (
        <ItemWrapper>
            <RemoveItem onClick={() => {
                dispatch(removeItem(item))
            }}>
                X
            </RemoveItem>
            <p>{item.title}</p>
            <p>Quantity: <CartInput value={item.quantity} 
            onChange={(event) => {
                dispatch(updateItem(item, event.target.value));
            }} /></p>
        </ItemWrapper>
    )
}

const CartInput = styled.input `
    background: none;
    border: none;
    color: white;
    border-bottom: solid white 3px;
    text-align: center;
    width: 20px;
`

const ItemWrapper = styled.div `
    border: 1px dotted whitesmoke;
    margin-bottom: 10px;
    position: relative;
    width: 85%;
`

const RemoveItem = styled.span `
    position: absolute;
    top: 0;
    right: 0;
`

export default CartItem
