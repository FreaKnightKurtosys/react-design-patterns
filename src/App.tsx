import React from 'react';
import { SplitScreen } from './LayoutComponents/SplitScreen';

interface ITextProps {
	text: string;
}

const HeadingComponent: React.FC<ITextProps> = (props) => {
	return <h1 style={{ backgroundColor: 'green' }}>{props.text}</h1>;
}

const ParagraphComponent: React.FC<ITextProps> = (props) => {
	return <p style={{ backgroundColor: 'red' }}>{props.text}</p>;
}

function App() {
	return (
		<SplitScreen leftWeight={1} rightWeight={3}>
			<HeadingComponent text={'Left!'} />
			<ParagraphComponent text={'Right!'} />
		</SplitScreen>
	);
}

export default App;
