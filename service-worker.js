if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-7dafdff6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.75d1ecf0.css",revision:"a2b600ba0deefae19467d1e94e74e473"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/34.c58c2058.js",revision:"c7f06bcccda4b1f0e569a9c54392e6ea"},{url:"assets/js/35.0127a96c.js",revision:"29128df5f12191517c7ff491b6fbca51"},{url:"assets/js/36.ee6fce9c.js",revision:"fed8019161216f90c1668125236f0872"},{url:"assets/js/app.3b3c1574.js",revision:"f8f9cf8790d92f247da701d4508cca31"},{url:"assets/js/layout-Blog.eb6d519e.js",revision:"7f2d96dfa45b66a4a116a7f0892d2b1e"},{url:"assets/js/layout-Layout.85d11602.js",revision:"e5b24bf52e3169e1f19f8d202283945f"},{url:"assets/js/layout-NotFound.4fedb810.js",revision:"ccbbafb84f5cfb9ff7af6cda4cfb4b73"},{url:"assets/js/layout-Slide.c0028b2e.js",revision:"630844b40488b8edc6d88c5f19dcd5d1"},{url:"assets/js/page-Markdown文档.5c213fa3.js",revision:"1f97adead61fa5a8e4fd78736c1fec8d"},{url:"assets/js/page-TP6新项目的创建与Apidoc的安装.77f1b324.js",revision:"2313e44eea0d301e082f5b213f9503fe"},{url:"assets/js/page-V10升级V20报错.c7062df1.js",revision:"bed87dc84ff430e62a198954d17dcd1c"},{url:"assets/js/page-介绍.71ad9728.js",revision:"4b663fa1e8c063bafc5f2f9d45170905"},{url:"assets/js/page-使用GithubActions实现TP6自动化部署.319e99f7.js",revision:"a445caca5dcb95b9011c29097a46bcf2"},{url:"assets/js/page-使用phpstudy搭建TP6运行环境.dd46860b.js",revision:"f24d5c40368c5c84d0a62a63e3c96e0f"},{url:"assets/js/page-多应用多版本.764f2af8.js",revision:"655a1f7545d92927f1f3ddb7675dc052"},{url:"assets/js/page-安装更新.6f3b774f.js",revision:"2ddf022396632d035eae1594f5dd8881"},{url:"assets/js/page-密码验证.94ef7001.js",revision:"5a2ffefbbf7463368f0d9fa804a6ecdf"},{url:"assets/js/page-常见问题.7b056651.js",revision:"2115ed19789b61feb468c967ce13b5c3"},{url:"assets/js/page-快速生成CRUD.afb802b8.js",revision:"71eb5f832d1aec8657927b4f20264958"},{url:"assets/js/page-指南.bf7e7728.js",revision:"3c8288920a1d844bc460f3188fd81950"},{url:"assets/js/page-接口调试.2193adb1.js",revision:"54d7cb20c283478af2b286b3f6d767ae"},{url:"assets/js/page-控制器分组.6a5bceb5.js",revision:"08b4cea7a9cfae770bb47f1961794870"},{url:"assets/js/page-教程.c9f85af2.js",revision:"c0589ff4da44bc22e822ae677dcf424b"},{url:"assets/js/page-文档缓存.639eb8fd.js",revision:"98ad0966bacdb83d60a829159c19df7b"},{url:"assets/js/page-更新日志.79d3f6d8.js",revision:"c38bea72c18d7bcf97353ef460187406"},{url:"assets/js/page-没有生成apidocphp配置文件.0d2bdd30.js",revision:"6cdf4c26e5f4d43bea5a1d6b36d82978"},{url:"assets/js/page-编写注释.3551e32f.js",revision:"8975ee91e18809bc2cd05b9b0df91e54"},{url:"assets/js/page-配置参数.2e3ad054.js",revision:"423e78e9aa5e2137147d72e492f44d04"},{url:"assets/js/page-页面404错误.aed56d39.js",revision:"827a2f676856a8264f3d7bca0a4ac9bf"},{url:"assets/js/page-页面500错误.715a54af.js",revision:"c51a5536f82097cf60a02446d79e1487"},{url:"assets/js/page-页面布局.b3d189da.js",revision:"6eed44ca2ba4de0ca07e7dae3d712a91"},{url:"assets/js/page-页面配置.0eecd60f.js",revision:"5aac93547c2117a3f014ed533ef35daf"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.df080a92.js",revision:"13cf464b28026154409967db43d49a31"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.56110a7c.js",revision:"7204388c3bbc1471554ad69c7bbf6ed3"},{url:"assets/js/vendors~layout-Layout.af33e540.js",revision:"5fc93b1852b7aa57729ad17341686413"},{url:"assets/js/vendors~photo-swipe.a38165ff.js",revision:"0c0c3f52915f3321dbf6e831f3e559af"},{url:"404.html",revision:"21a3a52437031660185c657d12f3238e"},{url:"config/index.html",revision:"b9487daac559ce933a6dde4837c06138"},{url:"config/page/index.html",revision:"3d615f69bebdb42dade9f97334085ffe"},{url:"course/createTpAndInstall/index.html",revision:"852889407b55a1324a231d9a8db987b5"},{url:"course/githubActionsDeploy/index.html",revision:"5c7b535b8660a724b54c130377f72dd8"},{url:"course/index.html",revision:"93e7eed5880ba6fc3494b228abca3526"},{url:"course/phpStudyInstall/index.html",revision:"f11b162267eae7a26b05a74422b4346f"},{url:"guide/changelog/index.html",revision:"52fa068e519cc25837b96ef69ad358d3"},{url:"guide/index.html",revision:"616f38cd8a49d4febdabc45a9b2689e1"},{url:"guide/install/index.html",revision:"a11313aedf8da33fe42e3409616f784f"},{url:"index.html",revision:"88cde4e863b724832f177349f79a721a"},{url:"use/function/apps/index.html",revision:"118f08e2b38d70c055e88dba5dc679c3"},{url:"use/function/cache/index.html",revision:"3150284bc0873cd0c07414f19331aa36"},{url:"use/function/controllerGroup/index.html",revision:"348e0e12bcc0293fcbb7e4e04318302c"},{url:"use/function/crud/index.html",revision:"73bad51a401fa3db13c369a80272bb3d"},{url:"use/function/docs/index.html",revision:"d450d40e0b473ce8a83eee75a8b08434"},{url:"use/function/password/index.html",revision:"9bb05233804d1f994e19e668faee8bd1"},{url:"use/help/404/index.html",revision:"e9a0f01b4c3bf4027683083f22775e30"},{url:"use/help/500/index.html",revision:"fc1fc931e4063fb45a457437942b940c"},{url:"use/help/index.html",revision:"56859dcf399f72c30ee00ce7ce925047"},{url:"use/help/notConfig/index.html",revision:"db795025dbe135eaf4d9f65720d629d8"},{url:"use/help/v1Tov2/index.html",revision:"a204c546d7fd6d70cbb4f056a4b49d56"},{url:"use/index.html",revision:"7b59d98535a9eca7d9844163058df107"},{url:"use/operation/apidebug/index.html",revision:"b2fa2c4efcd12590607ab2cb4bc584d1"},{url:"use/operation/layout/index.html",revision:"bf6311997010dab557dcb2e64622c760"},{url:"assets/icon/apple-icon-152.png",revision:"f80145aa55bdcd965ca90e40c7bf852c"},{url:"assets/icon/chrome-192.png",revision:"f1aa7a38848d97a4328f561ce4c25fe1"},{url:"assets/icon/chrome-512.png",revision:"b36b4238ca28da6995301ef2637e06ce"},{url:"assets/icon/chrome-mask-192.png",revision:"71a4c2f46e621bf85b6a1bcd8c21560c"},{url:"assets/icon/chrome-mask-512.png",revision:"bb407756d4070797d4b4e0986c71e632"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"bccb7c7b07285b900091c7618fe1171a"},{url:"images/apidoc-api-base-demo.png",revision:"dc6db87c76980646dd89d801e7d2fad3"},{url:"images/apidoc-api-complete-demo.png",revision:"0f1b3e12ca365f2c1dec82342cb96510"},{url:"images/apidoc-api-dictionary-demo.png",revision:"e2c83946e7669a4b2943d7e505bd449c"},{url:"images/apidoc-api-model-demo.png",revision:"4920f55448d8f0ff7dd34cc7b1a234cc"},{url:"images/apidoc-api-page_debug.jpg",revision:"2d80868ba39955285baf3c22f2c172b5"},{url:"images/apidoc-api-page.jpg",revision:"10f8c091787dd3e142e51d4631fca29b"},{url:"images/apidoc-api-server-demo.png",revision:"0d04ef74eab3027a652f91c2b8781284"},{url:"images/apidoc-config_crud.png",revision:"dddcb3ecd0a963673725df4bd08e7437"},{url:"images/apidoc-controller-demo.png",revision:"647d55b314e74979f84299bd7fa11aac"},{url:"images/apidoc-demo-apps.png",revision:"db279004724dc47565acee78b9edf013"},{url:"images/apidoc-demo-md.png",revision:"b7f978a7285fcc3173dcb8b5faff6b08"},{url:"images/apidoc-help-404_error.png",revision:"1f0b312587fba9355ea02e35fc52babe"},{url:"images/apidoc-help-route404.png",revision:"00f5a734b5e0d1567bec18234a1acef2"},{url:"images/apidoc-help-use_error.png",revision:"38e6f12ce9120d87dbf02b5b777ad18a"},{url:"images/apidoc-home-page.jpeg",revision:"c47a3f25ead28d5754ffd73c2504bcd7"},{url:"images/course/githubActions/composer.png",revision:"dce4eed3259a7790e10acdafa71ac3d5"},{url:"images/course/githubActions/github-actions.png",revision:"b59f8481260fe60142d6c22e33915594"},{url:"images/course/githubActions/github-settings-key.png",revision:"eaedb35383ab85f12bf906ded5d2d74e"},{url:"images/course/githubActions/github-settings.png",revision:"f3329cdc8654e476164e78cc974302cf"},{url:"images/course/githubActions/titlepic.png",revision:"3149df4a493dc829e1e2f68ad32e765b"},{url:"images/course/install-1.png",revision:"033d2bcb91f1ddecf782b4ab50d946de"},{url:"images/course/install-2.png",revision:"368b137317a4a2e17309e106a4c4fd89"},{url:"images/course/install-3.png",revision:"7e80273c9be9dfa0dc53e3617c94484a"},{url:"images/course/install-4.png",revision:"59a163113aeb9b6c21ac21395a2d7938"},{url:"images/course/install-apidoc-1.png",revision:"5c34c0640652e3670988580215a38e3b"},{url:"images/course/install-apidoc-2.png",revision:"c9a7f968f6be9705e2b994ce57690dd9"},{url:"images/course/install-apidoc-3.png",revision:"557909af93f3a19610f8c0772205678c"},{url:"images/course/install-apidoc-4.png",revision:"0a9dc2601a45853e57ac4e66dc3b84c0"},{url:"images/course/install-apidoc-5.png",revision:"a084d350ab1a4066953fd03cb1e51c4e"},{url:"images/course/install-apidoc-6.png",revision:"ffb6cededbeeab5b588c764ff614b6bb"},{url:"images/course/php-study-install/install-1.png",revision:"356f7a4f3790ce393b60529e2717223f"},{url:"images/course/php-study-install/install-2.png",revision:"83379b0328db209771c29b9ecdf87003"},{url:"images/course/php-study-install/install-3.png",revision:"e98a5c9b2119e6e07eb42b1cc22c38e6"},{url:"images/course/php-study-install/install-4.png",revision:"be98f0da3c4edec2ba876c9de1c436eb"},{url:"images/course/php-study-install/install-5.png",revision:"b9fef03a021f58fc274f671b4c9cb006"},{url:"images/course/php-study-install/install-6.png",revision:"529dfe051c095770d62c13810da75d04"},{url:"images/course/php-study-install/install-7.png",revision:"c819e8538b5cff578447d1f7201065b3"},{url:"images/course/php-study-install/install-8.png",revision:"63771f6319b0d3c8f99c361e0c3614f5"},{url:"images/course/php-study-install/titlepic.png",revision:"22db0a43aa94063f622a3135d5215048"},{url:"images/course/titlepic.png",revision:"4f036983e6aea693343b039f2498aad6"},{url:"images/logo.png",revision:"b000157a61a423c6b357baf49fd19031"},{url:"logo.png",revision:"b000157a61a423c6b357baf49fd19031"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
