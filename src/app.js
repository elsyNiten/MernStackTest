const bugliste = [
  {
    status : 'Open',
    priority : 'P1',
    owner : 'Jason',
    title : 'app crashes on open'
  },
  {
    status : 'New',
    priority : 'P2',
    owner : 'AC',
    title : 'bordure ne s\'affiche pas sur les tableaux'
  }
];

const tableBorder = {
  "border-collapse" : "collapse",
  "border" : "1px solid black"
};

const border1 = {
  border : "1px solid black"
};

class BugList extends React.Component {
  render() {
    return (
      <section>
        <h1> Bug Tracker</h1>
        <div>
          <BugFilter />
          <BugTable rows={this.props.bugs}/>
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
      <table style={tableBorder}>
        <thead>
          <tr style={border1}>
            <td style={border1}>Id</td>
            <td style={border1}>Status</td>
            <td style={border1}>Priority</td>
            <td style={border1}>Owner</td>
            <td style={border1}>Title</td>
          </tr>
        </thead>
        <tbody>
          {
            this.props.rows.map((bug, index) => {
              let props = Object.assign(Object.assign({id:parseInt(index)+1},bug ));
              return (<BugRow  key={index} {...props}/>)
            })
          }
        </tbody>
      </table>
    )
  }
}

class BugRow extends React.Component {
  render() {
    return(
      <tr style={border1}>
        <td style={border1}>{this.props.id}</td>
        <td style={border1}>{this.props.status}</td>
        <td style={border1}>{this.props.priority}</td>
        <td style={border1}>{this.props.owner}</td>
        <td style={border1}>{this.props.title}</td>
      </tr>
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
  <BugList bugs={bugliste}/>,
  document.getElementById('main')
)
