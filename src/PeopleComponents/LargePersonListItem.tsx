import React from 'react';
import { Wrapper } from '../StyledComponents/Wrapper';
import { IPerson } from '../data/people';

export interface ILargePersonListItemProps {
	person: IPerson;
}

export const LargePersonListItem: React.FC<ILargePersonListItemProps> = (props) => {
	const { name, age, hairColor, hobbies } = props.person;
	return(
		<Wrapper>
			<h2>{name}</h2>
			<p>Age: {age} years</p>
			<p>Hair Color: {hairColor}</p>
			<h3>Hobbies:</h3>
			<ul>
				{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
			</ul>
		</Wrapper>
	);
}
