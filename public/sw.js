if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/K1cwvQQba0WrznVYoCJak/_buildManifest.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/K1cwvQQba0WrznVYoCJak/_middlewareManifest.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/K1cwvQQba0WrznVYoCJak/_ssgManifest.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/239-271d3b52e954eafd.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/29107295-a2d0c8e72019a3ed.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/655-a49441742cca8534.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/675-70f2ceac6e19cd71.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/753-46b532e8c16a3fde.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/875-076edb0a756e04dd.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/f0f668f8-b5c049621cde68c7.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/main-822cb554526b56b8.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/404-80915c61d32a7632.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/500-6b3961feee89b548.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/_app-62fc4a95d7a7d766.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/community-2ab79df502cca96c.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/discover-e62bd936d153b2e5.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/ecosystem-8b1439e8e302e298.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/get-erg-9f2c0d56b9495ff1.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/index-e30854f613c72749.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/legal-6857d18d89d71621.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-3897535e4aa5fea0.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/pages/privacy-policy-be5fae0ac67c8ae8.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/chunks/webpack-cfc0599173837183.js",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/css/84e4b23eb9e0f1cf.css",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/Vinila-Bd-Ex.0d2ce702.woff",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/Vinila-Bd-Ex.e9018577.woff2",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/Vinila-Lt-Ex.99a84e21.woff2",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/Vinila-Lt-Ex.9ad730ae.woff",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/Vinila-Rg-Ex.5804f01a.woff",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/Vinila-Rg-Ex.d0dd63e1.woff2",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/roboto-v29-latin-regular.063752dd.ttf",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/roboto-v29-latin-regular.31e41586.svg",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/roboto-v29-latin-regular.7b8d7718.woff2",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/roboto-v29-latin-regular.a69044dd.woff",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/_next/static/media/roboto-v29-latin-regular.fff9dcbd.eot",revision:"K1cwvQQba0WrznVYoCJak"},{url:"/assets/bpsaa_member.png",revision:"e91740075e71cf7ca3fdc61d9c4bf71b"},{url:"/assets/ecosystem-light.png",revision:"25bb94a37fd56e4cf96151eac23e37d1"},{url:"/assets/ecosystem.png",revision:"3a115aaae49a2147650680f082e225df"},{url:"/assets/footer-light.png",revision:"13160deb179ed3a01504d8a86b8ccd7a"},{url:"/assets/footer.png",revision:"1132ae333d525969811d6dc9485ea071"},{url:"/assets/home/frame-1.png",revision:"1b8b0189fdca6af1bfc7faa371e6e30b"},{url:"/assets/home/frame-2.png",revision:"cb8530b64314117e5080bc273da812f8"},{url:"/assets/home/frame-3.png",revision:"b4487ff8274451053c9839669dcc47cf"},{url:"/assets/home/frame-4.png",revision:"2fc55d4a0c8e9eb170ac0189bbb1a41d"},{url:"/assets/home/frame-5.png",revision:"a9e29d5c2056cbc5ff64aad16874404a"},{url:"/assets/partners/bpsaa-logo.png",revision:"8b02b200fdbaf8d39a384e31feb65217"},{url:"/assets/partners/bpsaa-logo.svg",revision:"7f260b9de0f3d94fcfe1388c78450e11"},{url:"/assets/partners/emurgo-logo.svg",revision:"9d8e28e6310c212727cc04cb1810f92c"},{url:"/assets/partners/graviton-logo.svg",revision:"0ecb18484c6088a0062c33abe3b50475"},{url:"/assets/partners/gravity-logo.png",revision:"73ce81a45a9614ec09bd4dda4b6a28fa"},{url:"/assets/partners/jinse-logo.svg",revision:"77f4e8897e3c1f6db5304c5ce8cbecdc"},{url:"/assets/partners/utxo-logo.svg",revision:"231b702dcb22c9ec78024ec1ba623e79"},{url:"/assets/partners/waves-logo.svg",revision:"2aac8261cae9e50e2001846eb86e397e"},{url:"/favicon.ico",revision:"8dd46a633098f0ab92d9d6d70d9c393c"},{url:"/icon-512x512.png",revision:"c08b213831290710310259bcb5fdb6ad"},{url:"/icon.png",revision:"a1682707a0d0dcee1dc16c6e7d9a4a0e"},{url:"/manifest.json",revision:"278229b35f0eee0fd62928406a1dc9ff"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
