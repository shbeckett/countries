import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Filtered from "./Filtered";

export default function Driving() {
    const [error, setError] = useState(null);
    const [side, setSide] = useState("")

    function handleClick(arg) {
        setSide(arg);
        return side
      }
    return (
            <>
            {/* nb see below if the method is called on page load,
             a setState action is triggered and the component re-renders infinitely
             Now we are passing a function to the event handler and not calling
              the setCounter method on page load */}
            <Button onClick={() => handleClick("left")}>Where can I drive on the left?</Button> 
            <Button onClick={() => handleClick("right")}>Where can I drive on the right?</Button>
            <Filtered side={side} />
            </>
        )
    }