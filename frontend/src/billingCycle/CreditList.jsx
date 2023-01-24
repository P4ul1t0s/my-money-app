import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/Grid.jsx'
import Input from '../common/form/Input.jsx'

class CreditList extends Component{
    renderRows(){
        return(
            <tr>
                <td><Field
                    name="credits[1].name"
                    component={Input}
                    placeholder="Inform o nome"
                    readOnly={this.props.readOnly}
                /></td>
                <td><Field
                    name="credits[1].value"
                    component={Input}
                    placeholder="Inform o valor"
                    readOnly={this.props.readOnly}
                /></td>
                <td></td>
            </tr>
        )
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList