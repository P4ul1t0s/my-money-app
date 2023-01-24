import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init, create, update, remove } from './billingCycleActions.js'
import ContentHeader from '../common/template/ContentHeader.jsx'
import Content from '../common/template/Content.jsx'
import Tabs from '../common/tab/Tabs.jsx'
import TabsHeader from '../common/tab/TabsHeader.jsx'
import TabHeader from '../common/tab/TabHeader.jsx'
import TabsContent from '../common/tab/TabsContent.jsx'
import TabContent from '../common/tab/TabContent.jsx'
import List from './BillingCycleList.jsx'
import Form from './BillingCycleForm.jsx'

class BillingCycle extends Component{
    componentWillMount(){
        this.props.init()
    }
    
    render(){
        return(
            <div>
                <ContentHeader title="Cicles de Pagamento" small="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List/>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} submitClass="primary" submitLabel="Incluir"/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.update} submitClass="info" submitLabel="Alterar"/>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} readOnly submitClass="danger" submitLabel="Excluir"/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispacth => bindActionCreators({ init, create, update, remove}, dispacth)
export default connect(null, mapDispatchToProps)(BillingCycle)