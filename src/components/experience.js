import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import JobCard from './jobCard';

class Experience extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className='experience'>
					<Fade bottom cascade>
						<h1>Experience.</h1>
					</Fade>

					<div>
						{' '}
						{data.experience.map((exp) => (
							<JobCard exp={exp} key={exp.id} />
						))}
					</div>
				</div>
			</Fade>
		);
	}
}

export default Experience;
