class BugList extends React.Component {
  render() {
    return (
      <section>
        <h1> Bug Tracker</h1>
        <div>
          <BugFilter />
          <BugTable />
          <BugAdd />
        </div>
      </section>
    )
  }
}

class BugFilter extends React.Component {
  render() {
    return(
      <section>
        <h2>Bug Filter</h2>
      </section>
    )
  }
}

class BugTable extends React.Component {
  render() {
    return(
      <section>
        <h2>List of all Bug</h2>
      </section>
    )
  }
}

class BugAdd extends React.Component {
  render() {
    return (
      <section>
        <h2>Form to add new Bugs</h2>
      </section>
    )
  }
}

ReactDOM.render(
  <BugList/>,
  document.getElementById('main')
)
