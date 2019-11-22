import React from 'react';
import CardContainer from '../component/CardContainer';
import cards from '../Temp/cards';
const Home = props => {
	const { Fragment } = React;

	return (
		<Fragment>
			<h4 className="text-white">Pagina Principal</h4>
			<div className="container-fluid">
				<CardContainer cards={cards} />
			</div>
		</Fragment>
	);
};
export default Home;
