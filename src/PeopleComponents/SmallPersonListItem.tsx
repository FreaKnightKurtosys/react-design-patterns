import React from 'react';
import { IPerson } from '../data/people';

export interface ISmallPersonListItemProps {
	person: IPerson;
}

export const SmallPersonListItem: React.FC<ISmallPersonListItemProps> = (props) => {
	const { name, age } = props.person;
	return (
		<p>Name: {name}, Age: {age} years</p>
	);
}