import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blob.svg","favicon.png","github.svg","global.css","hackerrank.svg","journey.txt","layer.svg","links.txt","logo.png","mail.svg","pointer.svg","projects.txt","tech.txt","wave.svg","youtube.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.b4f16bda.js","app":"_app/immutable/entry/app.81de1caa.js","imports":["_app/immutable/entry/start.b4f16bda.js","_app/immutable/chunks/index.93fd50d5.js","_app/immutable/chunks/singletons.965f1d96.js","_app/immutable/entry/app.81de1caa.js","_app/immutable/chunks/index.93fd50d5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/links",
				pattern: /^\/links\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
