import React from 'react';
import { Wrapper } from '../StyledComponents/Wrapper';
import { IProduct } from '../data/products';

export interface ILargeProductListItemProps {
	product: IProduct
}

export const LargeProductListItem: React.FC<ILargeProductListItemProps> = (props) => {
	const { name, price, description, rating } = props.product;
	return (
		<Wrapper>
			<h3>{name}</h3>
			<p>{price}</p>
			<h3>Description:</h3>
			<p>{description}</p>
			<p>Average Rating: {rating}</p>
		</Wrapper>
	);
}