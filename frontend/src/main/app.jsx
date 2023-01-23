import React from 'react'
import '../common/template/dependencies'
import Footer from '../common/template/Footer.jsx'
import Header from '../common/template/Header.jsx'
import SideBar from '../common/template/SideBar.jsx'
import Routes from './Routes.jsx'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            <Routes/>
        </div>
        <Footer/>
    </div>
)