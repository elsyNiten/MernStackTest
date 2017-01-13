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
  "borderCollapse" : "collapse",
  "border" : "1px solid black"
};

const border1 = {
  border : "1px solid black"
};

class BugList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      bugs : bugliste
    };
  }

  addBug(bug) {
    let bugsClone = this.state.bugs.slice();
    bugsClone.push(bug);

    this.setState({
        bugs: bugsClone
    })
  }

  render () {
    //console.log("render : buglist");
    return (
      <section>
        <h1> Bug Tracker</h1>
        <div>
          <BugFilter />
          <hr/>
          <BugTable bugs={this.state.bugs}/>
          <hr/>
          <BugAdd  ajouterBug={(bug) => this.addBug(bug)}/>
        </div>
      </section>
    )
  }
}

class BugFilter extends React.Component {
  render() {
    //console.log("render : bugfilter");
    return(
      <section>
        <h2>Bug Filter</h2>
      </section>
    )
  }
}

class BugTable extends React.Component {
  render() {
    //console.log("render : bugTable");
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
            this.props.bugs.map((bug, index) => {
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
    //console.log("render : bugRow");
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
  clickHandler() {
    const form = document.forms.addForm;

    const newBug = {
      status : 'New',
      priority : form.priority.value || P3,
      owner : form.owner.value || 'Uknown',
      title : form.owner.title || "nouveau bug"
    };

    this.props.ajouterBug(newBug);
  }

  render() {
    return (
      <section>
        <form name="addForm">
          <label>
            owner :
            <input type="text" name="owner"/>
          </label><br/>
          <label>
            title :
            <input type="text" name="title"/>
          </label><br/>
          <label>
            Priorité :
            <select name="priority">
              <option  value="P1">P1</option>
              <option  value="P2">P2</option>
              <option  value="P3">P3</option>
            </select>
          </label><br/>

          <input type="button" value="ajouter bug" onClick={() => this.clickHandler()}/>
        </form>
      </section>
    )
  }
}

ReactDOM.render(
  //console.log("render : first");
  <BugList />,
  document.getElementById('main')
)
