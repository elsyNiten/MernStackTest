var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const tableBorder = {
  "borderCollapse": "collapse",
  "border": "1px solid black"
};

const border1 = {
  border: "1px solid black"
};

class BugList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bugs: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/bugs').then(res => {
      return res.json();
    }).then(res => {
      this.setState({
        bugs: res
      });
    });
  }

  addBug(bug) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const init = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(bug),
      mode: 'cors',
      cache: 'default'
    };

    fetch('http://localhost:3000/api/bugs', init).then(res => {
      return res.json();
    }).then(serverBug => {

      let bugsClone = this.state.bugs.slice();
      bugsClone.push(serverBug);

      this.setState({
        bugs: bugsClone
      });
    });
  }

  render() {
    //console.log("render : buglist");
    return React.createElement(
      "section",
      null,
      React.createElement(
        "h1",
        null,
        " Bug Tracker"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(BugFilter, null),
        React.createElement("hr", null),
        React.createElement(BugTable, { bugs: this.state.bugs }),
        React.createElement("hr", null),
        React.createElement(BugAdd, { ajouterBug: bug => this.addBug(bug) })
      )
    );
  }
}

class BugFilter extends React.Component {
  render() {
    //console.log("render : bugfilter");
    return React.createElement(
      "section",
      null,
      React.createElement(
        "h2",
        null,
        "Bug Filter"
      )
    );
  }
}

class BugTable extends React.Component {
  render() {
    //console.log("render : bugTable");
    return React.createElement(
      "table",
      { style: tableBorder },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          { style: border1 },
          React.createElement(
            "td",
            { style: border1 },
            "Id"
          ),
          React.createElement(
            "td",
            { style: border1 },
            "Status"
          ),
          React.createElement(
            "td",
            { style: border1 },
            "Priority"
          ),
          React.createElement(
            "td",
            { style: border1 },
            "Owner"
          ),
          React.createElement(
            "td",
            { style: border1 },
            "Title"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        this.props.bugs.map((bug, index) => {
          let props = Object.assign(Object.assign({ id: parseInt(index) + 1 }, bug));
          return React.createElement(BugRow, _extends({ key: index }, props));
        })
      )
    );
  }
}

class BugRow extends React.Component {
  render() {
    //console.log("render : bugRow");
    return React.createElement(
      "tr",
      { style: border1 },
      React.createElement(
        "td",
        { style: border1 },
        this.props.id
      ),
      React.createElement(
        "td",
        { style: border1 },
        this.props.status
      ),
      React.createElement(
        "td",
        { style: border1 },
        this.props.priority
      ),
      React.createElement(
        "td",
        { style: border1 },
        this.props.owner
      ),
      React.createElement(
        "td",
        { style: border1 },
        this.props.title
      )
    );
  }
}

class BugAdd extends React.Component {
  clickHandler() {
    const form = document.forms.addForm;

    const newBug = {
      status: 'New',
      priority: form.priority.value || P3,
      owner: form.owner.value || 'Uknown',
      title: form.title.value || "nouveau bug"
    };

    this.props.ajouterBug(newBug);
  }

  render() {
    return React.createElement(
      "section",
      null,
      React.createElement(
        "form",
        { id: "addForm", name: "addForm" },
        React.createElement(
          "label",
          null,
          "owner :",
          React.createElement("input", { type: "text", name: "owner" })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "title :",
          React.createElement("input", { type: "text", name: "title" })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Priorit\xE9 :",
          React.createElement(
            "select",
            { name: "priority" },
            React.createElement(
              "option",
              { value: "P1" },
              "P1"
            ),
            React.createElement(
              "option",
              { value: "P2" },
              "P2"
            ),
            React.createElement(
              "option",
              { value: "P3" },
              "P3"
            )
          )
        ),
        React.createElement("br", null),
        React.createElement("input", { type: "button", value: "ajouter bug", onClick: () => this.clickHandler() })
      )
    );
  }
}

ReactDOM.render(
//console.log("render : first");
React.createElement(BugList, null), document.getElementById('main'));