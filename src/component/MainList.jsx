import React from 'react';

const MainList = (props) => {
  return (
    <li key={props.id}>
      <a href={props.url}>{props.title}</a>
    </li>
  );
};

export default MainList;
