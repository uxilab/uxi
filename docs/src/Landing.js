import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle, PageSubTitle } from 'uxi/Page';
import { SimpleList, ListItem } from 'uxi/List';

const Landing = props => {
  return (
    <div>
      <h1>Welcome</h1>

      <br />

      <PageTitle>UXI - Build UI faster</PageTitle>

      <br /><br />

      <Link to="/get-started" >
        Get Started
      </Link>
    </div>
  )
}

export default Landing;
