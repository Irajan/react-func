import React from 'react';

export default function Profile(props) {
	return (
		<div>
			<h1>{`${props.name.title}. ${props.name.first} ${props.name.last}`}</h1>
			<img alt="Profile" src={props.image}></img>
			<br />
			<button onClick={props.onClick}>Get new user.</button>
		</div>
	);
}
