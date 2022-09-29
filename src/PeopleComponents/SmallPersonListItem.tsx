import React from 'react';
import { IPerson } from '../data/people';
import { Wrapper } from '../StyledComponents/Wrapper';

export interface ISmallPersonListItemProps {
	person: IPerson;
}

export const SmallPersonListItem: React.FC<ISmallPersonListItemProps> = (props) => {
	const { name, age } = props.person;
	return (
		<Wrapper>
			<p><b>Name</b>: {name}</p>
			<p><b>Age</b>: {age} years</p>
		</Wrapper>
	);
}