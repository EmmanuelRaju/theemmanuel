export type ThemeColors = {
	background: string;
	foreground: string;
	primary: string;
	primaryForeground: string;
	secondary: string;
	secondaryForeground: string;
	muted: string;
	mutedForeground: string;
	accent: string;
	accentForeground: string;
	card: string;
	cardForeground: string;
	border: string;
	input: string;
	ring: string;
};

export type Theme = {
	name: string;
	label: string;
	fonts: {
		headings: string;
		body: string;
		url: string;
	};
	light: ThemeColors;
	dark: ThemeColors;
};

export const themes: Theme[] = [
	{
		name: 'ocean-depth',
		label: 'Ocean Depth',
		fonts: {
			headings: "'Plus Jakarta Sans', sans-serif",
			body: "'Inter', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
		},
		light: {
			background: 'oklch(98.5% 0.002 220)',
			foreground: 'oklch(18% 0.012 240)',
			primary: 'oklch(55% 0.16 210)',
			primaryForeground: 'oklch(98.5% 0.002 220)',
			secondary: 'oklch(26% 0.018 240)',
			secondaryForeground: 'oklch(98.5% 0.002 220)',
			muted: 'oklch(93% 0.006 220)',
			mutedForeground: 'oklch(53% 0.012 240)',
			accent: 'oklch(66% 0.19 30)',
			accentForeground: 'oklch(98.5% 0.002 220)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(18% 0.012 240)',
			border: 'oklch(91% 0.004 220)',
			input: 'oklch(91% 0.004 220)',
			ring: 'oklch(55% 0.16 210)'
		},
		dark: {
			background: 'oklch(12% 0.012 240)',
			foreground: 'oklch(96% 0.004 220)',
			primary: 'oklch(68% 0.18 200)',
			primaryForeground: 'oklch(12% 0.012 240)',
			secondary: 'oklch(20% 0.015 240)',
			secondaryForeground: 'oklch(96% 0.004 220)',
			muted: 'oklch(23% 0.015 240)',
			mutedForeground: 'oklch(70% 0.01 220)',
			accent: 'oklch(72% 0.2 30)',
			accentForeground: 'oklch(12% 0.012 240)',
			card: 'oklch(15% 0.015 240)',
			cardForeground: 'oklch(96% 0.004 220)',
			border: 'oklch(24% 0.018 240)',
			input: 'oklch(24% 0.018 240)',
			ring: 'oklch(68% 0.18 200)'
		}
	},
	{
		name: 'midnight-sage',
		label: 'Midnight Sage',
		fonts: {
			headings: "'Outfit', sans-serif",
			body: "'Work Sans', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap'
		},
		light: {
			background: 'oklch(98.5% 0.003 240)',
			foreground: 'oklch(18% 0.015 240)',
			primary: 'oklch(42% 0.08 250)',
			primaryForeground: 'oklch(98% 0.003 240)',
			secondary: 'oklch(25% 0.02 240)',
			secondaryForeground: 'oklch(98% 0.003 240)',
			muted: 'oklch(94% 0.005 240)',
			mutedForeground: 'oklch(52% 0.01 240)',
			accent: 'oklch(65% 0.09 145)',
			accentForeground: 'oklch(98% 0.003 240)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(18% 0.015 240)',
			border: 'oklch(90% 0.005 240)',
			input: 'oklch(90% 0.005 240)',
			ring: 'oklch(42% 0.08 250)'
		},
		dark: {
			background: 'oklch(14% 0.012 240)',
			foreground: 'oklch(96% 0.004 240)',
			primary: 'oklch(72% 0.12 230)',
			primaryForeground: 'oklch(14% 0.012 240)',
			secondary: 'oklch(20% 0.015 240)',
			secondaryForeground: 'oklch(96% 0.004 240)',
			muted: 'oklch(24% 0.015 240)',
			mutedForeground: 'oklch(68% 0.012 240)',
			accent: 'oklch(72% 0.11 145)',
			accentForeground: 'oklch(14% 0.012 240)',
			card: 'oklch(16% 0.015 240)',
			cardForeground: 'oklch(96% 0.004 240)',
			border: 'oklch(25% 0.02 240)',
			input: 'oklch(25% 0.02 240)',
			ring: 'oklch(72% 0.12 230)'
		}
	},
	{
		name: 'ink-amber',
		label: 'Ink & Amber',
		fonts: {
			headings: "'Bricolage Grotesque', sans-serif",
			body: "'Manrope', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Manrope:wght@300;400;500;600;700&display=swap'
		},
		light: {
			background: 'oklch(99% 0.001 60)',
			foreground: 'oklch(15% 0.005 240)',
			primary: 'oklch(25% 0.008 240)',
			primaryForeground: 'oklch(99% 0.001 60)',
			secondary: 'oklch(35% 0.01 240)',
			secondaryForeground: 'oklch(99% 0.001 60)',
			muted: 'oklch(95% 0.003 60)',
			mutedForeground: 'oklch(50% 0.008 240)',
			accent: 'oklch(60% 0.15 65)',
			accentForeground: 'oklch(15% 0.005 240)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(15% 0.005 240)',
			border: 'oklch(88% 0.003 240)',
			input: 'oklch(88% 0.003 240)',
			ring: 'oklch(25% 0.008 240)'
		},
		dark: {
			background: 'oklch(10% 0.008 240)',
			foreground: 'oklch(97% 0.003 60)',
			primary: 'oklch(85% 0.01 60)',
			primaryForeground: 'oklch(10% 0.008 240)',
			secondary: 'oklch(18% 0.01 240)',
			secondaryForeground: 'oklch(97% 0.003 60)',
			muted: 'oklch(20% 0.01 240)',
			mutedForeground: 'oklch(72% 0.008 60)',
			accent: 'oklch(72% 0.18 60)',
			accentForeground: 'oklch(10% 0.008 240)',
			card: 'oklch(14% 0.01 240)',
			cardForeground: 'oklch(97% 0.003 60)',
			border: 'oklch(22% 0.012 240)',
			input: 'oklch(22% 0.012 240)',
			ring: 'oklch(85% 0.01 60)'
		}
	},
	{
		name: 'digital-sunset',
		label: 'Digital Sunset',
		fonts: {
			headings: "'Clash Display', sans-serif",
			body: "'DM Sans', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap'
		},
		light: {
			background: 'oklch(98% 0.004 280)',
			foreground: 'oklch(20% 0.015 260)',
			primary: 'oklch(50% 0.18 270)',
			primaryForeground: 'oklch(98% 0.004 280)',
			secondary: 'oklch(28% 0.02 260)',
			secondaryForeground: 'oklch(98% 0.004 280)',
			muted: 'oklch(93% 0.008 280)',
			mutedForeground: 'oklch(54% 0.015 260)',
			accent: 'oklch(70% 0.14 40)',
			accentForeground: 'oklch(20% 0.015 260)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(20% 0.015 260)',
			border: 'oklch(90% 0.006 280)',
			input: 'oklch(90% 0.006 280)',
			ring: 'oklch(50% 0.18 270)'
		},
		dark: {
			background: 'oklch(13% 0.015 260)',
			foreground: 'oklch(96% 0.006 280)',
			primary: 'oklch(68% 0.2 270)',
			primaryForeground: 'oklch(13% 0.015 260)',
			secondary: 'oklch(22% 0.018 260)',
			secondaryForeground: 'oklch(96% 0.006 280)',
			muted: 'oklch(23% 0.018 260)',
			mutedForeground: 'oklch(70% 0.012 280)',
			accent: 'oklch(75% 0.16 40)',
			accentForeground: 'oklch(13% 0.015 260)',
			card: 'oklch(15% 0.018 260)',
			cardForeground: 'oklch(96% 0.006 280)',
			border: 'oklch(24% 0.02 260)',
			input: 'oklch(24% 0.02 260)',
			ring: 'oklch(68% 0.2 270)'
		}
	},
	{
		name: 'forest-floor',
		label: 'Forest Floor',
		fonts: {
			headings: "'Satoshi', sans-serif",
			body: "'Sora', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap'
		},
		light: {
			background: 'oklch(97.5% 0.004 120)',
			foreground: 'oklch(22% 0.012 140)',
			primary: 'oklch(35% 0.05 160)',
			primaryForeground: 'oklch(97.5% 0.004 120)',
			secondary: 'oklch(28% 0.01 140)',
			secondaryForeground: 'oklch(97.5% 0.004 120)',
			muted: 'oklch(92% 0.006 120)',
			mutedForeground: 'oklch(52% 0.01 140)',
			accent: 'oklch(58% 0.12 135)',
			accentForeground: 'oklch(97.5% 0.004 120)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(22% 0.012 140)',
			border: 'oklch(89% 0.006 120)',
			input: 'oklch(89% 0.006 120)',
			ring: 'oklch(35% 0.05 160)'
		},
		dark: {
			background: 'oklch(11% 0.015 140)',
			foreground: 'oklch(95% 0.006 120)',
			primary: 'oklch(75% 0.08 130)',
			primaryForeground: 'oklch(11% 0.015 140)',
			secondary: 'oklch(19% 0.012 140)',
			secondaryForeground: 'oklch(95% 0.006 120)',
			muted: 'oklch(21% 0.012 140)',
			mutedForeground: 'oklch(68% 0.01 120)',
			accent: 'oklch(70% 0.14 135)',
			accentForeground: 'oklch(11% 0.015 140)',
			card: 'oklch(14% 0.015 140)',
			cardForeground: 'oklch(95% 0.006 120)',
			border: 'oklch(23% 0.015 140)',
			input: 'oklch(23% 0.015 140)',
			ring: 'oklch(75% 0.08 130)'
		}
	},
	{
		name: 'crimson-slate',
		label: 'Crimson Slate',
		fonts: {
			headings: "'Space Grotesk', sans-serif",
			body: "'IBM Plex Sans', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap'
		},
		light: {
			background: 'oklch(98% 0.003 280)',
			foreground: 'oklch(20% 0.01 280)',
			primary: 'oklch(48% 0.22 15)',
			primaryForeground: 'oklch(98% 0.003 280)',
			secondary: 'oklch(30% 0.015 280)',
			secondaryForeground: 'oklch(98% 0.003 280)',
			muted: 'oklch(93% 0.005 280)',
			mutedForeground: 'oklch(50% 0.01 280)',
			accent: 'oklch(45% 0.06 280)',
			accentForeground: 'oklch(98% 0.003 280)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(20% 0.01 280)',
			border: 'oklch(90% 0.004 280)',
			input: 'oklch(90% 0.004 280)',
			ring: 'oklch(48% 0.22 15)'
		},
		dark: {
			background: 'oklch(13% 0.012 280)',
			foreground: 'oklch(96% 0.005 280)',
			primary: 'oklch(65% 0.24 15)',
			primaryForeground: 'oklch(13% 0.012 280)',
			secondary: 'oklch(22% 0.015 280)',
			secondaryForeground: 'oklch(96% 0.005 280)',
			muted: 'oklch(24% 0.015 280)',
			mutedForeground: 'oklch(68% 0.01 280)',
			accent: 'oklch(60% 0.08 280)',
			accentForeground: 'oklch(13% 0.012 280)',
			card: 'oklch(16% 0.015 280)',
			cardForeground: 'oklch(96% 0.005 280)',
			border: 'oklch(25% 0.018 280)',
			input: 'oklch(25% 0.018 280)',
			ring: 'oklch(65% 0.24 15)'
		}
	},
	{
		name: 'rose-gold',
		label: 'Rose Gold',
		fonts: {
			headings: "'Playfair Display', serif",
			body: "'Lato', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+DIsplay:wght@400;500;600;700;800&display=swap'
		},
		light: {
			background: 'oklch(98.5% 0.003 20)',
			foreground: 'oklch(22% 0.01 20)',
			primary: 'oklch(52% 0.16 25)',
			primaryForeground: 'oklch(98.5% 0.003 20)',
			secondary: 'oklch(30% 0.012 20)',
			secondaryForeground: 'oklch(98.5% 0.003 20)',
			muted: 'oklch(94% 0.005 20)',
			mutedForeground: 'oklch(52% 0.01 20)',
			accent: 'oklch(62% 0.14 50)',
			accentForeground: 'oklch(98.5% 0.003 20)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(22% 0.01 20)',
			border: 'oklch(91% 0.004 20)',
			input: 'oklch(91% 0.004 20)',
			ring: 'oklch(52% 0.16 25)'
		},
		dark: {
			background: 'oklch(12% 0.01 20)',
			foreground: 'oklch(96% 0.005 20)',
			primary: 'oklch(68% 0.18 25)',
			primaryForeground: 'oklch(12% 0.01 20)',
			secondary: 'oklch(20% 0.012 20)',
			secondaryForeground: 'oklch(96% 0.005 20)',
			muted: 'oklch(23% 0.012 20)',
			mutedForeground: 'oklch(70% 0.01 20)',
			accent: 'oklch(72% 0.16 50)',
			accentForeground: 'oklch(12% 0.01 20)',
			card: 'oklch(15% 0.012 20)',
			cardForeground: 'oklch(96% 0.005 20)',
			border: 'oklch(24% 0.015 20)',
			input: 'oklch(24% 0.015 20)',
			ring: 'oklch(68% 0.18 25)'
		}
	},
	{
		name: 'arctic-mint',
		label: 'Arctic Mint',
		fonts: {
			headings: "'Lexend', sans-serif",
			body: "'Nunito Sans', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Nunito+Sans:wght@300;400;600;700;800&display=swap'
		},
		light: {
			background: 'oklch(98% 0.003 190)',
			foreground: 'oklch(20% 0.012 190)',
			primary: 'oklch(52% 0.12 175)',
			primaryForeground: 'oklch(98% 0.003 190)',
			secondary: 'oklch(28% 0.015 190)',
			secondaryForeground: 'oklch(98% 0.003 190)',
			muted: 'oklch(93% 0.006 190)',
			mutedForeground: 'oklch(50% 0.012 190)',
			accent: 'oklch(60% 0.15 200)',
			accentForeground: 'oklch(98% 0.003 190)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(20% 0.012 190)',
			border: 'oklch(90% 0.005 190)',
			input: 'oklch(90% 0.005 190)',
			ring: 'oklch(52% 0.12 175)'
		},
		dark: {
			background: 'oklch(13% 0.012 190)',
			foreground: 'oklch(95% 0.006 190)',
			primary: 'oklch(68% 0.14 175)',
			primaryForeground: 'oklch(13% 0.012 190)',
			secondary: 'oklch(22% 0.015 190)',
			secondaryForeground: 'oklch(95% 0.006 190)',
			muted: 'oklch(24% 0.015 190)',
			mutedForeground: 'oklch(68% 0.012 190)',
			accent: 'oklch(70% 0.17 200)',
			accentForeground: 'oklch(13% 0.012 190)',
			card: 'oklch(16% 0.015 190)',
			cardForeground: 'oklch(95% 0.006 190)',
			border: 'oklch(25% 0.018 190)',
			input: 'oklch(25% 0.018 190)',
			ring: 'oklch(68% 0.14 175)'
		}
	},
	{
		name: 'mocha-cream',
		label: 'Mocha Cream',
		fonts: {
			headings: "'Montserrat', sans-serif",
			body: "'Source Sans 3', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;600;700&display=swap'
		},
		light: {
			background: 'oklch(97% 0.01 60)',
			foreground: 'oklch(25% 0.015 40)',
			primary: 'oklch(38% 0.06 40)',
			primaryForeground: 'oklch(97% 0.01 60)',
			secondary: 'oklch(32% 0.01 40)',
			secondaryForeground: 'oklch(97% 0.01 60)',
			muted: 'oklch(91% 0.008 60)',
			mutedForeground: 'oklch(48% 0.012 40)',
			accent: 'oklch(65% 0.12 50)',
			accentForeground: 'oklch(25% 0.015 40)',
			card: 'oklch(99% 0.005 60)',
			cardForeground: 'oklch(25% 0.015 40)',
			border: 'oklch(87% 0.008 60)',
			input: 'oklch(87% 0.008 60)',
			ring: 'oklch(38% 0.06 40)'
		},
		dark: {
			background: 'oklch(15% 0.012 40)',
			foreground: 'oklch(94% 0.008 60)',
			primary: 'oklch(75% 0.08 50)',
			primaryForeground: 'oklch(15% 0.012 40)',
			secondary: 'oklch(24% 0.01 40)',
			secondaryForeground: 'oklch(94% 0.008 60)',
			muted: 'oklch(25% 0.01 40)',
			mutedForeground: 'oklch(68% 0.01 60)',
			accent: 'oklch(72% 0.14 55)',
			accentForeground: 'oklch(15% 0.012 40)',
			card: 'oklch(18% 0.012 40)',
			cardForeground: 'oklch(94% 0.008 60)',
			border: 'oklch(27% 0.012 40)',
			input: 'oklch(27% 0.012 40)',
			ring: 'oklch(75% 0.08 50)'
		}
	},
	{
		name: 'lavender-dusk',
		label: 'Lavender Dusk',
		fonts: {
			headings: "'Urbanist', sans-serif",
			body: "'Karla', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Urbanist:wght@400;500;600;700;800&display=swap'
		},
		light: {
			background: 'oklch(98% 0.004 290)',
			foreground: 'oklch(22% 0.012 290)',
			primary: 'oklch(55% 0.15 290)',
			primaryForeground: 'oklch(98% 0.004 290)',
			secondary: 'oklch(30% 0.015 290)',
			secondaryForeground: 'oklch(98% 0.004 290)',
			muted: 'oklch(93% 0.006 290)',
			mutedForeground: 'oklch(52% 0.012 290)',
			accent: 'oklch(68% 0.12 320)',
			accentForeground: 'oklch(98% 0.004 290)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(22% 0.012 290)',
			border: 'oklch(90% 0.005 290)',
			input: 'oklch(90% 0.005 290)',
			ring: 'oklch(55% 0.15 290)'
		},
		dark: {
			background: 'oklch(14% 0.012 290)',
			foreground: 'oklch(95% 0.006 290)',
			primary: 'oklch(70% 0.17 290)',
			primaryForeground: 'oklch(14% 0.012 290)',
			secondary: 'oklch(23% 0.015 290)',
			secondaryForeground: 'oklch(95% 0.006 290)',
			muted: 'oklch(25% 0.015 290)',
			mutedForeground: 'oklch(68% 0.012 290)',
			accent: 'oklch(74% 0.14 320)',
			accentForeground: 'oklch(14% 0.012 290)',
			card: 'oklch(17% 0.015 290)',
			cardForeground: 'oklch(95% 0.006 290)',
			border: 'oklch(26% 0.018 290)',
			input: 'oklch(26% 0.018 290)',
			ring: 'oklch(70% 0.17 290)'
		}
	},
	{
		name: 'emerald-night',
		label: 'Emerald Night',
		fonts: {
			headings: "'Cabinet Grotesk', sans-serif",
			body: "'Inter', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
		},
		light: {
			background: 'oklch(97.5% 0.004 155)',
			foreground: 'oklch(20% 0.012 155)',
			primary: 'oklch(42% 0.10 165)',
			primaryForeground: 'oklch(97.5% 0.004 155)',
			secondary: 'oklch(28% 0.012 155)',
			secondaryForeground: 'oklch(97.5% 0.004 155)',
			muted: 'oklch(92% 0.006 155)',
			mutedForeground: 'oklch(50% 0.012 155)',
			accent: 'oklch(62% 0.14 145)',
			accentForeground: 'oklch(97.5% 0.004 155)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(20% 0.012 155)',
			border: 'oklch(89% 0.005 155)',
			input: 'oklch(89% 0.005 155)',
			ring: 'oklch(42% 0.10 165)'
		},
		dark: {
			background: 'oklch(12% 0.012 155)',
			foreground: 'oklch(94% 0.006 155)',
			primary: 'oklch(72% 0.14 165)',
			primaryForeground: 'oklch(12% 0.012 155)',
			secondary: 'oklch(21% 0.012 155)',
			secondaryForeground: 'oklch(94% 0.006 155)',
			muted: 'oklch(23% 0.012 155)',
			mutedForeground: 'oklch(66% 0.012 155)',
			accent: 'oklch(70% 0.16 145)',
			accentForeground: 'oklch(12% 0.012 155)',
			card: 'oklch(15% 0.012 155)',
			cardForeground: 'oklch(94% 0.006 155)',
			border: 'oklch(24% 0.015 155)',
			input: 'oklch(24% 0.015 155)',
			ring: 'oklch(72% 0.14 165)'
		}
	},
	{
		name: 'tangerine-noir',
		label: 'Tangerine Noir',
		fonts: {
			headings: "'Epilogue', sans-serif",
			body: "'Public Sans', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800&family=Public+Sans:wght@300;400;600;700&display=swap'
		},
		light: {
			background: 'oklch(98% 0.003 50)',
			foreground: 'oklch(18% 0.01 50)',
			primary: 'oklch(55% 0.20 35)',
			primaryForeground: 'oklch(98% 0.003 50)',
			secondary: 'oklch(26% 0.012 50)',
			secondaryForeground: 'oklch(98% 0.003 50)',
			muted: 'oklch(93% 0.005 50)',
			mutedForeground: 'oklch(50% 0.01 50)',
			accent: 'oklch(25% 0.008 50)',
			accentForeground: 'oklch(98% 0.003 50)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(18% 0.01 50)',
			border: 'oklch(90% 0.004 50)',
			input: 'oklch(90% 0.004 50)',
			ring: 'oklch(55% 0.20 35)'
		},
		dark: {
			background: 'oklch(11% 0.01 50)',
			foreground: 'oklch(96% 0.005 50)',
			primary: 'oklch(70% 0.22 35)',
			primaryForeground: 'oklch(11% 0.01 50)',
			secondary: 'oklch(19% 0.012 50)',
			secondaryForeground: 'oklch(96% 0.005 50)',
			muted: 'oklch(22% 0.012 50)',
			mutedForeground: 'oklch(70% 0.01 50)',
			accent: 'oklch(88% 0.01 50)',
			accentForeground: 'oklch(11% 0.01 50)',
			card: 'oklch(14% 0.012 50)',
			cardForeground: 'oklch(96% 0.005 50)',
			border: 'oklch(23% 0.015 50)',
			input: 'oklch(23% 0.015 50)',
			ring: 'oklch(70% 0.22 35)'
		}
	},
	{
		name: 'slate-azure',
		label: 'Slate Azure',
		fonts: {
			headings: "'Archivo', sans-serif",
			body: "'Rubik', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Rubik:wght@300;400;500;600;700&display=swap'
		},
		light: {
			background: 'oklch(97.5% 0.003 240)',
			foreground: 'oklch(25% 0.01 240)',
			primary: 'oklch(50% 0.14 220)',
			primaryForeground: 'oklch(97.5% 0.003 240)',
			secondary: 'oklch(35% 0.008 240)',
			secondaryForeground: 'oklch(97.5% 0.003 240)',
			muted: 'oklch(92% 0.005 240)',
			mutedForeground: 'oklch(52% 0.01 240)',
			accent: 'oklch(58% 0.16 200)',
			accentForeground: 'oklch(97.5% 0.003 240)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(25% 0.01 240)',
			border: 'oklch(88% 0.004 240)',
			input: 'oklch(88% 0.004 240)',
			ring: 'oklch(50% 0.14 220)'
		},
		dark: {
			background: 'oklch(14% 0.01 240)',
			foreground: 'oklch(94% 0.005 240)',
			primary: 'oklch(68% 0.16 220)',
			primaryForeground: 'oklch(14% 0.01 240)',
			secondary: 'oklch(24% 0.008 240)',
			secondaryForeground: 'oklch(94% 0.005 240)',
			muted: 'oklch(26% 0.008 240)',
			mutedForeground: 'oklch(66% 0.01 240)',
			accent: 'oklch(70% 0.18 200)',
			accentForeground: 'oklch(14% 0.01 240)',
			card: 'oklch(17% 0.01 240)',
			cardForeground: 'oklch(94% 0.005 240)',
			border: 'oklch(27% 0.012 240)',
			input: 'oklch(27% 0.012 240)',
			ring: 'oklch(68% 0.16 220)'
		}
	},
	{
		name: 'coral-reef',
		label: 'Coral Reef',
		fonts: {
			headings: "'Poppins', sans-serif",
			body: "'Hind', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Hind:wght@300;400;600;700&family=Poppins:wght@400;500;600;700;800&display=swap'
		},
		light: {
			background: 'oklch(98.5% 0.003 190)',
			foreground: 'oklch(20% 0.012 190)',
			primary: 'oklch(58% 0.18 185)',
			primaryForeground: 'oklch(98.5% 0.003 190)',
			secondary: 'oklch(28% 0.015 190)',
			secondaryForeground: 'oklch(98.5% 0.003 190)',
			muted: 'oklch(94% 0.005 190)',
			mutedForeground: 'oklch(50% 0.012 190)',
			accent: 'oklch(62% 0.20 25)',
			accentForeground: 'oklch(98.5% 0.003 190)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(20% 0.012 190)',
			border: 'oklch(91% 0.004 190)',
			input: 'oklch(91% 0.004 190)',
			ring: 'oklch(58% 0.18 185)'
		},
		dark: {
			background: 'oklch(13% 0.012 190)',
			foreground: 'oklch(96% 0.005 190)',
			primary: 'oklch(70% 0.20 185)',
			primaryForeground: 'oklch(13% 0.012 190)',
			secondary: 'oklch(22% 0.015 190)',
			secondaryForeground: 'oklch(96% 0.005 190)',
			muted: 'oklch(24% 0.015 190)',
			mutedForeground: 'oklch(68% 0.012 190)',
			accent: 'oklch(72% 0.22 25)',
			accentForeground: 'oklch(13% 0.012 190)',
			card: 'oklch(16% 0.015 190)',
			cardForeground: 'oklch(96% 0.005 190)',
			border: 'oklch(25% 0.018 190)',
			input: 'oklch(25% 0.018 190)',
			ring: 'oklch(70% 0.20 185)'
		}
	},
	{
		name: 'midnight-plum',
		label: 'Midnight Plum',
		fonts: {
			headings: "'Fraunces', serif",
			body: "'Commissioner', sans-serif",
			url: 'https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&display=swap'
		},
		light: {
			background: 'oklch(98% 0.004 310)',
			foreground: 'oklch(22% 0.012 310)',
			primary: 'oklch(40% 0.12 310)',
			primaryForeground: 'oklch(98% 0.004 310)',
			secondary: 'oklch(30% 0.015 310)',
			secondaryForeground: 'oklch(98% 0.004 310)',
			muted: 'oklch(93% 0.006 310)',
			mutedForeground: 'oklch(52% 0.012 310)',
			accent: 'oklch(68% 0.16 340)',
			accentForeground: 'oklch(22% 0.012 310)',
			card: 'oklch(100% 0 0)',
			cardForeground: 'oklch(22% 0.012 310)',
			border: 'oklch(90% 0.005 310)',
			input: 'oklch(90% 0.005 310)',
			ring: 'oklch(40% 0.12 310)'
		},
		dark: {
			background: 'oklch(13% 0.012 310)',
			foreground: 'oklch(95% 0.006 310)',
			primary: 'oklch(70% 0.16 310)',
			primaryForeground: 'oklch(13% 0.012 310)',
			secondary: 'oklch(23% 0.015 310)',
			secondaryForeground: 'oklch(95% 0.006 310)',
			muted: 'oklch(25% 0.015 310)',
			mutedForeground: 'oklch(68% 0.012 310)',
			accent: 'oklch(75% 0.18 340)',
			accentForeground: 'oklch(13% 0.012 310)',
			card: 'oklch(16% 0.015 310)',
			cardForeground: 'oklch(95% 0.006 310)',
			border: 'oklch(26% 0.018 310)',
			input: 'oklch(26% 0.018 310)',
			ring: 'oklch(70% 0.16 310)'
		}
	}
];

