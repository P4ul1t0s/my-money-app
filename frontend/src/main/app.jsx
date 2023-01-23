import '../common/template/dependencies'
import React from 'react'
import Messages from '../common/msg/Messages.jsx'
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
        <Messages/>
    </div>
)