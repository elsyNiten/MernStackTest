class BugList extends React.Component {
  render() {
    return (
      <section>
        <h1> Bug Tracker</h1>
        <div> Bug list here </div>
      </section>
    )
  }
}

ReactDOM.render(
  <BugList/>,
  document.getElementById('main')
)
