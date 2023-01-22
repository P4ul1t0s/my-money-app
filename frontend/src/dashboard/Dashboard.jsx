import React, { Component } from 'react'
import Content from '../commom/template/Content.jsx'
import ContentHeader from '../commom/template/ContentHeader.jsx'
import ValueBox from '../commom/widget/ValueBox.jsx'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank' value='R$10' text='Total de Crédito'/>
                    <ValueBox cols='12 4' color='red' icon='credit-card' value='R$10' text='Total de Débito'/>
                    <ValueBox cols='12 4' color='blue' icon='money' value='R$0' text='Valor Consolidado'/>
                </Content>
            </div>
        )
    }
}

export default Dashboard