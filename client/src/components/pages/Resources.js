import React, { Component } from 'react';
import {
	ReactiveBase,
	CategorySearch,
	SingleRange,
	ResultCard,
	ReactiveList,
	MultiDataList,
} from '@appbaseio/reactivesearch';

import {Col, Row, Button} from 'react-bootstrap'
// Landing page library
import { Provider, Heading, Subhead } from "rebass";
import {
  Hero,
  ScrollDownIndicator,
  Flex,
  Section,
  CallToAction, Feature,
} from "react-landing-page";

const theme={
  colors: {
      blue: '#00568C',
      yellow: '#F2BE32',
      white: '#ffffff',
      darkblue: '#003c61',
      weird: '#E3E1E5'
  },
  fonts:{
    sans: 'Muli, sans-serif',
  },
  fontWeights: {
    light: 300,
    normal: 600,
    bold: 700,
  },
  fontSizes: [
      12, 16, 24, 36, 48, 72
    ],
  space: [
      0,
      4,
      8,
      16,
      32,
      64,
      128,
      140,
      256,
    ]
}

class Resources extends Component {
	constructor(props) {
    super(props);
		this.state = {
			data: []
		}
  }

	render() {
		return (
			<>
			<Provider theme={theme}>
			<Section fontSize={[2]} width={[1]} heading="" subhead="" p={4} mt={7} mb={7}>
			<Row className="justify-content-sm-center">
			<Col sm={{span: 12}} className="text-center">
			<ReactiveBase
							app="coved"
							credentials="sJ8zoOmW3:f3dbcd79-4ab9-437c-936d-d1d37b46073e"
						>
							<MultiDataList
								componentId="schoolfilter"
								title="Filter by School"
								dataField="schools.type.keyword"
								data={[
									{label: 'Elementary School (PreKG - 5)', value: 'elementary',},
									{label: 'Middle School (6-8)', value: 'middleschool',},
									{label: 'High School (9-12)', value: 'highschool',},
								]}
							/>
							<MultiDataList
								componentId="subjectfilter"
								title="Filter by Subject"
								dataField="subjects.type.keyword"
								data={[
									{label: 'Math', value: 'math',},
									{label: 'Computer Science', value: 'computer science',},
									{label: 'English', value: 'english',},
								]}
							/>
							<MultiDataList
								componentId="specfilter"
								title="Filter by Special Needs"
								dataField="special.type.keyword"
								data={[
									{label: 'SPED', value: 'sped',},
									{label: 'Hearing Impaired Friendly', value: 'hearing',},
									{label: 'Visually Impaired Friendly', value: 'visual',},
								]}
							/>
							<ReactiveList
								componentId="result"
								title="Results"
								dataField="name"
								from={0}
								size={5}
								pagination={true}
								react={{
									and: ['schoolfilter','subjectfilter','specfilter'],
								}}
								render={({ data }) => (
									<ReactiveList.ResultCardsWrapper>
										{data.map(item => (
											<ResultCard key={item._id}>
												<ResultCard.Title
													dangerouslySetInnerHTML={{
														__html: item.name,
													}}
												/>
												<ResultCard.Description>
													{item.description}
												</ResultCard.Description>
											</ResultCard>
										))}
									</ReactiveList.ResultCardsWrapper>
								)}
							/>
						</ReactiveBase>
						</Col>
						</Row>
					</Section>
				</Provider>
			</>
		);
	}
}

export default Resources;
