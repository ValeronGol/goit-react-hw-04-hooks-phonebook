import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConteinerForm, Label, Button, Input } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitData({
      name: this.state.name,
      number: this.state.number,
    });

    this.resetState();
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <ConteinerForm>
        <form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </form>
      </ConteinerForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
export default ContactForm;
