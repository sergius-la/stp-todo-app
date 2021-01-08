import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {

    newItem = 'Add task'

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input
                    className="form-control"
                    type="text" required
                    onChange={this.onLabelChange}
                    placeholder={this.newItem} 
                    value={this.state.label}/>
                <button
                    className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}