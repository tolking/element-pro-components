if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),t={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/base.056268db.js",revision:null},{url:"assets/base.24cb5587.js",revision:null},{url:"assets/base.2fb53884.js",revision:null},{url:"assets/base.5f62c893.css",revision:null},{url:"assets/base.ae1c093f.js",revision:null},{url:"assets/base.be7bf43f.js",revision:null},{url:"assets/base.f5bfbef4.css",revision:null},{url:"assets/Breadcrumb.b7ddc875.js",revision:null},{url:"assets/Breadcrumb.d704f0e9.js",revision:null},{url:"assets/Card.58bff3e4.js",revision:null},{url:"assets/Card.bfac600e.js",revision:null},{url:"assets/CHANGELOG.b32fa78f.js",revision:null},{url:"assets/Checkbox.20afb048.js",revision:null},{url:"assets/Checkbox.e0a5dde9.js",revision:null},{url:"assets/ColumnSetting.5627607c.js",revision:null},{url:"assets/ColumnSetting.da66bf48.js",revision:null},{url:"assets/Crud.3a69b7da.js",revision:null},{url:"assets/Crud.3de2d303.js",revision:null},{url:"assets/Crud.6d2600fd.js",revision:null},{url:"assets/Descriptions.22132361.js",revision:null},{url:"assets/Descriptions.9bf2abaa.js",revision:null},{url:"assets/Form.267fefd9.js",revision:null},{url:"assets/Form.7a4a09e2.js",revision:null},{url:"assets/Form.e04d016c.js",revision:null},{url:"assets/group.5cf9c2c6.js",revision:null},{url:"assets/group.92d5a900.js",revision:null},{url:"assets/i18n.212e499e.js",revision:null},{url:"assets/i18n.adeb8cb0.js",revision:null},{url:"assets/index.224a7fc0.js",revision:null},{url:"assets/index.419ab9d1.js",revision:null},{url:"assets/index.b0e462de.css",revision:null},{url:"assets/index.ce43a396.js",revision:null},{url:"assets/InputTag.325b60e8.js",revision:null},{url:"assets/InputTag.5c006fe0.js",revision:null},{url:"assets/introduction.502618f4.js",revision:null},{url:"assets/introduction.8250431b.js",revision:null},{url:"assets/Layout.2d801a41.js",revision:null},{url:"assets/Layout.3aae9e7a.js",revision:null},{url:"assets/Layout.a4814385.js",revision:null},{url:"assets/lazy.fbd03074.js",revision:null},{url:"assets/lazy.fbdea27a.css",revision:null},{url:"assets/Link.04038492.js",revision:null},{url:"assets/Link.64297081.js",revision:null},{url:"assets/Menu.87f8141f.js",revision:null},{url:"assets/Menu.f795091a.js",revision:null},{url:"assets/modules-element-plus.412af1fa.js",revision:null},{url:"assets/modules-vue.f3a2bd49.js",revision:null},{url:"assets/nested.4077a7a3.js",revision:null},{url:"assets/Radio.18c10820.js",revision:null},{url:"assets/Radio.4a4e4133.js",revision:null},{url:"assets/ref.a3ebd8c9.js",revision:null},{url:"assets/router-view.8a1aebf9.js",revision:null},{url:"assets/router.402a6bba.js",revision:null},{url:"assets/router.ab8c26c8.js",revision:null},{url:"assets/Select.56200834.js",revision:null},{url:"assets/Select.5899e300.js",revision:null},{url:"assets/separator.ca44844d.js",revision:null},{url:"assets/slots.0d5445d3.js",revision:null},{url:"assets/Table.52512bfa.js",revision:null},{url:"assets/Table.6b0802d5.js",revision:null},{url:"assets/Table.d3a38dbb.js",revision:null},{url:"assets/Tabs.3068ea7b.js",revision:null},{url:"assets/Tabs.313708bd.js",revision:null},{url:"assets/theme.1141dad8.js",revision:null},{url:"assets/theme.29568e77.js",revision:null},{url:"assets/TreeSelect.729403e8.js",revision:null},{url:"assets/TreeSelect.8719b5ba.js",revision:null},{url:"assets/type.09d0cb13.js",revision:null},{url:"assets/type.2add69a2.js",revision:null},{url:"assets/type.70898d0d.js",revision:null},{url:"assets/typescript.08904e4c.js",revision:null},{url:"assets/typescript.0d349bc0.css",revision:null},{url:"assets/typescript.636d8a50.css",revision:null},{url:"assets/typescript.7199f8b9.js",revision:null},{url:"assets/typescript.7578e39c.js",revision:null},{url:"assets/typescript.cd695715.js",revision:null},{url:"index.html",revision:"4339a4a757514fec8813c718d7dffbe0"},{url:"manifest.webmanifest",revision:"a9f892660b1c2c839414b1ba349a7d87"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
