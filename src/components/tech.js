import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Tech extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className='tech'>
					<h1 className='heading'>
						<Fade bottom cascade>
							Tech.
						</Fade>
					</h1>

					<div className='tech_img_wrapper'>
						{data.tech.map((item, index) => (
							<img className='tech_img' src={item.imageSrc} key={index} alt={item.imageSrc} />
						))}
					</div>
				</div>
			</Fade>
		);
	}
}

export default Tech;
