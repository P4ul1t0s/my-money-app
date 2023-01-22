import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Connect } from 'react-redux'
import { selectTab, showTabs } from '../commom/tab/tabActions.js'
import ContentHeader from '../commom/template/ContentHeader.jsx'
import Content from '../commom/template/Content.jsx'
import Tabs from '../commom/tab/Tabs.jsx'
import TabsHeader from '../commom/tab/TabsHeader.jsx'
import TabHeader from '../commom/tab/TabHeader.jsx'
import TabsContent from '../commom/tab/TabsContent.jsx'
import TabContent from '../commom/tab/TabContent.jsx'
import List from './BillingCycleList.jsx'

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
                                <h1>Incluir</h1>
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

const mapDispatchToProps = dispacth => bindActionCreators({selectTab, showTabs}, dispacth)
export default connect(null, mapDispatchToProps)(BillingCycle)