import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tab/tabActions.js'
import { create } from './billingCycleActions.js'
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
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
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
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <h1>Alterar</h1>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <h1>Excluir</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispacth => bindActionCreators({selectTab, showTabs, create}, dispacth)
export default connect(null, mapDispatchToProps)(BillingCycle)