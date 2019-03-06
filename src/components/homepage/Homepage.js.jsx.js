import React, { Component } from 'react';
import TopBar from './TopBar.js.jsx';

import CrewDepartmentDonut from '../crew/CrewDepartmentDonut.js';
import CrewDepartmentGraph from '../crew/CrewDepartmentGraph.js.jsx';
import CrewGenderChart from '../crew/CrewGenderChart.js';
import DiasporaChartContainer from '../crew/DiasporaChartContainer.js.jsx';
import DepartmentChartContainer from '../crew/DepartmentChartContainer.js.jsx';
import OnomasticDisplayContainer from '../crew/OnomasticDisplayContainer.js.jsx';
import CrewChordDiagram from '../crew/CrewChordDiagram.js.jsx'

import HomepageBannerImage from '../../media/images/Credits_Blur_Graph_Superimposed.png';
import StoryLine from './StoryLine.js.jsx';
import Feed from './Feed.js.jsx';
import Team from './Team.js.jsx';
import Contact from './Contact.js.jsx';

import '../../stylesheets/Homepage.css';

class Homepage extends Component {

	render() {
		return (
			<div className="Homepage" >
				<TopBar />
				<div className="homepage-banner-container">
					<img className="homepage-banner-image" src={HomepageBannerImage} alt={'This did not render'}/>
					<div className="homepage-banner-header">A DEEPER LOOK INTO<br/> THE CREDITS</div>
				</div>
				<OnomasticDisplayContainer />
				<CrewChordDiagram />
				<DiasporaChartContainer />
				<DepartmentChartContainer />
				<Team />
				<Contact />
			</div>
		);
	}
}

export default Homepage;


