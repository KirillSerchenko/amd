import React from 'react';
import SideNav from '../SideNav/SideNav'
import './App.css'
import amdocsDash from '../../resources/amdocsDash.jpg'
import Tables from '../Tables/Tables'
import Charts from '../Charts/Charts'

export default () =>
<>
    <img alt='amdocsDash' src={amdocsDash} width='150px' height='80px' style={{ opacity:'0.6',position:'fixed',bottom:'0',right:'0'}} />
    <Tables />
    <Charts />
    <SideNav />
</>                  

 
