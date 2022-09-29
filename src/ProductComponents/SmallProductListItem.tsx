import React from 'react';
import { IProduct } from '../data/products';

export interface ISmallProductListItem {
	product: IProduct;
}

export const SmallProductListItem: React.FC<ISmallProductListItem> = (props) => {
	const { name, price } = props.product;
	return (
		<p>Product: {name}, Price: {price}</p>
	);
}
