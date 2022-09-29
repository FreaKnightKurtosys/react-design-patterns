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
	return <h1 style={{ borderBottom: '1px solid #999' }}>{props.text}</h1>;
}

const ParagraphComponent: React.FC<ITextProps> = (props) => {
	return <p>{props.text}</p>;
}

function App() {
	return (
		<>
			<HeadingComponent text={'People'} />
			<ParagraphComponent text={'Listing out the people data with the small list on the left and large list on the right'} />
			<SplitScreen leftWeight={1} rightWeight={2}>
				<RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
				<RegularList items={people} resourceName="person" itemComponent={LargePersonListItem} />
			</SplitScreen>
			<HeadingComponent text={'Products'} />
			<ParagraphComponent text={'Listing out the product data with the small list on the left and large list on the right'} />
			<SplitScreen leftWeight={1} rightWeight={2}>
				<RegularList items={products} resourceName="product" itemComponent={SmallProductListItem} />
				<RegularList items={products} resourceName="product" itemComponent={LargeProductListItem} />
			</SplitScreen>
		</>
	);
}

export default App;
