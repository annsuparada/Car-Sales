import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carOnProps} alt={props.carAltOnProps} />
      </figure>
      <h2>{props.carNameOnProps}</h2>
      <p>Amount: ${props.carPriceOnProps}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log('Header', state);
  return {
    carOnProps: state.car.image,
    carAltOnProps: state.car.name,
    carNameOnProps: state.car.name,
    carPriceOnProps: state.car.price,
  };
};

export default connect(
  mapStateToProps,
  {}
) (Header);



