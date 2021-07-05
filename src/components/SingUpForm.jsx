
import React, { Component } from 'react';

class SignUpForm extends Component {
  state = {
    login: '',
  };

  /*
   * Отвечает за обновление состояния
   */
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  /*
   * Вызывается при отправке формы
   */
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);

    // Проп который передается форме для вызова при сабмите
    // this.props(this.state.login);
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}
export default SignUpForm;