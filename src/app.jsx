import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import store from './store/index';

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

const mapStateToProps = state => ({ data: state.message });

const List = connect(mapStateToProps)(MessageList);

class MessageForm extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

ReactDOM.render(<MessageForm />, document.querySelector('#app'));
