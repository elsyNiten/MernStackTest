class BugList extends React.Component {
  render() {
    return React.createElement(
      'section',
      null,
      React.createElement(
        'h1',
        null,
        ' Bug Tracker'
      ),
      React.createElement(
        'div',
        null,
        ' Bug list here '
      )
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));