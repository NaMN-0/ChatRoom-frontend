import React, { useState, useEffect } from "react";

import { fetchUsers } from '../actions/users'

import {connect} from 'react-redux';

function Users(props) {
	const handleClick = () => {
    props.dispatch(fetchUsers());
	}

  return (
    <div>
			<div>
				{props.loading ? (<p>***</p>) : (<p></p>)}
				{props.users.map(user => {
					return (
						<div key={user.id}>
							<span>{user.name}</span>
						</div>
					);
				})}
			</div>
			<button onClick={() => {handleClick()}}>Get</button>
    </div>
  );
}

function mapStateToProps(state){
	console.log(state);
  return {
    ...state,
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);