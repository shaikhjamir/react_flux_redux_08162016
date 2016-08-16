import React from 'react';

export const ItemListComponent = props =>
	<ul>{props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>;