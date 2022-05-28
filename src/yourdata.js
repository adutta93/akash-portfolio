import js from './img/tech/js.png';
import go from './img/tech/go.png';
import py from './img/tech/py.png';
import node from './img/tech/node_js.png';
import express from './img/tech/express.png';
import mongo from './img/tech/mongo.png';
import react from './img/tech/react.png';
import mysql from './img/tech/mysql.png';
import graphql from './img/tech/graphql.png';
import docker from './img/tech/docker.png';
import dynamo from './img/tech/dynamo.jpg';
import nginx from './img/tech/nginx.png';
import aws from './img/tech/aws.jpg';
import digio from './img/tech/do.png';
import elastic from './img/tech/elastic.png';

export default {
	name: 'akash dutta.',
	headerTagline: [
		//Line 1 For Header
		'Hi 👋 You found me!',
		' I am Akash',
		//Line 2 For Header
		'Software Engineer',
		//Line 3 For Header
		' from India',
	],
	//Contact Email
	contactEmail: 'dutta.akash1993official@gmail.com',

	abouttext1: `Hey there! I'm Akash. A software engineer with over 4 years of experience. I am passionate about technology, the internet, the web, 
	and the way software is developed. I have developed products for the finance, e-commerce, and education industries.`,
	abouttext2: `Currently, I am a senior engineer at Twilio where I work in their developer supportability team. Additionally, I work with early-stage start-ups to build their first MVP as a software engineer consultant
	`,

	resumeDownload: 'https://drive.google.com/file/d/1eGa0uwQPLDoFnN8eIfgkmmpXEdJfM5RS/view?usp=sharing',
	tech: [
		{ imageSrc: js },
		{ imageSrc: go },
		{ imageSrc: py },
		{ imageSrc: node },
		{ imageSrc: express },
		{ imageSrc: mongo },
		{ imageSrc: react },
		{ imageSrc: mysql },
		{ imageSrc: graphql },
		{ imageSrc: docker },
		{ imageSrc: elastic },
		{ imageSrc: dynamo },
		{ imageSrc: nginx },
		{ imageSrc: aws },
		{ imageSrc: digio },
	],

	experience: [
		{
			id: 0,
			title: 'Consultant Software Engineer ',
			company: 'Self Employed',
			from: 'Aug 2021',
			to: 'present',
			description: '',
			status: 'Part-time',
		},
		{
			id: 1,
			title: 'Senior Engineer - Developer Supportability',
			company: 'Twilio Inc',
			from: 'Dec 2021',
			to: 'present',
			description: '',
			status: 'Full-time',
		},
		{
			id: 2,
			title: 'Technology Analyst',
			company: 'Tara Capital Partners',
			from: 'Nov 2020',
			to: 'Jul 2021',
			description: '',
			status: 'Full-time',
		},
		{
			id: 3,
			title: 'Software Engineer',
			company: 'Weavions Technologies ',
			from: 'Sep 2019',
			to: 'Nov 2020',
			description: '',
			status: 'Full-time',
		},
		{
			id: 4,
			title: 'Web Developer',
			company: 'Stealth Startup',
			from: 'Jan 2019',
			to: 'Sep 2019',
			description: '',
			status: '',
		},
		// {
		// 	id: 1,
		// 	title: 'Senior Engineer - Developer Supportability',
		// 	company: 'Twilio Inc',
		// 	from: '',
		// 	to: '',
		// 	description: '',
		// 	status: '',
		// },
		// {
		// 	id: 1,
		// 	title: 'Senior Engineer - Developer Supportability',
		// 	company: 'Twilio Inc',
		// 	from: '',
		// 	to: '',
		// 	description: '',
		// 	status: '',
		// },
	],
	projects: [
		{
			id: 1,
			title: 'Devium | Full Stack MERN',
			service: 'Web Development',
			live: 'https://devium-by-akash.herokuapp.com/',
			livedemo: 'https://www.youtube.com/watch?v=_2RWrUU1Bc4',
			github: 'https://github.com/akash-dutta-au7/devium',
		},
		{
			id: 6,
			title: 'Zomato Clone | React JS',
			service: 'Web Development',
			live: 'https://zomato-clone-by-akash.netlify.app/',
			livedemo: 'https://zomato-clone-by-akash.netlify.app/',
			github: 'https://github.com/akash-dutta-au7/',
		},
		{
			id: 3,
			title: 'Trello Clone | React JS',
			service: 'Web Development',
			live: 'https://trello-clone-new-akash.netlify.app/#',
			livedemo: 'https://trello-clone-new-akash.netlify.app/#',
			github: 'https://github.com/akash-dutta-au7/trello',
		},
		{
			id: 3,
			title: 'InShort | Next JS, Vercel Edge, Redis',
			service: 'Web Development',
			live: 'https://next-js-url-shortner.vercel.app/',
			livedemo: 'https://next-js-url-shortner.vercel.app/',
			github: 'https://github.com/akash-dutta-au7/next-js-url-shortner',
		},
		{
			id: 4,
			title: 'SaaSBee | React',
			service: 'UI Development',
			live: 'https://saasbee-marketplace.netlify.app/',
			livedemo: 'https://www.youtube.com/watch?v=XtMbn4dmfVM',
			github: 'https://github.com/akash-dutta-au7/saasbee',
		},
		{
			id: 2,
			title: 'Netflix Clone | React',
			service: 'Frontend Development',
			live: 'http://stream-em-all.herokuapp.com/',
			livedemo: 'https://www.youtube.com/watch?v=LZBt3ufTWJ8&t=3s',
			github: 'https://github.com/attainu/Stream-em-all',
		},
		{
			id: 5,
			title: 'The Globile Store | Bootstrap UI',
			service: 'Ui Development',
			live: 'https://akash-dutta-au7.github.io/TheGlobileStore/',
			livedemo: '',
			github: 'https://github.com/akash-dutta-au7/TheGlobileStore',
		},
	],

	blogs: [
		{
			id: 0,
			title: 'Tried to clone the react-credit-cards npm package',
			read: '5 minutes',
			datePosted: 'Sep 16, 2020',
			body: 'I was working on this small but fun project in React, using hooks. Tried to replicate the react-credit-cards npm...',
			link: 'https://dev.to/akashduttaau7/tried-to-clone-the-react-credit-cards-npm-package-29e5',
		},
		{
			id: 1,
			title: 'Tried to clone the react-credit-cards npm package',
			read: '5 minutes',
			datePosted: 'Sep 16, 2020',
			body: 'I was working on this small but fun project in React, using hooks. Tried to replicate the react-credit-cards npm...',
			link: 'https://dev.to/akashduttaau7/tried-to-clone-the-react-credit-cards-npm-package-29e5',
		},
	],

	social: [
		{ name: 'Github', url: 'https://github.com/chetanverma16' },
		{
			name: 'Behance',
			url: 'https://www.behance.net/chetanverma',
		},
		{
			name: 'Dribbble',
			url: 'https://dribbble.com/chetanverma',
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/cv.uidesign/',
		},
	],
};
