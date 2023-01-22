import React, { Component } from 'react'
import Content from '../commom/template/Content.jsx'
import ContentHeader from '../commom/template/ContentHeader.jsx'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard