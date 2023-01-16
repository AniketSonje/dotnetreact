import React, { Component,useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

const App = () => {

  //1 create useState
  const [persons, setPersons] = useState([]);

  //2 call api
  useEffect(() => {
      fetch("api/person/GetPersons")
          .then(response => { return response.json() })
          .then(responseJson => {

              setPersons(responseJson)
          });
  },[]);

  //3.- create div and table
  return (
      <div className="container">
          <h1>person</h1>
          <div className="row">
              <div className="col-sm-12">
                  <table className="table table-striped">
                      <thead>
                          <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>LastName</th>
                              <th>City</th>
                              <th>Salary</th>
                              <th>Gender</th>

                          </tr>
                      </thead>
                      <tbody>
                          {
                              persons.map((item) => (
                                  <tr key={item.id}>
                                      <td>{item.id}</td>
                                      <td>{ item.name}</td>
                                      <td>{item.lname}</td>
                                      <td>{item.city}</td>
                                      <td>{item.salary}</td>
                                      <td>{item.gender}</td>

                                  </tr>
                                  
                                  ))
                          }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}

export default App;