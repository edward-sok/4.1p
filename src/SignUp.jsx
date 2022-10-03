import React from 'react'
import { Table  } from 'semantic-ui-react'
import './SignUp.css'
import TextField from "@mui/material/TextField";


function sayHello() {
    alert('You clicked me!');
  }

const TopBar = () => (
       <table>
        <tr>
            <td className="signupdaily">
                SIGN UP FOR OUR DAILY INSIDER
            </td>
            <td className="Searchsu"> 
   
      <div className="email">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Email"
        />
      </div>
            </td>
            <td>
            <button className="subbutton" onClick={sayHello}>Subscribe</button>

            </td>
        </tr>

       </table>



)

export default TopBar
