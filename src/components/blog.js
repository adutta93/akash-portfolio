import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import BlogCard from './blogCard';

class Blog extends Component {
	state = {};
	render() {
		return (
			<div className='blog'>
				<Fade bottom cascade>
					<h1>Blog.</h1>
				</Fade>

				<div className='blog-content' target='blank' rel='noopener noreferrer'>
					{' '}
					{data.blogs.map((blog) => (
						<BlogCard blog={blog} key={blog.id} />
					))}
				</div>
			</div>
		);
	}
}

export default Blog;
