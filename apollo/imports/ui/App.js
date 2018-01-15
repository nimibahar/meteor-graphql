import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const App = ({data}) => (
  //debugger;
  <div>
    <h1>{ data.hi }</h1>
  </div>
);

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(
  hiQuery
)(App);
