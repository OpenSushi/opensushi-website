import {
	RouterProvider,
	createRootRoute,
	createRoute,
	createRouter,
} from '@tanstack/react-router';
import { StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage } from './home-page';
import './styles.css';

const rootRoute = createRootRoute();
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: HomePage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

function App() {
	const router = useMemo(() => createRouter({ routeTree }), []);
	return <RouterProvider router={router} />;
}

const root = document.getElementById('app');
if (!root) {
	throw new Error('Missing #app root element.');
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
);
