import React, { Component } from 'react';
import "./App.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import EmployeeInfo from './components/EmployeeInfo';
import SortAPI from './utils/SortAPI';

export default class APP extends Component {
  state = {
    loading: true,
    people: [],
    pressedPerson: "",
    error: false,
  };

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(data => {
        const sortEmployeeList = SortAPI(data);
        this.setState({ people: sortEmployeeList, loading: false });
      })
      .catch(error => {
        this.setState({ error: true, loading: false })
      })

  }
  handleClick(personID) {
    this.state.pressedPerson === personID ? this.setState({ pressedPerson: "" }) :
      this.setState({ pressedPerson: personID });
  }
  render() {
    return (
      <>
        <div className="container">
          <NavBar />
          <div className="windowedScreen">
            {this.state.loading ? (
              <div className="notFetchedYetText">Håller på hämta anställda</div>
            ) :
              this.state.error === true ? (
                <div className="errorMessage">Kunde inte hämta API:n. Prova uppdatera sidan</div>
              ) :
                !this.state.people.length > 0 ? (
                  <div className="errorMessage">Finns inga personer i API:n</div>
                ) :
                  this.state.people.map((person) => (
                    <div className="employeePopUp" key={person.id}>
                      <button
                        className="employeeButton"
                        onClick={() => this.handleClick(person.id)}
                      >
                        {person.employee_name}{" "}
                      </button>
                      <EmployeeInfo person={person} pressedPerson ={this.state.pressedPerson}/>
                    </div>
                  ))
            }
          </div>
            <Footer />
        </div>
      </>
    );
  }
}