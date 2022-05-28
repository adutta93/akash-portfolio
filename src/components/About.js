import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
	state = {};
	render() {
		return (
			<div className='about'>
				<div className='about-content'>
					<h1>
						<Fade bottom cascade>
							About.
						</Fade>
					</h1>

					<Fade bottom>
						<p className='about-details'>{data.abouttext1}</p>
						<p className='about-details'>{data.abouttext2}</p>
					</Fade>
				</div>
			</div>
		);
	}
}

export default About;
