import { IconButton, Badge } from "@mui/material";
import React from "react";
import {HiShoppingCart} from 'react-icons/hi';
import { useNavigate } from "react-router-dom";


function CartWidget() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate (`/cart`)
  }


  return (
    <div>
      <Badge badgeContent={2} color="secondary">
        <IconButton arial-label="show cart items" color="inherit" onClick={handleNavigate}>
          <HiShoppingCart className="icon" size="25px" cursor="pointer"/>
        </IconButton>
      </Badge>
       
    </div>
    
  )
}

export default CartWidget;