import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Blog extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className='experience'>
					{/* <img src={this.props.imageSrc} alt={this.props.title}></img> */}

					<h1>{this.props.title}</h1>
				</div>
			</Fade>
		);
	}
}

export default Blog;
