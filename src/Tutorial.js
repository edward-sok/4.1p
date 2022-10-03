import React from 'react'
import './Articles.css'



const Tutorial = (props) => 
{
    return <div className="column">
        <img src={props.avatar} alt="staff" />
        <h3> {props.articlename}</h3>
        <p>{props.position}</p>
        <table>
            <tr>
                <td>
            <img className="star" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/star-icon.png"></img>
            </td>
            <td>
            <h4>4.9</h4>
            </td>
            <td>
             <h4>{props.name}</h4>   
             </td>
            </tr>
        </table>
     
    </div>
}

export default Tutorial