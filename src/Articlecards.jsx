import React from 'react'
import Articles from './Articles'
import faker from 'faker'
import './Articles.css'
import Articleslist from './Articleslist.js'
import { Button } from 'semantic-ui-react'


const Articlecards = () => 
{
    return <div className="row">
    {Articleslist.map((staff)=>
 <Articles 
key = {staff.key}
avatar = {staff.avatar}
position = {staff.position}
name = {staff.name}
articlename = {staff.articlename}
/>
)}
    </div>
}

export default Articlecards