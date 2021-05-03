import React from 'react';
import { Link } from 'react-router-dom';
import { CenteredRow, LogoImage } from './styles';

const Logo: React.FC = () => {
  return (
    <>
      <LogoImage />
      <CenteredRow>
        <Link to="/repo-list">Repo List</Link>
        <Link to="/search">Search Profiles</Link>
      </CenteredRow>
    </>
  );
};

export default Logo;
