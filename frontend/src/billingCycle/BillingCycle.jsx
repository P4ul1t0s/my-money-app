import React, { Component } from 'react'
import ContentHeader from '../commom/template/ContentHeader.jsx'
import Content from '../commom/template/Content.jsx'
import Tabs from '../commom/tab/Tabs.jsx'
import TabsHeader from '../commom/tab/TabsHeader.jsx'
import TabsContent from '../commom/tab/TabsContent.jsx'
import TabHeader from '../commom/tab/TabHeader.jsx'

export default class BillingCycle extends Component{
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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}