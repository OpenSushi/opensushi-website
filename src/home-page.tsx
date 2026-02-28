import { useState } from 'react';
import sushiVideo from '../assets/sushi.mp4';

type Theme = 'light' | 'dark';

function useTheme(): [Theme, () => void] {
	const preferredDark =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;
	const initialTheme = preferredDark ? 'dark' : 'light';
	const [theme, setTheme] = useState<Theme>(initialTheme);

	return [
		theme,
		() => setTheme((value) => (value === 'dark' ? 'light' : 'dark')),
	];
}

export function HomePage() {
	const [theme, toggleTheme] = useTheme();

	return (
		<main className="page" data-theme={theme}>
			<button
				type="button"
				className="themeToggle"
				onClick={toggleTheme}
				aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
			>
				{theme === 'dark' ? '☀' : '☾'}
			</button>

			<h1>Welcome to OpenSushi</h1>

			<section className="hero">
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					aria-label="Sushi hero animation"
				>
					<source src={sushiVideo} type="video/mp4" />
				</video>
			</section>

			<section className="copy">
				<h2>All you can eat buffet of AI tokens.</h2>
				<p>
					Produced by{' '}
					<a
						href="https://hotaisle.xyz"
						target="_blank"
						rel="noreferrer"
					>
						Hot Aisle
					</a>
					. Coming soon!
				</p>
				<a className="emailLink" href="mailto:yaa@opensushi.ai">
					yaa@opensushi.ai
				</a>
			</section>
		</main>
	);
}
