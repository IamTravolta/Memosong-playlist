import React from "react"

function Song(props) {
    return (
        <tr className="listed-song" value={props.title} id={props.id}>
            <td><button class="remover" onClick={() => props.handleClick(props.id)}>X</button>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
        </tr>

    )
}
export default Song