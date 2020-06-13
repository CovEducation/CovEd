import React, { Component } from 'react';
import {
	ReactiveBase,
	ReactiveList,
	ResultList,
	MultiList,
} from '@appbaseio/reactivesearch';

import "./Homepage.css";

import {Col, Row } from 'react-bootstrap'
// Landing page library
import { Provider,} from "rebass";
import {
  Section,
} from "react-landing-page";

import Card from "@material-ui/core/Card";
import {theme} from "../Constants";

class Resources extends Component {
	render() {
		return (
			<>
			<Provider theme={theme}>
			<Section fontSize={[2]} width={[1]} heading="" subhead="" p={2} mt={1} mb={4}>
			<Row className="justify-content-center">
			<Col sm={{span:8}} xs={{span:10}} className="text-center filters">
			<h2><span className="light-h2">Resources</span><hr className="hr-primary"/> <br /></h2>
			<p> Welcome to our resources page! Here you will be able to find links to more online learning resources. Don't have a mentor yet, but need help in a particular subject? No problem! Check out our <a className="dark-a" target="_blank" href="https://www.piazza.com/coveducation/other/coved1/home"> Piazza page</a>! To join the piazza forum, simply follow these <a className="dark-a" href="tinyurl.com/menteeguideline" target="_blank">written instructions</a>, or follow the <a className="dark-a" href="http://tinyurl.com/piazzavid" target="_blank">instructions in this video.</a></p>
			<br />
			<br />
			</Col>
			</Row>
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
											<Row>
											 <Col xs={{span:6}} md={{span:3}} className="text-center">
												<ResultList.Title>
												<div className="resourcetitle">
												{item.name}
												</div>
												</ResultList.Title>
												</Col>
												<Col xs={{span:6}} md={{span:7}} className="resourcesdesc">
												<ResultList.Description>
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
													</ResultList.Description>
													</Col>
											</Row>
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
