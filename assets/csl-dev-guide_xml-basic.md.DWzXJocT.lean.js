import{ak as l,x as h,aE as p,L as i,aa as a,v as e}from"./chunks/framework.Dr0Xaume.js";const u=JSON.parse('{"title":"XML 基础","description":"","frontmatter":{"title":"XML 基础","date":"2022-08-01T16:23:04.000Z","updated":"2022-08-03T10:17:53.000Z"},"headers":[],"relativePath":"csl-dev-guide/xml-basic.md","filePath":"wiki/csl-dev-guide/xml-basic.md"}'),k={name:"csl-dev-guide/xml-basic.md"};function E(d,s,r,o,g,c){const t=a("NolebaseGitContributors"),n=a("NolebaseGitChangelog");return e(),h("div",null,[s[0]||(s[0]=p(`<h1 id="xml-基础" tabindex="-1">XML 基础 <a class="header-anchor" href="#xml-基础" aria-label="Permalink to &quot;XML 基础&quot;">​</a></h1><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>此页面正在施工中。</p></div><p><code>CSL</code> 基于 <code>XML(eXtensible Markup Language)</code>。<code>XML</code> 是一种标记语言，这里只介绍基本的术语，以理解 <code>CSL</code> 文件格式。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf-8&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> standalone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ?&gt;  # 文档声明</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 这是一个注释 --&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  # 注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; # 根元素，文档的第一个元素，有且仅有一个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # 子元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # 属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # 元素文本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>上面的代码时一个简单的 <code>XML</code> 结构。为了方便说明使用了 <code>#</code>符号作为注释符号，<code>#</code>并不是真正的注释符号，<code>XML</code>的注释格式为文档中的第二行所示的形式。</p><p>第一行为声明，或者称为序言，总是在文档的最前面。包括了<code>XML</code> 的版本、编码信息以及是否依赖外部文档等。这一行代码会告诉解析器或浏览器这个文件应该按照 XML 规则进行解析。</p><p>第二行为 <code>XML</code> 文档的注释。格式为 <code>&lt;!-- 注释--&gt;</code>。</p><p>剩下的代码为 <code>XML</code> 文件的根元素，根元素也是元素，根元素是文档的第一个元素，有且仅有一个。</p><h2 id="元素" tabindex="-1">元素 <a class="header-anchor" href="#元素" aria-label="Permalink to &quot;元素&quot;">​</a></h2><p>元素由开始标签，元素内容和结束标签构成。其中可以包含属性、元素和注释。根元素包含了其他所有元素。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;内容&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>title</code> 为元素名。</p><p>元素有 4 种形式。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1. 空元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">RAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">RAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  或者 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">RAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2. 带有属性的空元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">RAM</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;  或者 &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">RAM</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">RAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3. 带有内容的元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;21000&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4. 带有内容和属性的元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Price</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MoneyKind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;RMB&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;21000&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  # MoneyKind 为属性  21000为元素值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">或者是</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">NotebookComputer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Style =&quot; LX2000&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CPU =&quot; PIII600&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RAM =&quot;128M &quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">NotebookComputer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>所有的元素都包含在根元素中，为根元素的子元素，子元素还还可以包含子元素。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>属性是对元素及其内容的描述，用 <code>=</code> 隔开。属性必须包含在一对单引号或者双引号之间。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Movie</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;09001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;   # 其中的 id 就是属性  后面的值就是属性值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;非诚勿扰&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  # 子元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;70&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">price</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Movie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 空元素的属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Rectangle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;80&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 属性的另外一种形式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">NotebookComputer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Style =&quot; LX2000&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CPU =&quot; PIII600&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RAM =&quot;128M &quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">NotebookComputer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>每个元素中，一个属性最多出现一次，一个属性只能有一个值。</p><p>如果属性有多个值，这需要采取 <code>XML</code> 协议以外的方式来表示，如采用逗号或分号间隔，对于 <a href="https://zh.wikipedia.org/wiki/CSS" target="_blank" rel="noreferrer">CSS</a> 类或标识符的名字可用空格来分隔。</p><h2 id="预定义实体表" tabindex="-1">预定义实体表 <a class="header-anchor" href="#预定义实体表" aria-label="Permalink to &quot;预定义实体表&quot;">​</a></h2><p><code>xml</code> 文件中某些符号无法正常表达，比如 <code>&lt;</code> 或者 <code>&gt;</code>，不处理的话会导致混乱。</p><table tabindex="0"><thead><tr><th>所定义的实体</th><th>所代表的字符</th></tr></thead><tbody><tr><td><code>&amp;lt;</code></td><td>&lt;</td></tr><tr><td><code>&amp;gt;</code></td><td>&gt;\`\`</td></tr><tr><td><code>&amp;quot;</code></td><td>&quot;</td></tr><tr><td><code>&amp;apos;</code></td><td>&#39;</td></tr><tr><td><code>&amp;amp;</code></td><td>&amp;</td></tr></tbody></table><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Para1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;John asked </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">What</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;apos;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s your name?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&amp;quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Para1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">中间的结果:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">John asked &quot;What&#39;s your name? &quot;</span></span></code></pre></div>`,24)),i(t),i(n)])}const m=l(k,[["render",E]]);export{u as __pageData,m as default};
