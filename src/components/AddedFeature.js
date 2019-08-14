import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFeature } from '../actions/buttonAction'

const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => dispatch(removeFeature(props.feature))}>x</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;


