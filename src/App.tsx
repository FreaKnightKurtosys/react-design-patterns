import React from 'react';
import { SplitScreen } from './LayoutComponents/SplitScreen';
import { RegularList } from './LayoutComponents/RegularList';
import { people } from './data/people';
import { SmallPersonListItem } from './PeopleComponents/SmallPersonListItem';
import { LargePersonListItem } from './PeopleComponents/LargePersonListItem';
import { products } from './data/products';
import { SmallProductListItem } from './ProductComponents/SmallProductListItem';
import { LargeProductListItem } from './ProductComponents/LargeProductListitem';

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
		<>
			<SplitScreen leftWeight={1} rightWeight={3}>
				<HeadingComponent text={'Left!'} />
				<ParagraphComponent text={'Right!'} />
			</SplitScreen>
			<RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
			<RegularList items={people} resourceName="person" itemComponent={LargePersonListItem} />
			<RegularList items={products} resourceName="product" itemComponent={SmallProductListItem} />
			<RegularList items={products} resourceName="product" itemComponent={LargeProductListItem} />
		</>
	);
}

export default App;
