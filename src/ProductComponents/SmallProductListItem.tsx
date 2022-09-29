import React from 'react';
import { IProduct } from '../data/products';
import { Wrapper } from '../StyledComponents/Wrapper';

export interface ISmallProductListItem {
	product: IProduct;
}

export const SmallProductListItem: React.FC<ISmallProductListItem> = (props) => {
	const { name, price } = props.product;
	return (
		<Wrapper>
			<p><b>Product</b>: {name}</p>
			<p><b>Price</b>: {price}</p>
		</Wrapper>
	);
}
