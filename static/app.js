var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const bugliste = [{
  status: 'Open',
  priority: 'P1',
  owner: 'Jason',
  title: 'app crashes on open'
}, {
  status: 'New',
  priority: 'P2',
  owner: 'AC',
  title: 'bordure ne s\'affiche pas sur les tableaux'
}];

const tableBorder = {
  "border-collapse": "collapse",
  "border": "1px solid black"
};

const border1 = {
  border: "1px solid black"
};

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
        React.createElement(BugTable, { rows: this.props.bugs }),
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
      'table',
      { style: tableBorder },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          { style: border1 },
          React.createElement(
            'td',
            { style: border1 },
            'Id'
          ),
          React.createElement(
            'td',
            { style: border1 },
            'Status'
          ),
          React.createElement(
            'td',
            { style: border1 },
            'Priority'
          ),
          React.createElement(
            'td',
            { style: border1 },
            'Owner'
          ),
          React.createElement(
            'td',
            { style: border1 },
            'Title'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        this.props.rows.map((bug, index) => {
          let props = Object.assign(Object.assign({ id: parseInt(index) + 1 }, bug));
          return React.createElement(BugRow, _extends({ key: index }, props));
        })
      )
    );
  }
}

class BugRow extends React.Component {
  render() {
    return React.createElement(
      'tr',
      { style: border1 },
      React.createElement(
        'td',
        { style: border1 },
        this.props.id
      ),
      React.createElement(
        'td',
        { style: border1 },
        this.props.status
      ),
      React.createElement(
        'td',
        { style: border1 },
        this.props.priority
      ),
      React.createElement(
        'td',
        { style: border1 },
        this.props.owner
      ),
      React.createElement(
        'td',
        { style: border1 },
        this.props.title
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

ReactDOM.render(React.createElement(BugList, { bugs: bugliste }), document.getElementById('main'));