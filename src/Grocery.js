
import React from 'react';

export const Grocery = ({name}) => {
  return (
    <h3>{name}</h3>
  )
}

Grocery.defaultProps = {
  name: 'Banana'
}
