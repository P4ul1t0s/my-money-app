import React from 'react'
import '../commom/template/dependencies'
import Footer from '../commom/template/Footer.jsx'
import Header from '../commom/template/Header.jsx'
import SideBar from '../commom/template/SideBar.jsx'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            <h1>Conteúdo</h1>
        </div>
        <Footer/>
    </div>
)