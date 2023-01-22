import React, { Component } from 'react'
import ContentHeader from '../commom/template/ContentHeader.jsx'
import Content from '../commom/template/Content.jsx'

export default class BillingCycle extends Component{
    render(){
        return(
            <div>
                <ContentHeader title="Cicles de Pagamento" small="Cadastro"/>
                <Content>
                    Ciclos de Pagamento
                </Content>
            </div>
        )
    }
}