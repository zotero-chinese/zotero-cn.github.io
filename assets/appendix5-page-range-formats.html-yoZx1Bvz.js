import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,e as o}from"./app-7Pd4QpyL.js";const a={},c=o('<h1 id="附录-v-页码范围格式" tabindex="-1"><a class="header-anchor" href="#附录-v-页码范围格式" aria-hidden="true">#</a> 附录 V 页码范围格式</h1><blockquote><p>[!warning] WORK IN PROGRESS<br> 此页面正在施工中。</p></blockquote><p><code>cs:style</code> 元素中的 <code>page-range-format</code> 表示了页码的缩写规则，其取值可能是：</p><p><code>&quot;chicago&quot;</code></p><table><thead><tr><th>第一个数字</th><th>第二个数字</th><th>例</th></tr></thead><tbody><tr><td>小于 100</td><td>使用所有的位数</td><td>3–10; 71–72</td></tr><tr><td>100 或者 100 的整数</td><td>使用所有的位数</td><td>100–104; 600–613; 1100–1123</td></tr><tr><td>100 到 109 （包括对应 100 的倍数的范围）</td><td>仅使用有变化的部分，忽略不需要的 0</td><td>107–8; 505–17; 1002–6</td></tr><tr><td>110 到 199 （包括对应 100 的倍数的范围）</td><td>根据需要使用两位数或者更多</td><td>321–25; 415–532; 11564–68; 13792–803</td></tr><tr><td>4 位数</td><td>如果数字是 4 位并且其中有 3 位不同，使用所有的位数</td><td>1496–1504; 2787–2816</td></tr></tbody></table><p><code>&quot;expanded&quot;</code></p><p>​ 扩展模式，不适用缩写。eg. 42–45、321–328、2787–2816</p><p><code>&quot;minimal&quot;</code></p><p>​ 第二个数字中重复的所有数字都被省略：42–5，321–8，2787–816</p><p><code>&quot;minimal-two&quot;</code></p><p>​ 和 <code>&quot;minimal&quot;</code> 类似，但当第二个数字有两个或者两个以上的数字时，第二个数字至少保留两位。</p>',11),r=[c];function p(n,i){return d(),e("div",null,r)}const l=t(a,[["render",p],["__file","appendix5-page-range-formats.html.vue"]]);export{l as default};
