import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Pane = styled.div<{ weight: number }>`
	flex: ${props => props.weight};
	border: 1px solid #999;
	margin: 0 10px;
	padding: 0 10px;
	border-radius: 3px;
`;

export interface SplitScreenProps {
	children: [React.ReactNode, React.ReactNode];
	leftWeight?: number;
	rightWeight?: number;
}

export const SplitScreen: React.FC<SplitScreenProps> = (props) => {
	const { children, leftWeight = 1, rightWeight = 1 } = props;
	const [left, right] = children;
	return (
		<Container>
			<Pane weight={leftWeight}>
				{left}
			</Pane>
			<Pane weight={rightWeight}>
				{right}
			</Pane>
		</Container>
	);
}
