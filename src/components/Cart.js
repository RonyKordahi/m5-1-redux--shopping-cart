import React from 'react'
import styled from "styled-components"
import { useSelector } from "react-redux"

import CartItem from "./CartItem"
import { getStoreItemArray } from "../reducers"
import Button from "./Button"

function Cart() {
    const storeItems = useSelector(getStoreItemArray);
    let totalPrice = 0;

    storeItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
    })

    return (
        <CartWrapper>
            Your Cart
            <p>{storeItems.length} {!storeItems.length ? "Items" : storeItems.length > 1 ? "Items" : "Item"}</p>
                {storeItems.map((item) => {
                    return <CartItem key={Math.random() * 1000000000000} item={item} />
                })}
            <PurchaseWrapper>
                Total: ${totalPrice / 100}
                <Button>Purchase</Button>
            </PurchaseWrapper>
        </CartWrapper>
    )
}

const PurchaseWrapper = styled.div `
    position: absolute;
    bottom: 0;
`

const CartWrapper = styled.div `
    position: relative;
    height: 100%;
`

export default Cart
