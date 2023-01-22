import React, { Component } from 'react'
import ContentHeader from '../commom/template/ContentHeader.jsx'
import Content from '../commom/template/Content.jsx'
import Tabs from '../commom/tab/Tabs.jsx'
import TabsHeader from '../commom/tab/TabsHeader.jsx'
import TabsContent from '../commom/tab/TabsContent.jsx'

export default class BillingCycle extends Component{
    render(){
        return(
            <div>
                <ContentHeader title="Cicles de Pagamento" small="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            AA
                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}