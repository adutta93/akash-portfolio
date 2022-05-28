import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
class Contact extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>
					<Fade bottom cascade>
						{' '}
						Contact.
					</Fade>
				</h1>
				<Fade bottom>
					<div className='contact-content'>
						<h1>
							Let’s create your next <span className='amazing-color'>experience together</span>
						</h1>
						<a href={`mailto:${data.contactEmail}`} className='email'>
							{data.contactEmail}
						</a>
						<ul>
							<a
								target='blank'
								href='https://github.com/akash-dutta-au7'
								rel='noopener noreferrer'
								className='social-link'
							>
								<AiFillGithub size={35} style={{ marginRight: '1.5rem' }} />
							</a>
							<a
								target='blank'
								href='https://www.linkedin.com/in/akash-dutta-0a4993173/'
								rel='noopener noreferrer'
								className='social-link'
							>
								<AiFillLinkedin size={35} style={{ marginRight: '1.5rem' }} />
							</a>
							<a
								target='blank'
								href='https://www.instagram.com/aaakash.js/'
								rel='noopener noreferrer'
								className='social-link'
							>
								<AiFillInstagram size={35} style={{ marginRight: '1.5rem' }} />
							</a>
							<a
								target='blank'
								href='https://twitter.com/mernstackdev93'
								rel='noopener noreferrer'
								className='social-link'
							>
								<AiFillTwitterCircle size={35} style={{ marginRight: '1.5rem' }} />
							</a>
						</ul>
					</div>
				</Fade>

				<span className='footer'>
					Made With ❤ by
					<a href='https://github.com/akash-dutta-au7'>{''} Akash Dutta</a>
				</span>
			</div>
		);
	}
}

export default Contact;
