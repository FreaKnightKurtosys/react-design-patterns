import React, { FC } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
	display: flex;
`;

export interface IRegularListProps {
	items: any[];
	resourceName: string;
	itemComponent: FC<any>;
}

export const RegularList: React.FC<IRegularListProps> = (props) => {
	const { items, resourceName, itemComponent: ItemComponent } = props;
	return (
		<ListWrapper>
			{items.map((item, i) => (
				<ItemComponent key={`regularList-item-${i}`} {...{[resourceName]: item}} />
			))}
		</ListWrapper>
	);
}
