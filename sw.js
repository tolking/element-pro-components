if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ab709a31"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Breadcrumb.2f64a6eb.js",revision:"630ebebfb0e4f93eb3777a0dad6f08f3"},{url:"assets/Breadcrumb.50717d4a.js",revision:"e803eafb301a4912df58ed4a7e9682b8"},{url:"assets/Checkbox.41e886f9.js",revision:"6c005744a002595b44e23263a485f761"},{url:"assets/Checkbox.96e30389.js",revision:"6fea9f42c25ab9df024c8d98b928a035"},{url:"assets/ColumnSetting.214ca733.js",revision:"dfb4ba7079ea3012a0246bf5c9dc23ce"},{url:"assets/ColumnSetting.694dbddf.js",revision:"9851f45a07f6f0fd3541548e05cbb7c8"},{url:"assets/Crud.048bb6c0.js",revision:"6f4b10e5b24a2c1dfd577f4795faa26e"},{url:"assets/Crud.077291b2.js",revision:"d525e14cd6f1dd1a0ae6726bc721a736"},{url:"assets/design.a79ba9c2.js",revision:"cfae348cdfe840b6779db1bf107240dd"},{url:"assets/design.b72774f0.js",revision:"b996bb880a1970682344bcee839a513f"},{url:"assets/el-switch.0ebdd538.css",revision:"bf882583f6e16ec419956d8abde5c962"},{url:"assets/Form.702e6d3f.js",revision:"9a45c174dbc2dadf08bb3cad6b5b006e"},{url:"assets/Form.c5285d9d.css",revision:"153e631c46d2758cd6650b74e33d041f"},{url:"assets/Form.d73a8ff1.js",revision:"87941b2a874c3495b8856c207d1655a5"},{url:"assets/index.17deeab0.js",revision:"308293d7686e908ab4f1cbabfa2583d2"},{url:"assets/index.1ba00cdd.js",revision:"0b07594abf9824a8ed40db4b4a10e2a6"},{url:"assets/index.e657b745.js",revision:"35e02f7e8c92bd15b298dde7392f1d8a"},{url:"assets/index.f88e83ec.css",revision:"220cf31cd471ab5b2acd87d4b0b2659a"},{url:"assets/InputTag.85224819.css",revision:"ed5a5d6eada9bc839de7769eb81ae3f5"},{url:"assets/InputTag.caf49a5b.js",revision:"2ccfb7f2e699e9f1ef52d221d9b009e6"},{url:"assets/InputTag.f7fe83da.js",revision:"ed0f592d051221c36726ad67c7760891"},{url:"assets/introduction.3942d4cd.js",revision:"8ade127737b070eafa236a0a0c581026"},{url:"assets/introduction.514d40a5.js",revision:"e9e0208422c96f5ef32634f360d362b6"},{url:"assets/Layout.0d70958a.js",revision:"7975168223dd0fed0e470a5f8b3740eb"},{url:"assets/Layout.8e927e30.css",revision:"ed38a6700f549518ea1b405791ec9ceb"},{url:"assets/Layout.dcfbfa64.js",revision:"bd75535d8f87abce9c56f30217615a32"},{url:"assets/Link.2854b65e.js",revision:"d6cf15027f8f2de54dc09bef4b05a802"},{url:"assets/Link.55219b41.css",revision:"3ce1c798c822d3d087961935cc6ff96b"},{url:"assets/Link.e09f0e6f.js",revision:"f4c6a883685c800412641f3771de1480"},{url:"assets/Menu.4cc23f5c.js",revision:"26f2d796c0bf60798cdf3306482b4016"},{url:"assets/Menu.6e4d718c.css",revision:"be59069942a8a6d3b8bd35d2bdc9e185"},{url:"assets/Menu.b2694345.js",revision:"f16727ce8ca073823da5684832672cd9"},{url:"assets/modules-element-plus.4f915924.js",revision:"bfc3bc9028db744155e6f8b0f1c66e98"},{url:"assets/modules-vue.7b886bc4.js",revision:"cbc775c2001bebc6902fb0b394f99cf8"},{url:"assets/Radio.3c49de33.js",revision:"5aee1a2d53c15cfd3107f288122ae2de"},{url:"assets/Radio.c0f00b96.js",revision:"541e3114adeb343189bec56877bd56e9"},{url:"assets/router.6c9aaaba.js",revision:"3f30491a898bbde831b8fcf8157518da"},{url:"assets/router.d1697632.js",revision:"605dc78ea06cfd753607e45475c7c4c4"},{url:"assets/Select.6e5f3463.js",revision:"1190bff26f1640bff879822df0fb689a"},{url:"assets/Select.d7366779.js",revision:"5329aa8e6bde753ccba8692958d1009d"},{url:"assets/Table.a925181a.js",revision:"b8d02e0427c3e016a0acaa5939e91f36"},{url:"assets/Table.c8e151bd.js",revision:"fd1d7577aa67c7503601a7e9829be755"},{url:"assets/Tabs.abea3e89.js",revision:"c1b9314442e44ce75d97c26615094b58"},{url:"assets/Tabs.c458b161.js",revision:"b934abf368058612364ae6576170f36a"},{url:"assets/theme.13ffd1fe.js",revision:"32d3a3b5e610c93d845d582f2fed73df"},{url:"assets/theme.9e76d036.js",revision:"01f51a2c2a554a6dd7fe78d728f642dc"},{url:"assets/TreeSelect.04c6c83a.css",revision:"a2d298eb9e63e846727b2da504d19a29"},{url:"assets/TreeSelect.321353c5.js",revision:"f50cdae5534b25edd5656bc28d62b654"},{url:"assets/TreeSelect.ee987dd3.js",revision:"7e754fac909fce3af2b4f73733c78c8a"},{url:"index.html",revision:"847985b4774333573ba77b4faa54e95c"},{url:"logo.svg",revision:"1f9470cde1a888fe845f2bb85043fa83"},{url:"manifest.webmanifest",revision:"d0887c4dfbcc95eeb52e95446d0c12f4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map