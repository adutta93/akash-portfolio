import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Header extends Component {
	state = {};

	render() {
		return (
			<>
				<h1 className='heading-background'>AKASH</h1>
				<div className='header-name-desig'>
					<header>
						<h1>
							<Fade bottom cascade>
								{data.name}
							</Fade>
						</h1>
					</header>
					<Fade bottom cascade>
						<p className='position'>{'Software Engineer'}</p>
					</Fade>
				</div>
				<div className='header-hero'>
					<Fade bottom>
						<p className='header-title'>
							<p className='title-p1'>
								{data.headerTagline[0]}

								<span>{data.headerTagline[1]}</span>
								<br></br>
							</p>
							<p className='title-p2'>
								{data.headerTagline[2]}
								{''}
								{data.headerTagline[3]}
							</p>
							<br></br>
							<div className='btn-grp'>
								<button className='header-btn'>
									<a href='mailto:dutta.akash1993official@gmail.com' target='blank' rel='noopener noreferrer'>
										Contact
									</a>
								</button>
								<button className='header-btn btn-resume'>
									<a href={data.resumeDownload} target='blank' rel='noopener noreferrer'>
										Resume
									</a>
								</button>
							</div>
						</p>
					</Fade>
				</div>
			</>
		);
	}
}

export default Header;
