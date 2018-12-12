import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { store, addMessage } from './store/index';

/* eslint max-len: ["error", { "code": 150 }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class MessageList extends React.Component {
  render() {
    const messages = this.props.data.map(item => <li key={item.key}>{item.name}: {item.message}</li>);
    return (
      <ul>
        {messages}
      </ul>
    );
  }
}

MessageList.propTypes = {
  data: PropTypes.array.isRequired,
};

// mapStateToProps
const mapStateToProps = state => ({ data: state.message });

const List = connect(mapStateToProps)(MessageList);

class InputMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.changeState = this.changeState.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  changeState(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  clearMessage() {
    this.setState({ name: '', message: '' });
  }

  submitMessage() {
    this.props.addMessage({
      name: this.state.name,
      message: this.state.message,
    });

    this.clearMessage();
  }

  render() {
    return (
      <div>
        暱稱: <input name="name" value={this.state.name} onChange={this.changeState} />
        <br />
        訊息: <textarea name="message" value={this.state.message} onChange={this.changeState}></textarea>
        <br />
        <button onClick={this.submitMessage}>送出留言</button>
      </div>
    );
  }
}

InputMessage.propTypes = {
  addMessage: PropTypes.func,
};

// mapDispatchToProps
const mapDispatchToProps = dispatch => ({ addMessage(message) { dispatch(addMessage(message)); } });

const Input = connect(null, mapDispatchToProps)(InputMessage);

class MessageForm extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Input />
        <List />
      </Provider>
    );
  }
}

ReactDOM.render(<MessageForm />, document.querySelector('#app'));
