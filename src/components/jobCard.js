import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class JobCard extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className='job_card'>
					<p className='job_title'>{this.props.exp.title}</p>
					<p className='company_status'>
						{this.props.exp.company} . {this.props.exp.status}
					</p>
					<p className='exp-time'>
						{this.props.exp.from} - {this.props.exp.to}
					</p>
				</div>
			</Fade>
		);
	}
}

export default JobCard;
