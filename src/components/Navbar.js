import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
class Navbar extends Component {
	state = {};
	scrollToTop = () => {
		scroll.scrollToTop();
	};
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link
							className='link'
							activeClass='active'
							to='homw'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={this.scrollToTop}
						>
							Home
						</Link>
					</li>
					<li>
						<Link className='link' activeClass='active' to='About' spy={true} smooth={true} offset={-70} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link className='link' activeClass='active' to='tech' spy={true} smooth={true} offset={-70} duration={500}>
							Tech
						</Link>
					</li>
					<li>
						<Link
							className='link'
							activeClass='active'
							to='experience'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Experience
						</Link>
					</li>
					<li>
						<Link className='link' activeClass='active' to='work' spy={true} smooth={true} offset={-70} duration={500}>
							Work
						</Link>
					</li>
					<li>
						<Link className='link' activeClass='active' to='blog' spy={true} smooth={true} offset={-70} duration={500}>
							Blog
						</Link>
					</li>
					<li>
						<Link
							className='link'
							activeClass='active'
							to='contact'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
