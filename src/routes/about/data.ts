import { Heart, Users, TrendingUp, Code } from 'lucide-svelte';

export const MyApproach = [
	{
		title: 'Purpose-Driven',
		description: `I seek projects that create real value for end users. Whether it's building tools that
        empower developers, platforms that serve communities, or applications that solve genuine
        problems—I'm motivated by work that makes a lasting positive difference.`,
		icon: Heart
	},
	{
		title: 'Partnership Mindset',
		description: `I don't just deliver code and move on. I collaborate deeply, communicate clearly, and stay
        invested in the long-term success of your project. Your wins are my wins, and I approach
        every engagement as a true partnership.`,
		icon: Users
	},
	{
		title: 'Continuous Growth',
		description: `Technology evolves rapidly, and so do I. I'm always ready to upskill with new tools,
        frameworks, and patterns that maximize value for your users. Adaptability isn't just a
        trait—it's my commitment to staying relevant and effective.`,
		icon: TrendingUp
	}
];

export const Offerings = [
	{
		title: 'Frontend Excellence',
		description: [
			'React & SvelteKit',
			'TypeScript & JavaScript (ES6+)',
			'HTML5, CSS3, Tailwind CSS',
			'Responsive Design & Accessibility',
			'Component Architecture'
		],
		icon: Code
	},
	{
		title: 'Backend & Architecture',
		description: [
			'Node.js & Express.js',
			'Supabase & PostgreSQL',
			'RESTful APIs',
			'Headless CMS Integration',
			'System Design'
		],
		icon: Code
	},
	{
		title: 'Developer Experience',
		description: [
			'Clean, Maintainable Code',
			'Comprehensive Documentation',
			'SDK & Tool Development',
			'Git & CI/CD Workflows',
			'Performance Optimization'
		],
		icon: Code
	},
	{
		title: 'Soft Skills',
		description: [
			'Systems Thinking',
			'Clear Technical Communication',
			'Adaptability & Learning Agility',
			'Collaborative Problem-Solving',
			'Partnership-Focused Approach'
		],
		icon: Users
	}
];
