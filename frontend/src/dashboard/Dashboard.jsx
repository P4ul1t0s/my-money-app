import React, { Component } from 'react'
import { connect, Connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardActions.js'
import Content from '../common/template/Content.jsx'
import ContentHeader from '../common/template/ContentHeader.jsx'
import ValueBox from '../common/widget/ValueBox.jsx'
import Row from '../common/layout/Row.jsx'

class Dashboard extends Component{
    componentWillMount(){
        this.props.getSummary()
    }

    render(){
        const {credit, debt} = this.props.summary

        return(
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Crédito'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débito'/>
                        <ValueBox cols='12 4' color='purple' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)