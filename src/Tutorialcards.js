import React from 'react'
import faker from 'faker'
import './Articles.css'
import Tutorialist from './Tutorialist'
import { Button } from 'semantic-ui-react'
import Tutorial from './Tutorial'



const Tutorialcards = () => 
{
    return <div className="row">
    {Tutorialist.map((staff)=>
 <Tutorial
key = {staff.key}
avatar = {staff.avatar}
articlename = {staff.articlename}
position = {staff.position}
name = {staff.name}

/>
)}

    </div>
}

export default Tutorialcards