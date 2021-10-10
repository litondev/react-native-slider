import React from "react";

export default [
	{
		name : "Page1",
		component : React.lazy(() => import("./views/Page1"))
	},
	{ 
		name : "Page2",
		component : React.lazy(() => import('./views/Page2'))
	},
	{
		name : "Page3",
		component : React.lazy(() => import('./views/Page3'))
	},
	{
		name : "Page4",
		component : React.lazy(() => import('./views/Page4'))
	},
	{
		name : "Page5",
		component : React.lazy(() => import('./views/Page5'))
	}
];