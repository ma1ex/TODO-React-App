import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      // Т.к. стэйт не зависит от предыдущего значения, можно передать значение напрямую
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    // Отмена перезагрузки страницы
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    // Очистка поля после сабмита
    this.setState({
      label: "",
    });
  };

  //
  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
