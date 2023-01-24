import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from 'redux-form'
import { init } from "./billingCycleActions.js";
import LabelAndInput from "../common/form/LabelAndInput.jsx";
import CreditList from "./CreditList.jsx";

class BillingCycleForm extends Component{
    render(){
        const { handleSubmit, readOnly } = this.props

        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name="name"
                        component={LabelAndInput}
                        label='Nome'
                        cols="12 4"
                        readOnly={readOnly}
                        placeholder="Informe o nome"
                    />
                    <Field 
                        name="month"
                        component={LabelAndInput}
                        label='Mês'
                        cols="12 4"
                        readOnly={readOnly}
                        placeholder="Informe o mês"
                    />
                    <Field 
                        name="year"
                        component={LabelAndInput}
                        label='Ano'
                        cols="12 4"
                        readOnly={readOnly}
                        placeholder="Informe o ano"
                    />
                    <CreditList cols='12 6'/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)