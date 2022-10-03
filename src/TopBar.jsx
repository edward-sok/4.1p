import React from 'react'
import { Table  } from 'semantic-ui-react'
import './TopBar.css'
import TextField from "@mui/material/TextField";


function sayHello() {
    alert('You clicked me!');
  }

const TopBar = () => (
       <table>
        <tr>
            <td className="Dev">
                DEV@Deakin
            </td>
            <td className="Search"> 
   
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
            </td>
            <td>
            <button className="postbutton" onClick={sayHello}>Post</button>

            </td>
            <td>
            <button className="postbutton" onClick={sayHello}>Login</button>
            </td>
        </tr>

       </table>



)

export default TopBar
