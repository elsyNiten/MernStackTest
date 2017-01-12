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
        React.createElement(BugFilter, null),
        React.createElement(BugTable, null),
        React.createElement(BugAdd, null)
      )
    );
  }
}

class BugFilter extends React.Component {
  render() {
    return React.createElement(
      'section',
      null,
      React.createElement(
        'h2',
        null,
        'Bug Filter'
      )
    );
  }
}

class BugTable extends React.Component {
  render() {
    return React.createElement(
      'section',
      null,
      React.createElement(
        'h2',
        null,
        'List of all Bug'
      )
    );
  }
}

class BugAdd extends React.Component {
  render() {
    return React.createElement(
      'section',
      null,
      React.createElement(
        'h2',
        null,
        'Form to add new Bugs'
      )
    );
  }
}

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));