// Font loading optimization
const loadedFontUrls = new Set<string>();

function loadFont(url: string): void {
	if (loadedFontUrls.has(url)) return;

	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = url;
	link.id = `theme-font-${url.split('family=')[1]?.split('&')[0] || Math.random()}`;
	document.head.appendChild(link);
	loadedFontUrls.add(url);
}

function unloadUnusedFonts(currentFontUrl: string): void {
	const allLinks = document.querySelectorAll('link[id^="theme-font-"]');
	allLinks.forEach((link) => {
		const href = link.getAttribute('href');
		if (href && href !== currentFontUrl && loadedFontUrls.has(href)) {
			link.remove();
			loadedFontUrls.delete(href);
		}
	});
}

// Special handling for Fontshare fonts (Satoshi, Clash Display)
function loadFontshareFont(themeName: string): void {
	if (themeName === 'forest-floor') {
		const satoshiUrl = 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap';
		if (!loadedFontUrls.has(satoshiUrl)) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = satoshiUrl;
			link.id = 'theme-font-satoshi';
			document.head.appendChild(link);
			loadedFontUrls.add(satoshiUrl);
		}
	} else if (themeName === 'digital-sunset') {
		const clashUrl =
			'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap';
		if (!loadedFontUrls.has(clashUrl)) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = clashUrl;
			link.id = 'theme-font-clash';
			document.head.appendChild(link);
			loadedFontUrls.add(clashUrl);
		}
	}
}

