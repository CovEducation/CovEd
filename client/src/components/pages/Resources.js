import React, { Component } from 'react';
import {
	ReactiveBase,
	ReactiveList,
	ResultList,
	MultiList,
} from '@appbaseio/reactivesearch';

import "../../utilities.css";
import "./Homepage.css";

import {Col, Row } from 'react-bootstrap'
// Landing page library
import { Provider,} from "rebass";
import {
  Section,
} from "react-landing-page";

import Card from "@material-ui/core/Card";

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
	  36,
	  40,
      64,
      128,
      140,
      256,
    ]
}

class Resources extends Component {
	render() {
		return (
			<>
			<Provider theme={theme}>
			<Section fontSize={[2]} width={[1]} heading="" subhead="" p={2} mt={1} mb={4}>
			<h2><span className="light-h2">Resources</span><hr className="hr-primary"/> <br /> <br /></h2>
			<ReactiveBase
							app="coved"
							credentials="sJ8zoOmW3:f3dbcd79-4ab9-437c-936d-d1d37b46073e"
						>
						<Row className="justify-content-sm-center">
						<Col md={{span: 3}} sm={{span:10}} className="text-center filters">
							<MultiList
								componentId="schoolfilter"
								title="Filter by School"
								dataField="schools.type.keyword"
							/>
							<br />
							<br />
							<MultiList
								componentId="subjectfilter"
								title="Filter by Subject"
								dataField="subjects.type.keyword"
							/>
							<br />
							<br />
							<MultiList
								componentId="specfilter"
								title="Filter by Special Needs"
								dataField="special.type.keyword"
							/>
							<br />
							<br />
						</Col>
						<Col md={{span:9}} sm={{span:10}} className="text-left">
							<ReactiveList
								componentId="result"
								title="Results"
								dataField="name"
								from={0}
								size={20}
								className="rlist"
								pagination={true}
								react={{
									and: ['schoolfilter','subjectfilter','specfilter'],
								}}
								render={({ data }) => (
									<ReactiveList.ResultListWrapper>
										{data.map(item => (
											<div className="rlistitem">
											<Card variant="outlined">
											<ResultList href={item.url} key={item._id} className="rlist">
											 <Col sm={{span:6}} md={{span:3}} className="text-center">
												<ResultList.Title>
												<div className="resourcetitle">
												{item.name}
												</div>
												</ResultList.Title>
												</Col>
												<ResultList.Description>
												<Col md={{span:10}} sm={{span:12}} className="resourcesdesc">
												{item.description}
												<br />
												<br />
												{item.subjects
													.slice(0, 4)
													.map(tag => (
														<span key={tag.type} className="resourcetag">
															 {tag.type}
														</span>
													))}
													</Col>
												</ResultList.Description>
											</ResultList></Card></div>
										))}
									</ReactiveList.ResultListWrapper>
								)}
							/>
							</Col>
						</Row>
						</ReactiveBase>
					</Section>
				</Provider>
			</>
		);
	}
}

export default Resources;
