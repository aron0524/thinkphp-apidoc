(self.webpackChunkdoc_vuePress=self.webpackChunkdoc_vuePress||[]).push([[605],{985:(t,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>n});const n={key:"v-ba934fd8",path:"/config/",title:"\u914D\u7F6E\u53C2\u6570",frontmatter:{},excerpt:"",headers:[{level:2,title:"title",slug:"title",children:[]},{level:2,title:"copyright",slug:"copyright",children:[]},{level:2,title:"controllers",slug:"controllers",children:[]},{level:2,title:"versions",slug:"versions",children:[]},{level:2,title:"with_cache",slug:"with-cache",children:[]},{level:2,title:"responses",slug:"responses",children:[]},{level:2,title:"global_auth_key",slug:"global-auth-key",children:[]},{level:2,title:"auth",slug:"auth",children:[{level:3,title:"auth.with_auth",slug:"auth-with-auth",children:[]},{level:3,title:"auth.auth_password",slug:"auth-auth-password",children:[]}]},{level:2,title:"definitions",slug:"definitions",children:[]},{level:2,title:"filter_method",slug:"filter-method",children:[]}],filePathRelative:"config/README.md",git:{updatedTime:1609159082e3,contributors:[{name:"hg-code",email:"376401263@qq.com",commits:1}]}}},72:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>d});var n=s(133);const p=(0,n.Wm)("h1",{id:"\u914D\u7F6E\u53C2\u6570"},[(0,n.Wm)("a",{class:"header-anchor",href:"#\u914D\u7F6E\u53C2\u6570"},"#"),(0,n.Uk)(" \u914D\u7F6E\u53C2\u6570")],-1),l={class:"custom-block tip"},i=(0,n.Wm)("p",{class:"custom-block-title"},"TIP",-1),o=(0,n.Uk)("\u5B89\u88C5\u63D2\u4EF6\u540E\u4F1A\u5728 /config/ \u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2A apidoc.php \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E00\u4E0B\u4E3A\u8BE5\u6587\u4EF6\u53EF\u914D\u7F6E\u7684\u53C2\u6570\u8BF4\u660E\uFF0C \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u8BF7\u67E5\u770B "),r={href:"https://github.com/HGthecode/thinkphp-apidoc/blob/master/config/apidoc.php",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("apidoc.php"),u=(0,n.uE)(`<h2 id="title"><a class="header-anchor" href="#title">#</a> title</h2><ul><li>\u7C7B\u578B: string</li><li>\u9ED8\u8BA4\u503C: APi\u63A5\u53E3\u6587\u6863</li></ul><p>\u9875\u9762\u7684\u6807\u9898\uFF0C\u663E\u793A\u5728\u5DE6\u4E0A\u89D2\u4E0E\u5C01\u9762\u9875</p><h2 id="copyright"><a class="header-anchor" href="#copyright">#</a> copyright</h2><ul><li>\u7C7B\u578B: string</li><li>\u9ED8\u8BA4\u503C: Powered By HG</li></ul><p>\u9875\u9762\u7684\u6807\u9898\uFF0C\u7248\u6743\u7533\u660E\uFF0C\u663E\u793A\u5728\u5C01\u9762\u9875</p><h2 id="controllers"><a class="header-anchor" href="#controllers">#</a> controllers</h2><ul><li>\u7C7B\u578B: Array</li><li>\u9ED8\u8BA4\u503C: undefined</li></ul><p>\u5217\u51FA\u9700\u8981\u751F\u6210\u63A5\u53E3\u6587\u6863\u7684\u63A7\u5236\u5668</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// config/apidoc.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">//\u751F\u6210\u6587\u6863\u7684\u63A7\u5236\u5668</span>
    <span class="token single-quoted-string string">&#39;controllers&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>
        <span class="token single-quoted-string string">&#39;api\\\\controller\\\\ApiTest&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;api\\\\controller\\\\User&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="versions"><a class="header-anchor" href="#versions">#</a> versions</h2><ul><li>\u7C7B\u578B: Array</li><li>\u9ED8\u8BA4\u503C: undefined</li></ul><p>\u8BBE\u7F6EAPI\u6587\u6863\u7684\u7248\u672C</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// config/apidoc.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">//\u8BBE\u7F6E\u53EF\u9009\u7248\u672C</span>
    <span class="token single-quoted-string string">&#39;versions&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token single-quoted-string string">&#39;title&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token single-quoted-string string">&#39;V1.0&#39;</span><span class="token punctuation">,</span><span class="token single-quoted-string string">&#39;folder&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token single-quoted-string string">&#39;v1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token single-quoted-string string">&#39;title&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token single-quoted-string string">&#39;V2.0&#39;</span><span class="token punctuation">,</span><span class="token single-quoted-string string">&#39;folder&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token single-quoted-string string">&#39;v2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="with-cache"><a class="header-anchor" href="#with-cache">#</a> with_cache</h2><ul><li>\u7C7B\u578B: boolean</li><li>\u9ED8\u8BA4\u503C: false</li></ul><p>\u662F\u5426\u5F00\u542F\u7F13\u5B58\uFF0C\u5F00\u542F\u540E\uFF0C\u5982\u5B58\u5728\u7F13\u5B58\u6570\u636E\u4F18\u5148\u53D6\u7F13\u5B58\u6570\u636E\uFF0C\u5F00\u542F\u540E\u9700\u624B\u52A8\u66F4\u65B0\u63A5\u53E3\u53C2\u6570\uFF0C\u5173\u95ED\u5219\u6BCF\u6B21\u5237\u65B0\u91CD\u65B0\u751F\u6210\u63A5\u53E3\u6570\u636E</p><h2 id="responses"><a class="header-anchor" href="#responses">#</a> responses</h2><ul><li>\u7C7B\u578B: string</li><li>\u9ED8\u8BA4\u503C: \u5982\u4E0B\u793A\u4F8B</li></ul><p>\u7EDF\u4E00\u7684\u8BF7\u6C42\u54CD\u5E94\u4F53\uFF0C\u6B64\u914D\u7F6E\u53EA\u505A\u5C55\u793A\u7528</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// config/apidoc.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u7EDF\u4E00\u7684\u8BF7\u6C42\u54CD\u5E94\u4F53</span>
    <span class="token single-quoted-string string">&#39;responses&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token single-quoted-string string">&#39;{
    &quot;code&quot;:&quot;\u72B6\u6001\u7801&quot;,
    &quot;message&quot;:&quot;\u64CD\u4F5C\u63CF\u8FF0&quot;,
    &quot;data&quot;:&quot;\u4E1A\u52A1\u6570\u636E&quot;,
    &quot;timestamp&quot;:&quot;\u54CD\u5E94\u65F6\u95F4\u6233&quot;
}&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="global-auth-key"><a class="header-anchor" href="#global-auth-key">#</a> global_auth_key</h2><ul><li>\u7C7B\u578B: string</li><li>\u9ED8\u8BA4\u503C: Authorization</li></ul><p>\u8BBE\u7F6E\u5168\u5C40Authorize\u65F6\u8BF7\u6C42\u5934headers\u643A\u5E26\u7684key\uFF0C\u5BF9\u5E94token\u7684key</p><h2 id="auth"><a class="header-anchor" href="#auth">#</a> auth</h2><ul><li>\u7C7B\u578B: Array</li></ul><p>\u8FDB\u5165\u63A5\u53E3\u95EE\u9875\u9762\u7684\u6743\u9650\u8BA4\u8BC1\u914D\u7F6E</p><h3 id="auth-with-auth"><a class="header-anchor" href="#auth-with-auth">#</a> auth.with_auth</h3><ul><li>\u7C7B\u578B: boolean</li><li>\u9ED8\u8BA4\u503C:false</li></ul><p>\u662F\u5426\u542F\u7528\u6743\u9650\u8BA4\u8BC1\uFF0C\u542F\u7528\u5219\u9700\u767B\u5F55</p><h3 id="auth-auth-password"><a class="header-anchor" href="#auth-auth-password">#</a> auth.auth_password</h3><ul><li>\u7C7B\u578B: string</li><li>\u9ED8\u8BA4\u503C:123456</li></ul><p>\u8FDB\u5165\u63A5\u53E3\u6587\u6863\u9875\u9762\u7684\u767B\u5F55\u5BC6\u7801</p><h2 id="definitions"><a class="header-anchor" href="#definitions">#</a> definitions</h2><ul><li>\u7C7B\u578B: string</li><li>\u9ED8\u8BA4\u503C: app\\common\\controller\\Definitions</li></ul><p>\u6307\u5B9A\u516C\u5171\u6CE8\u91CA\u5B9A\u4E49\u7684\u63A7\u5236\u5668\u5730\u5740</p><h2 id="filter-method"><a class="header-anchor" href="#filter-method">#</a> filter_method</h2><ul><li>\u7C7B\u578B: array</li><li>\u9ED8\u8BA4\u503C: \u5982\u4E0B\u793A\u4F8B</li></ul><p>\u6307\u5B9A\u516C\u5171\u6CE8\u91CA\u5B9A\u4E49\u7684\u63A7\u5236\u5668\u5730\u5740</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// config/apidoc.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u8FC7\u6EE4\u3001\u4E0D\u89E3\u6790\u7684\u65B9\u6CD5\u540D\u79F0</span>
    <span class="token single-quoted-string string">&#39;filter_method&#39;</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token punctuation">[</span>
        <span class="token single-quoted-string string">&#39;_empty&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;_initialize&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;__construct&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;__destruct&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;__get&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;__set&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;__isset&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;__unset&#39;</span><span class="token punctuation">,</span>
        <span class="token single-quoted-string string">&#39;__cal&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,40);function h(k,b){const g=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[p,(0,n.Wm)("div",l,[i,(0,n.Wm)("p",null,[o,(0,n.Wm)("a",r,[c,(0,n.Wm)(g)])])]),u],64)}const e={};e.render=h;const d=e}}]);
