import React, { Component } from 'react'
import Content from '../common/template/Content.jsx'
import ContentHeader from '../common/template/ContentHeader.jsx'
import ValueBox from '../common/widget/ValueBox.jsx'
import axios from "axios";
const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component{
    constructor(props){
        super(props)
        this.state = {credit: 0, debt: 0}
    }

    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(resp => this.setState(resp.data))
    }

    render(){
        const {credit, debt} = this.state

        return(
            <div>
                <ContentHeader title="Dashboard" small="Versão 2.0"/>
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Crédito'/>
                    <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débito'/>
                    <ValueBox cols='12 4' color='purple' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado'/>
                </Content>
            </div>
        )
    }
}