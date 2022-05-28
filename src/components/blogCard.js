import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class BlogCard extends Component {
	state = {};
	render() {
		return (
			<Fade bottom>
				<div className='blog_card'>
					<a href={this.props.blog.link} className='blog-link'>
						<p className='blog_title'>{this.props.blog.title}</p>
						<p className='blog_data'>
							Posten on {this.props.blog.datePosted} . {this.props.blog.read} read
						</p>
						<p className='blog-body'>{this.props.blog.body}</p>
					</a>
				</div>
			</Fade>
		);
	}
}

export default BlogCard;
