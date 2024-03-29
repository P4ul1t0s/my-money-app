import React, { Component } from 'react'
import Grid from '../common/layout/Grid.jsx'
import ValueBox from '../common/widget/ValueBox.jsx'

export default ({ credit, debt }) => (
    <Grid cols='12 4'>
        <fieldset>
            <legend>Resumo</legend>
               <ValueBox
                    cols='12 4'
                    color='green'
                    icon='bank'
                    value={`R$${credit}`}
                    text='Total de Créditos'
                />
               <ValueBox
                    cols='12 4'
                    color='red'
                    icon='credit-card'
                    value={`R$${debt}`}
                    text='Total de Débitos'
                />
               <ValueBox
                    cols='12 4'
                    color='purple'
                    icon='money'
                    value={`R$${(credit - debt).toFixed(2)}`}
                    text='Valor Consolidado'
                />
        </fieldset>
    </Grid>
)