import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' , email: ''};
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        this.setState({ email: ''});
        this.setState({ message: 'Merci, à bientôt.' });
        setTimeout(() => {
          this.setState({ message: '' });
        }, 3000);
      console.log(data);
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
      })
  }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChangeEmail}
          placeholder="Adresse email"
        />
        <input type="submit" value="S'inscrire" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
