import{ak as s,x as n,A as r,a2 as p,L as o,aE as d,aa as t,v as c}from"./chunks/framework.Dr0Xaume.js";const g="/assets/zotero-group-new-group.DNXcpz6A.png",u="/assets/group-10.Dh88W3EL.png",h="/assets/group-11.vJ3OmGDv.png",b="/assets/group-12.DTr6SPA8.png",m="/assets/group-13.CZoKBkte.png",_="/assets/group-14.UYbA1skA.png",f="/assets/group-15.l9gYy6pz.png",P="/assets/group-16.CnQG3WXx.png",C=JSON.parse('{"title":"群组","description":"","frontmatter":{"title":"群组","icon":"user-group","authors":["Ali","Northword"],"date":"2023-06-28T21:19:17.000Z","updated":"2023-12-06T18:51:54.000Z"},"headers":[],"relativePath":"user-guide/group.md","filePath":"wiki/user-guide/group.md"}'),k={name:"user-guide/group.md"};function w(Z,e,q,y,x,v){const a=t("Badge"),l=t("NolebaseGitContributors"),i=t("NolebaseGitChangelog");return c(),n("div",null,[e[0]||(e[0]=r("h1",{id:"群组",tabindex:"-1"},[p("群组 "),r("a",{class:"header-anchor",href:"#群组","aria-label":'Permalink to "群组"'},"​")],-1)),o(a,{text:"高级"}),e[1]||(e[1]=d('<ul><li><strong>课题组协作、小组合作</strong>：文献条目及其附件（包括笔记注释）实时共享同步到群组成员的 Zotero 客户端（桌面端、移动端、网页端）。</li><li><strong>双向跨库分享文献条目</strong>：「我的文库」可与「群组文库」中的文献条目（item）进行双向跨库复制/移动。</li><li><strong>Zotero 的移动端（暂仅支持 iOS）支持阅读、修改群组的文献条目</strong>信息及其附件（笔记、全文 PDF 等）</li><li><strong>不限制群组成员数量</strong></li><li><strong>配合 Chartero 插件可以实时查看成员某文献条目的阅读时间</strong></li></ul><div class="warning custom-block"><p class="custom-block-title">群组依赖 Zotero 账号</p><p>群组的条目和附件同步均能且仅能通过 Zotero 官方同步服务同步，因此在使用群组功能前，你必须登录 Zotero 账户，如果你没有登录，请阅读 <a href="./sync#数据的同步">同步</a> 小节完成账号注册和登录。</p></div><h2 id="创建群组" tabindex="-1">创建群组 <a class="header-anchor" href="#创建群组" aria-label="Permalink to &quot;创建群组&quot;">​</a></h2><p>有两种方式创建群组：</p><ol><li><p>在 Zotero 客户端中点击如下按钮：</p><p><img src="'+g+'" alt="创建群组" loading="lazy"></p></li><li><p>在<a href="https://www.zotero.org/groups" target="_blank" rel="noreferrer">Zotero 群组页面</a> 点击 <code>Create a New Group</code> 按钮。</p></li></ol><p>在打开的页面中，为群组输入一个名字，选择<a href="#群组类型">群组的类型</a>，并依次进行<a href="#群组设置">群组设置</a>，即可完成创建。</p><h3 id="群组类型" tabindex="-1">群组类型 <a class="header-anchor" href="#群组类型" aria-label="Permalink to &quot;群组类型&quot;">​</a></h3><p>群组有三类，分别是 <code>私有群组 (Private)</code>、<code>公开, 限定成员制群组 (Public, Closed Membership)</code> 和 <code>公开, 开放成员群组 (Private)</code> 三类，下表对比了三种群组类型的特点。</p><table tabindex="0"><thead><tr><th>项</th><th>私有群组</th><th>公开，限定成员制</th><th>公开，开放成员</th></tr></thead><tbody><tr><td>谁可以看到</td><td>仅成员</td><td>所有人</td><td>所有人</td></tr><tr><td>谁可以加入</td><td>邀请</td><td>邀请或申请</td><td>所有人</td></tr><tr><td>条目附件共享</td><td>支持</td><td>支持</td><td>不支持</td></tr></tbody></table><p>群组类型也可以之后可以在群组设置继续更改。</p><h3 id="群组设置" tabindex="-1">群组设置 <a class="header-anchor" href="#群组设置" aria-label="Permalink to &quot;群组设置&quot;">​</a></h3><p>群组设置页面主要有三个设置项，分别对应条目的读取、编辑、附件的编辑三类权限。</p><ul><li>读取权限：谁可以看到该群组图书馆中的项目？ <ul><li>Anyone on the internet 所有人</li><li>Any group member 仅所有群组成员</li></ul></li><li>编辑权限：谁可以在该组的库中添加、编辑和删除项目？ <ul><li>Any group member 所有成员</li><li>Only group admins 仅群组管理员</li></ul></li><li>文件编辑权限：谁可以使用组中存储的文件？（公共开放组不能启用文件存储） <ul><li>Any group member 任何团体成员</li><li>Only group admins 仅群组管理员</li><li>No group file storage 无群组文件存储</li></ul></li></ul><p>关于群组成员、群组管理员等的设置，请见 <a href="#群组管理">群组管理</a> 小节。</p><h3 id="关于群组的附件" tabindex="-1">关于群组的附件 <a class="header-anchor" href="#关于群组的附件" aria-label="Permalink to &quot;关于群组的附件&quot;">​</a></h3><ol><li>一般用户默认会存储和分享群组空间只会占用创建者（即群主）的官方云存储空间（300M 免费）。</li><li>群组功能目前仅支持官方云储存空间进行同步附件（例如文献的 PDF、笔记等），因此创建「Private」/「Public Closed」群组类型的用户，建议使用 <a href="./sync#通过-webdav-同步附件">WebDAV 方案进行「我的文献库」的同步</a>，把 300M 免费空间留给群组内文献条目附件的同步。</li><li>如果 300M 空间用尽，可以进入 Zotero 官网，在右上角的 Upgrade Storage 中升级付费计划（需要国外 VISA 信用卡）。</li><li>Zotero 群组的付费存储空间只需要群主付费，其他成员无需承担。</li></ol><h2 id="加入群组" tabindex="-1">加入群组 <a class="header-anchor" href="#加入群组" aria-label="Permalink to &quot;加入群组&quot;">​</a></h2><h3 id="_1、官网群组搜索-🔍" tabindex="-1">1、官网群组搜索 🔍 <a class="header-anchor" href="#_1、官网群组搜索-🔍" aria-label="Permalink to &quot;1、官网群组搜索 🔍&quot;">​</a></h3><p>适用于 Public Closed、Public Open 两种类型的群组，所有人均可操作。</p><p>在 <a href="https://www.zotero.org/search/type/group" target="_blank" rel="noreferrer">Zotero 官网群组搜索页面</a>，可以通过群组的名称，搜索到目标群组。</p><p><img src="'+u+'" alt="搜索群组" loading="lazy"></p><p>在接下来的搜索结果页面中点击目标群组名称，进入该群组的主页</p><p><img src="'+h+'" alt="点击群组名称" loading="lazy"></p><p>在主页点击右侧的 Join，即可申请加入该群组。</p><p><img src="'+b+'" alt="群组详情页面" loading="lazy"></p><ul><li>Public Open 的群组点击 <code>Join</code> 之后即可加入</li><li>Public Closed 需要等管理员或者群主通过申请才可以加入</li></ul><p>Zotero 客户端重启之后即可在右侧&quot;群组文库&quot;看到所加入的群组。</p><h3 id="_2、群组链接-🔗" tabindex="-1">2、群组链接 🔗 <a class="header-anchor" href="#_2、群组链接-🔗" aria-label="Permalink to &quot;2、群组链接 🔗&quot;">​</a></h3><p>适用于 Public Closed、Public Open 两种类型的群组，所有人均可操作。</p><p>群组成员（群主、管理员、成员）进入 <a href="https://www.zotero.org/groups/" target="_blank" rel="noreferrer">Zotero 群组页面</a>，点击群组名称，进入群组页面，浏览器地址栏的网址即为群组链接，可以分享给他人，他人打开即可申请加入（同上图）。</p><p><img src="'+m+'" alt="群组页面链接" loading="lazy"></p><h3 id="_3、管理员邀请-✉️" tabindex="-1">3、管理员邀请 ✉️ <a class="header-anchor" href="#_3、管理员邀请-✉️" aria-label="Permalink to &quot;3、管理员邀请 ✉️&quot;">​</a></h3><p>适用于所有群组，包括 Private、Public Closed、Public Open 三种类型，仅群主和管理员可以操作。</p><p>群组成员（群主、管理员、成员）进入 <a href="https://www.zotero.org/groups/" target="_blank" rel="noreferrer">Zotero 群组页面</a>，点击群组名称下方的 <code>Members Settings</code></p><p><img src="'+_+'" alt="members settings" loading="lazy"></p><p>跳转后点击页面左下角 <code>Send More Invitations</code></p><p><img src="'+f+'" alt="发送邀请链接" loading="lazy"></p><p>在邀请成员界面的方框内，输入被邀请人的 Zotero 用户名或者注册 Zotero 时所用的电子邮箱。可以同时邀请多人（用英文逗号分隔即可），输入完成之后点击下方的 <code>Invite Members</code>，即可完成邀请。被邀请人注册 Zotero 时所用的邮箱将会受到邀请邮件，进入接受邀请即可。</p><p><img src="'+P+'" alt="输入被邀请者用户名" loading="lazy"></p><h2 id="群组管理" tabindex="-1">群组管理 <a class="header-anchor" href="#群组管理" aria-label="Permalink to &quot;群组管理&quot;">​</a></h2><p>群组成员（群主、管理员）进入<a href="https://www.zotero.org/groups/" target="_blank" rel="noreferrer">Zotero 群组页面</a>，点击群组名称下方的 <code>Manage Profile</code>，可以设置头像、名称、群组所属类别等信息，也可在此页面解散群组。</p><p>点击 <code>Manage Members</code> 可以管理成员，例如审批加群申请、新增成员、移除成员、改变成员权限等。</p><p>点击群组名进入群组详情页，右侧红色按钮 <code>leave</code> 可以退出群组，退出后需要重启 Zotero 客户端。</p>',43)),o(l),o(i)])}const N=s(k,[["render",w]]);export{C as __pageData,N as default};
