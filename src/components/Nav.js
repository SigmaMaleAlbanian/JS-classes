import React from "react";
import './../styles/nav.css'

function Nav({arr, third}) {

    return (
      <ul className="nav">
        {/* {arr.map(e => {
            return <li>{e.id}</li>
        })} */}
        <li>{arr[0].id}</li>
        <li>{arr[1].id}</li>
        <li>{arr[2].id}</li>
        <li>{third}</li>
      </ul>
    )
}

export default Nav;