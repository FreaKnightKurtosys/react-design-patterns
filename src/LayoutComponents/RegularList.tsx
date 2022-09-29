import React, { FC } from 'react';

export interface IRegularListProps {
	items: any[];
	resourceName: string;
	itemComponent: FC<any>;
}

export const RegularList: React.FC<IRegularListProps> = (props) => {
	const { items, resourceName, itemComponent: ItemComponent } = props;
	return (
		<>
			{items.map((item, i) => (
				<ItemComponent key={`regularList-item-${i}`} {...{[resourceName]: item}} />
			))}
		</>
	);
}
