import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Project extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className='project'>
					{/* <img src={this.props.imageSrc} alt={this.props.title}></img> */}

					<h1>{this.props.title}</h1>

					{this.props?.live ? (
						<a className='proj-btn' target='_blank' rel='noopener noreferrer' href={this.props.live}>
							Link
						</a>
					) : null}

					{this.props?.livedemo ? (
						<a className='proj-btn' target='_blank' rel='noopener noreferrer' href={this.props.livedemo}>
							Video Demo
						</a>
					) : null}

					{this.props?.github ? (
						<a className='proj-btn' target='_blank' rel='noopener noreferrer' href={this.props.github}>
							GitHub
						</a>
					) : null}
				</div>
			</Fade>
		);
	}
}

export default Project;
