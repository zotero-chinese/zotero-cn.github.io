import{ak as l,x as i,aE as p,L as e,aa as t,v as n}from"./chunks/framework.Dr0Xaume.js";const c="/assets/reader-%E7%A7%BB%E5%8A%A8%E9%80%89%E9%A1%B9%E5%8D%A1.DjQeFO7X.png",d="/assets/reader-%E6%B3%A8%E9%87%8A.lrXkTzwm.png",g="/assets/reader-%E5%88%92%E9%80%89.BkQjWY1M.png",h="/assets/%E6%B7%BB%E5%8A%A0%E7%AC%94%E8%AE%B0.DHXvXsPc.png",o="/assets/%E6%B7%BB%E5%8A%A0%E7%AC%94%E8%AE%B03.2bBRrFUH.png",m="/assets/reader-%E6%B3%A8%E9%87%8A%E8%AF%A6%E6%83%85.D3LnJLO9.png",b="/assets/%E6%96%B0%E5%BB%BA%E7%AC%94%E8%AE%B0.Dj_42NBl.png",u="/assets/%E6%B7%BB%E5%8A%A0%E7%AC%94%E8%AE%B0%E8%8F%9C%E5%8D%95.oSwpAzYe.png",E="/assets/betternotes-%E6%B7%BB%E5%8A%A0%E5%88%B0%E4%B8%BB%E7%AC%94%E8%AE%B0.BMNXNX44.png",f="/assets/betternotes-%E5%AF%BC%E5%87%BA%E7%AC%94%E8%AE%B0%E5%AF%B9%E8%AF%9D%E6%A1%86.Dha1PlZy.png",B="/assets/betternotes-%E5%AF%BC%E5%87%BA%E7%AC%94%E8%AE%B0.BAmgb5v0.png",A="/assets/%E5%AF%BC%E5%87%BA%E7%AC%94%E8%AE%B0.DwNJnySX.png",F=JSON.parse('{"title":"阅读文献、添加笔记","description":"","frontmatter":{"title":"阅读文献、添加笔记","icon":"book-open-reader","date":"2023-06-28T21:16:16.000Z"},"headers":[],"relativePath":"user-guide/take-notes.md","filePath":"wiki/user-guide/take-notes.md"}'),k={name:"user-guide/take-notes.md"};function _(q,a,P,y,z,D){const r=t("NolebaseGitContributors"),s=t("NolebaseGitChangelog");return n(),i("div",null,[a[0]||(a[0]=p('<h1 id="阅读文献、添加笔记" tabindex="-1">阅读文献、添加笔记 <a class="header-anchor" href="#阅读文献、添加笔记" aria-label="Permalink to &quot;阅读文献、添加笔记&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">待办</p><p>此章节尚未根据 Zotero 7 更新，界面或操作逻辑若有不一致请以实际为准。</p></div><p>Zotero 支持直接打开并批注 PDF，与内部的笔记、同步等功能深度集成。建议使用 Zotero 阅读器以获得最佳体验。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>内部阅读器所做的高亮、批注等<strong>不在原始 PDF 上</strong>，因此与第三方 PDF 阅读器的批注无法互通，也不支持非 Zotero 或非 WebDAV 的同步方式（关于同步，请见后续章节）。</p><p>如果你并没有特别依赖第三方 PDF 阅读器的某些特殊功能，建议使用 Zotero 阅读器。</p></div><h2 id="打开文献-pdf" tabindex="-1">打开文献 PDF <a class="header-anchor" href="#打开文献-pdf" aria-label="Permalink to &quot;打开文献 PDF&quot;">​</a></h2><p>在主界面中选中文献，双击或回车即可打开文献 PDF。默认以新标签页打开。</p><blockquote><p>💡 要以单独窗口打开文献，请在打开文献时按住 shift，或在标签页的标题上右键-&gt;移动标签-&gt;移动到新窗口。 <img src="'+c+'" alt="image.png" loading="lazy"></p></blockquote><p>Zotero 会自动记忆打开的文献与当前阅读位置。在下一次打开 Zotero 或在其他设备上打开同一个文献时，将会保持当前阅读位置。</p><h2 id="阅读器功能介绍" tabindex="-1">阅读器功能介绍 <a class="header-anchor" href="#阅读器功能介绍" aria-label="Permalink to &quot;阅读器功能介绍&quot;">​</a></h2><h3 id="界面区域" tabindex="-1">界面区域 <a class="header-anchor" href="#界面区域" aria-label="Permalink to &quot;界面区域&quot;">​</a></h3><ul><li>左侧是预览栏，可预览缩略图 / 目录；</li><li>右侧是信息/笔记栏；</li><li>上方横条是工具栏，可在此缩放、移动页面，或使用高亮注释（alt+1）、文字注释（alt+2）、框选注释（alt+3）等，设置注释颜色（alt+4 切换）；</li><li>中央是阅读区域。</li></ul><p><img src="'+d+'" alt="image.png" loading="lazy"></p><p>快捷键整理（针对 Zotero 7 进行测试）：</p><table tabindex="0"><thead><tr><th>快捷键</th><th>功能</th></tr></thead><tbody><tr><td><code>Alt + [数字 N]</code></td><td>打开/关闭第 N 个标注工具</td></tr><tr><td><code>[数字 N]</code></td><td>切换当前标注工具的颜色为第 N 个颜色</td></tr></tbody></table><h3 id="选中弹窗" tabindex="-1">选中弹窗 <a class="header-anchor" href="#选中弹窗" aria-label="Permalink to &quot;选中弹窗&quot;">​</a></h3><p>在阅读区域选中文本后，也可以通过弹窗来快速高亮内容（翻译按钮由 PDF Translate 插件提供，详见后续章节）：</p><p><img src="'+g+'" alt="image.png" loading="lazy"></p><p>如果此时右侧打开了笔记，则还可以将选中内容一键添加到笔记：</p><p><img src="'+h+'" alt="image.png" loading="lazy"></p><h3 id="在阅读器中创建笔记" tabindex="-1">在阅读器中创建笔记 <a class="header-anchor" href="#在阅读器中创建笔记" aria-label="Permalink to &quot;在阅读器中创建笔记&quot;">​</a></h3><p>右侧笔记栏中，点击 + 按钮即可创建笔记。条目笔记即属于当前文献条目的笔记；通过注释添加笔记即将文献中的所有注释（高亮等）添加到一个新的笔记。</p><p><img src="'+o+'" alt="image" loading="lazy"></p><h3 id="管理注释" tabindex="-1">管理注释 <a class="header-anchor" href="#管理注释" aria-label="Permalink to &quot;管理注释&quot;">​</a></h3><p>左侧预览栏中，可预览注释内容。每个注释分为三部分：内容，评论与标签。</p><p><img src="'+m+'" alt="image.png" loading="lazy"></p><p>内容即注释本身，例如高亮文本、框选的图片等。评论区在内容区下方，可以写文字。标签区在最下方，可以为注释添加标签。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>目前，注释的标签不支持搜索，也不支持从主界面的标签管理器中筛选。</p></div><p>注释支持拖放，可以复制或拖到笔记或外部软件。</p><p>在不同的设备上，只要正确设置了同步，注释内容也将一并同步过去。</p><h2 id="笔记功能介绍" tabindex="-1">笔记功能介绍 <a class="header-anchor" href="#笔记功能介绍" aria-label="Permalink to &quot;笔记功能介绍&quot;">​</a></h2><p>关于笔记的创建及相关功能，详见 <a href="https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/palqgb" target="_blank" rel="noreferrer">https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/palqgb</a>（由 Better Notes 插件提供的文档）。</p><p>此处仅作简单介绍。</p><blockquote><p>可了解 <a href="https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/biigg4" target="_blank" rel="noreferrer">Better Notes 插件</a>，更方便地在 Zotero 中做笔记，支持双链、支持模板、支持多种导出方式。</p></blockquote><p>笔记分为两种：</p><ul><li>独立笔记。没有父条目，在主界面库视图中，不需要展开即可看到。</li><li>条目笔记。具有父条目，一般在某条文献下，展开可看到。</li></ul><h3 id="创建笔记" tabindex="-1">创建笔记 <a class="header-anchor" href="#创建笔记" aria-label="Permalink to &quot;创建笔记&quot;">​</a></h3><p>创建笔记有多种方式：</p><ol><li><p>在 Zotero 主界面，中央上方工具栏选择新建笔记-&gt;新建独立笔记/添加子笔记；</p><p><img src="'+b+'" alt="image" loading="lazy"></p></li><li><p>在主界面，选中条目，从右键菜单创建条目子笔记；</p><p><img src="'+u+'" alt="image" loading="lazy"></p></li><li><p>在 PDF 阅读器中，右侧笔记栏右上角的 &#39;+&#39; 按钮可创建条目子笔记；</p><p><img src="'+o+'" alt="image" loading="lazy"></p></li><li><p>（需要 Better Notes 插件）在 PDF 阅读器中，左侧注释栏的每一个注释右上角的黄色花形按钮，参见 <a href="https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/pavzsz" target="_blank" rel="noreferrer">4.3 从注释创建快速笔记/Quick Note from Annotation</a></p><p><img src="'+E+'" alt="image" loading="lazy"></p></li></ol><h3 id="导出笔记" tabindex="-1">导出笔记 <a class="header-anchor" href="#导出笔记" aria-label="Permalink to &quot;导出笔记&quot;">​</a></h3><p>Zotero 提供了一项笔记导出为 markdown 的功能，但图片及许多格式不会被处理。</p><p>建议使用 Better Notes 提供的导出功能，可导出单条或多条笔记为 markdown 文件，或通过剪贴板复制到富文本编辑器（如 OneNote，Word），或导出为 PDF，并且支持自动同步更改（Zotero-&gt;外部导出目录）。关于导出，详见 <a href="https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/nxlngg" target="_blank" rel="noreferrer">4.8 笔记导出/Export</a>；关于同步，详见 <a href="https://zotero.yuque.com/books/share/f3fe159f-956c-4f10-ade3-c87559cacb60/aid2c3" target="_blank" rel="noreferrer">4.9 笔记同步/Sycn</a>。</p><p><img src="'+f+'" alt="image" loading="lazy"></p><p>可通过以下三种方式导出笔记：</p><ol><li><p>在主界面，选中一个或多个笔记条目，在右键菜单中通过 &quot; 导出笔记及条目子笔记 &quot; 或 &quot; 导出多个笔记 &quot;；</p><p><img src="'+B+'" alt="image" loading="lazy"></p></li><li><p>在笔记编辑器中，右上角工具栏导出按钮；</p><p><img src="'+A+'" alt="image" loading="lazy"></p></li><li><p>（不推荐）在主界面中，通过右键菜单使用 Zotero 自带的笔记导出功能。</p></li></ol>',44)),e(r),e(s)])}const x=l(k,[["render",_]]);export{F as __pageData,x as default};