export function applyTheme(theme: Theme, isDark: boolean): void {
	const root = document.documentElement;
	const colors = isDark ? theme.dark : theme.light;

	// Apply colors
	root.style.setProperty('--background', colors.background);
	root.style.setProperty('--foreground', colors.foreground);
	root.style.setProperty('--primary', colors.primary);
	root.style.setProperty('--primary-foreground', colors.primaryForeground);
	root.style.setProperty('--secondary', colors.secondary);
	root.style.setProperty('--secondary-foreground', colors.secondaryForeground);
	root.style.setProperty('--muted', colors.muted);
	root.style.setProperty('--muted-foreground', colors.mutedForeground);
	root.style.setProperty('--accent', colors.accent);
	root.style.setProperty('--accent-foreground', colors.accentForeground);
	root.style.setProperty('--card', colors.card);
	root.style.setProperty('--card-foreground', colors.cardForeground);
	root.style.setProperty('--border', colors.border);
	root.style.setProperty('--input', colors.input);
	root.style.setProperty('--ring', colors.ring);

	// Apply fonts
	root.style.setProperty('--font-headings', theme.fonts.headings);
	root.style.setProperty('--font-body', theme.fonts.body);

	// Load fonts dynamically
	loadFont(theme.fonts.url);
	loadFontshareFont(theme.name);

	// Cleanup unused fonts
	unloadUnusedFonts(theme.fonts.url);
}

export function getThemeByName(name: string): Theme | undefined {
	return themes.find((theme) => theme.name === name);
}

export function getDefaultTheme(): Theme {
	// Randomly select a theme on first visit
	const randomIndex = Math.floor(Math.random() * themes.length);
	return themes[randomIndex];
}
