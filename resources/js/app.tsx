import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
	title: (title) => `${title}`,
	resolve: (path) =>
		path === "Root"
			? resolvePageComponent(
					`./Pages/page.tsx`,
					import.meta.glob("./Pages/**/*.tsx")
			  )
			: resolvePageComponent(
					`./Pages/${path}/page.tsx`,
					import.meta.glob("./Pages/**/*.tsx")
			  ),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
	progress: {
		color: "#eaea",
	},
});
