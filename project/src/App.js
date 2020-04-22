import React from 'react';
//import './App.css';
import AddContact from './components/AddContact';
import ViewProfile from './components/ViewProfile';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      profileName: "",
      profileCount: 0
    };

    this.updateList = this.updateList.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updateAll = this.updateAll.bind(this);
  }

  updateList() {
    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "dolbey"}})
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      this.setState({contacts: data.contacts});
    })
  }

  updateProfile() {
    window.fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "dolbey"}})
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      this.setState({profileName: data.name, profileCount: data.count});
    })
  }

  updateAll() {
    this.updateList();
    this.updateProfile();
  }

  deleteContact(i) {
    window.fetch("http://plato.mrl.ai:8080/contacts/remove", {
      method: 'POST',
      body: JSON.stringify({ position: i }),
      headers: {API: "dolbey", "Content-type": "application/json"}
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      this.updateAll();
    })
  }

  componentDidMount() {
    this.updateAll();
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="seven columns">
            <h2>Contacts</h2>
            {this.state.contacts.map((value, index) => {
              return(
                <div className="row" key={index}>
                  <div className="u-pull-left">
                    <p className="contactName">{value.name}</p>
                    <p>{value.number}</p>
                  </div>
                  <i className="material-icons icon-button u-pull-right" onClick={() => this.deleteContact(index)}>delete</i>
                </div>
              );
            })}
          </div>
          <div className="five columns">
            <div className="row">
              <ViewProfile updateAll={this.updateAll} name={this.state.profileName} count={this.state.profileCount}/>
            </div>
            <hr></hr>
            <div className="row">
              <AddContact updateAll={this.updateAll}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
