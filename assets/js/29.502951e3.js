(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{482:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"nginx-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-使用"}},[t._v("#")]),t._v(" nginx 使用")]),t._v(" "),a("p",[t._v("Nginx 是一个免费的，开源的，高性能的 HTTP 服务器和反向代理，以及 IMAP / POP3 代理服务器。 Nginx 以其高性能，稳定性，丰富的功能，简单的配置和低资源消耗而闻名。很多高知名度的网站都使用 Nginx，如：Netflix，GitHub，SoundCloud，MaxCDN 等。")]),t._v(" "),a("p",[t._v("Nginx 有一个主线程（ master process）和几个工作线程（worker process）。主线程的目的是"),a("strong",[t._v("加载")]),t._v("和"),a("strong",[t._v("验证")]),t._v("配置文件、"),a("strong",[t._v("维护")]),t._v("工作线程。")]),t._v(" "),a("p",[t._v("工作线程处理实际的请求，Nginx 采用"),a("strong",[t._v("基于事件")]),t._v("的模型和"),a("strong",[t._v("依赖操作系统")]),t._v("的机制在工作线程之间高效地分发请求。工作线程的数量可配置，也可自动调整为服务器 CPU 的数量。")]),t._v(" "),a("p",[t._v("Nginx 及其模块的工作方式由配置文件确定。 默认情况下，配置文件名为 "),a("code",[t._v("nginx.conf")]),t._v("，放在 "),a("code",[t._v("/usr/local/nginx/conf")]),t._v(" 、"),a("code",[t._v("/etc/nginx")]),t._v(" 或者 "),a("code",[t._v("/usr/local/etc/nginx")]),t._v(" 文件夹中。")]),t._v(" "),a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),a("p",[t._v("Nginx 启动之后，可以使用以下命令控制:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Copynginx -s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("signal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("其中"),a("code",[t._v("-s")]),t._v("意思是向主进程发送信号，"),a("code",[t._v("signal")]),t._v("可以为以下四个中的一个:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("stop")]),t._v(" — 快速关闭")]),t._v(" "),a("li",[a("code",[t._v("quit")]),t._v(" — 优雅关闭")]),t._v(" "),a("li",[a("code",[t._v("reload")]),t._v(" — 重新加载配置文件")]),t._v(" "),a("li",[a("code",[t._v("reopen")]),t._v(" — 重新打开日志文件")])]),t._v(" "),a("p",[t._v("当运行"),a("code",[t._v("nginx -s quit")]),t._v("时，Nginx 会等待工作进程处理完成当前请求，然后将其关闭。当你修改配置文件后，并不会立即生效，而是等待重启或者收到"),a("code",[t._v("nginx -s reload")]),t._v("信号。")]),t._v(" "),a("p",[t._v("当 Nginx 收到 "),a("code",[t._v("nginx -s reload")]),t._v(" 信号后，首先检查配置文件的语法。语法正确后，主线程会开启新的工作线程并向旧的工作线程发送关闭信号，如果语法不正确，则主线程回滚变化并继续使用旧的配置。当工作进程收到主进程的关闭信号后，会在处理完当前请求之后退出。")]),t._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("p",[t._v("Nginx 配置的核心是定义要处理的 "),a("code",[t._v("URL")]),t._v(" 以及如何响应这些 "),a("code",[t._v("URL")]),t._v(" 请求，即定义一系列的**虚拟服务器（Virtual Servers）**控制对来自特定域名或者 IP 的请求的处理。")]),t._v(" "),a("p",[t._v("每一个虚拟服务器定义一系列的 "),a("code",[t._v("location")]),t._v(" 控制处理特定的 URI 集合。每一个"),a("code",[t._v("location")]),t._v("定义了对映射到自己的请求的处理场景，可以返回一个文件或者代理此请求。")]),t._v(" "),a("p",[t._v("Nginx 由不同的模块组成，这些模块由配置文件中指定的指令控制。 指令分为"),a("strong",[t._v("简单指令")]),t._v("和"),a("strong",[t._v("块指令")]),t._v("。")]),t._v(" "),a("p",[t._v("一个简单指令包含"),a("strong",[t._v("指令名称")]),t._v("和"),a("strong",[t._v("指令参数")]),t._v("，以空格分隔，以分号（"),a("code",[t._v(";")]),t._v("）结尾。 块指令与简单指令类似，但是由大括号（"),a("code",[t._v("{")]),t._v("和"),a("code",[t._v("}")]),t._v("）包围。 如果块指令大括号中包含其他指令，则称该指令为上下文（如： "),a("code",[t._v("events")]),t._v(", "),a("code",[t._v("http")]),t._v(", "),a("code",[t._v("server")]),t._v(" 和 "),a("code",[t._v("location")]),t._v("）。")]),t._v(" "),a("p",[t._v("配置文件中的放在上下文之外的指令默认放在"),a("strong",[t._v("主配置文件")]),t._v("中（类似继承主配置文件）。 "),a("code",[t._v("events")]),t._v(" 和 "),a("code",[t._v("http")]),t._v(" 放置在主配置文件中，"),a("code",[t._v("server")]),t._v(" 放置在"),a("code",[t._v("http")]),t._v("块指令中，"),a("code",[t._v("location")]),t._v("放置在"),a("code",[t._v("server")]),t._v("块指令中。")]),t._v(" "),a("p",[t._v("配置文件的注释以 "),a("code",[t._v("#")]),t._v(" 开始。")]),t._v(" "),a("h2",{attrs:{id:"静态内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态内容"}},[t._v("#")]),t._v(" 静态内容")]),t._v(" "),a("p",[t._v("Web 服务器一个重要的功能是服务静态文件（图像或静态 HTML 页面）。例如，Nginx 可以很方便的让服务器从"),a("code",[t._v("/data/www")]),t._v(" 获取 html 文件，从"),a("code",[t._v("/data/images")]),t._v("获取图片来返回给客户端，这只需要在"),a("code",[t._v("http")]),t._v("块指令中的"),a("code",[t._v("server")]),t._v("块指令中设置两个"),a("code",[t._v("location")]),t._v("块指令。")]),t._v(" "),a("p",[t._v("首先，创建 "),a("code",[t._v("/data/www")]),t._v(" 目录，并放入 "),a("code",[t._v("index.html")]),t._v("，创建 "),a("code",[t._v("/data/images")]),t._v(" 目录并在其中放置一些图片。")]),t._v(" "),a("p",[t._v("接下来，打开配置文件。 创建一个 "),a("code",[t._v("server")]),t._v(" 块：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copyhttp")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通常，配置文件可以包括多个 "),a("code",[t._v("server")]),t._v(" 块，它们以"),a("strong",[t._v("端口")]),t._v("和"),a("strong",[t._v("服务器名称")]),t._v("来区分。当 Nginx 决定某一个 "),a("code",[t._v("server")]),t._v(" 处理请求后，它将请求头中的 "),a("code",[t._v("URI")]),t._v(" 和 "),a("code",[t._v("server")]),t._v(" 块中的 "),a("code",[t._v("location")]),t._v(" 块进行对比。\n加入 "),a("code",[t._v("location")]),t._v(" 块指令到 "),a("code",[t._v("server")]),t._v(" 中：")]),t._v(" "),a("p",[t._v("将以下位置块添加到服务器块：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copylocation")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data/www")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面的 "),a("code",[t._v("location")]),t._v(" 块指定 "),a("code",[t._v("/")]),t._v(" 前缀与请求中的 "),a("code",[t._v("URI")]),t._v(" 对比。对于匹配的请求，"),a("code",[t._v("URI")]),t._v(" 将被添加到 "),a("code",[t._v("root")]),t._v(" 指令中指定的路径，即 "),a("code",[t._v("/data/www")]),t._v("，以此形成本地文件系统的路径，如访问"),a("code",[t._v("http://localhost/bog/welcome.html")]),t._v("，对应服务器文件路径为"),a("code",[t._v("/data/www/bog/welcome.html")]),t._v("。 如果 "),a("code",[t._v("URI")]),t._v(" 匹配多个 "),a("code",[t._v("location")]),t._v(" 块，Nginx 采用"),a("strong",[t._v("最长前缀匹配原则")]),t._v("（类似计算机网络里面的 IP 匹配）， 上面的 "),a("code",[t._v("location")]),t._v(" 块前缀长度为 1，因此只有当所有其他 "),a("code",[t._v("location")]),t._v(" 块匹配时，才使用该块。")]),t._v(" "),a("p",[t._v("接下来，添加第二个位置块：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copylocation")]),t._v(" /images/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("它将匹配以"),a("code",[t._v("/images/")]),t._v("（"),a("code",[t._v("/")]),t._v(" 也匹配这样的请求，但具有较短的前缀）开始的请求。")]),t._v(" "),a("p",[a("code",[t._v("server")]),t._v(" 块的最终配置如下：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copyserver")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data/www")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /images/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("到目前为止，这已经是一个可以正常运行的服务器，它监听端口 80，并且可以在本地计算机上访问 "),a("code",[t._v("http://localhost/")]),t._v("。 对于 "),a("code",[t._v("/images/")]),t._v(" 开头的请求，服务器将从 "),a("code",[t._v("/data/images")]),t._v(" 目录发送文件。 如，对于 "),a("code",[t._v("http://localhost/images/example.png")]),t._v(" 请求，nginx 将响应 "),a("code",[t._v("/data/images/example.png")]),t._v("文件。 如果不存在，nginx 将返回 404。"),a("code",[t._v("URI")]),t._v(" 不以 "),a("code",[t._v("/images/")]),t._v(" 开头的请求将映射到 "),a("code",[t._v("/data/www")]),t._v(" 目录。 例如，对于 "),a("code",[t._v("http://localhost/some/example.html")]),t._v(" 请求，nginx 将响应 "),a("code",[t._v("/data/www/some/example.html")]),t._v(" 文件。")]),t._v(" "),a("h2",{attrs:{id:"代理服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理服务器"}},[t._v("#")]),t._v(" 代理服务器")]),t._v(" "),a("p",[t._v("Nginx 的一个常见应用是将其设置为代理服务器（Proxy Server），即接受客户端的请求并将其转发给代理服务器，再接受代理服务器发来的响应，将它们发送到客户端。")]),t._v(" "),a("p",[t._v("比如我们可以用一个 Nginx 实例实现对图片文件的请求使用本地文件系统，而其他请求转发到代理服务器。")]),t._v(" "),a("p",[t._v("首先，向 Nginx 的配置文件中添加一个 "),a("code",[t._v("server")]),t._v(" 块来定义代理服务器：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copyserver")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data/up1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此服务器侦听端口 8080，并将所有请求映射到本地文件系统上的 "),a("code",[t._v("/data/up1")]),t._v(" 目录。 创建此目录并将 "),a("code",[t._v("index.html")]),t._v(" 放入其中。 注意，"),a("code",[t._v("root")]),t._v(" 指令放在 "),a("code",[t._v("server")]),t._v(" 上下文中，这样 当 "),a("code",[t._v("location")]),t._v(" 块中不含 "),a("code",[t._v("root")]),t._v(" 指令时将使用所属 "),a("code",[t._v("server")]),t._v(" 的 "),a("code",[t._v("root")]),t._v(" 指令。")]),t._v(" "),a("p",[t._v("接下来，使用上一节中的服务器配置，并将其修改为代理服务器配置。 在第一个位置块中，加上"),a("code",[t._v("proxy_pass")]),t._v("指令：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copyserver")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy_pass指令的参数为：协议+主机名+端口号")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /images/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("修改第二个 匹配 "),a("code",[t._v("/images/")]),t._v(" 前缀的 "),a("code",[t._v("location")]),t._v(" 块，使其与请求图像文件的扩展名相匹配：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copylocation")]),t._v(" ~ \\.(gif|jpg|png)$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data/images")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("该参数是一个正则表达式，匹配以.gif，.jpg 或.png 结尾的所有 URI。 正则表达式应该以 "),a("code",[t._v("~")]),t._v(" 开头。 相应的请求将映射到 "),a("code",[t._v("/data/images")]),t._v(" 目录。")]),t._v(" "),a("p",[t._v("当 Nginx 选择一个 "),a("code",[t._v("location")]),t._v(" 块来处理请求时，它首先检查指定 "),a("code",[t._v("location")]),t._v(" 块的前缀，记住具有最长前缀的 "),a("code",[t._v("location")]),t._v(" 块，然后检查正则表达式。 如果与正则表达式匹配， Nginx 选择此 "),a("code",[t._v("location")]),t._v(" 块，否则，选择先前记住的 "),a("code",[t._v("location")]),t._v(" 块。")]),t._v(" "),a("p",[t._v("代理服务器的最终配置如下：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copyserver")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8080/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~ \\.(gif|jpg|png)$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data/images")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此服务器将过滤以.gif，.jpg 或.png 结尾的请求，并将它们映射到 "),a("code",[t._v("/data/images")]),t._v(" 目录（通过向 "),a("code",[t._v("root")]),t._v(" 指令的参数添加请求的 URI），并将所有其他请求发送给上面配置的代理服务器。")]),t._v(" "),a("p",[t._v("这样，图片和其他请求就可以使用不同的服务器来处理。")]),t._v(" "),a("h2",{attrs:{id:"fastcgi-代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastcgi-代理"}},[t._v("#")]),t._v(" FastCGI 代理")]),t._v(" "),a("p",[t._v("Nginx 可用于将请求路由到 FastCGI 服务器。快速通用网关接口（Fast Common Gateway Interface／FastCGI）是一种让交互程序与 Web 服务器通信的协议。因此 Nginx 可以将请求路由到 FastCGI 运行的应用程序，如 PHP 程序。")]),t._v(" "),a("p",[t._v("使用 FastCGI 服务器的最基本的 Nginx 配置包括使用 "),a("code",[t._v("fastcgi_pass")]),t._v(" 指令而不是 "),a("code",[t._v("proxy_pass")]),t._v(" 指令，以及使用 "),a("code",[t._v("fastcgi_param")]),t._v(" 指令来设置传递给 FastCGI 服务器的参数。 假设 FastCGI 服务器可在 "),a("code",[t._v("localhost:9000")]),t._v(" 上访问。 以上一节中的代理服务器配置为基础，使用"),a("code",[t._v("fastcgi_pass")]),t._v("指令替换"),a("code",[t._v("proxy_pass")]),t._v("指令，并将参数更改为 "),a("code",[t._v("localhost:9000")]),t._v(" 。 在 PHP 中， "),a("code",[t._v("SCRIPT_FILENAME")]),t._v(" 参数用于确定脚本名称，而 "),a("code",[t._v("QUERY_STRING")]),t._v(" 参数用于传递请求参数。 生成的配置将是：")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Copyserver")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fastcgi_pass")]),t._v("  localhost:9000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fastcgi_param")]),t._v(" SCRIPT_FILENAME "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_script_name")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fastcgi_param")]),t._v(" QUERY_STRING    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query_string")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~ \\.(gif|jpg|png)$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" /data/images")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这将设置一个服务器，将路由除静态图像以外的所有请求到运行在 "),a("code",[t._v("localhost:9000")]),t._v(" 的 FastCGI 服务器。")]),t._v(" "),a("h2",{attrs:{id:"gzip-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip-压缩"}},[t._v("#")]),t._v(" gzip 压缩")]),t._v(" "),a("ul",[a("li",[t._v("gzip 配置的常用参数")]),t._v(" "),a("li",[t._v("gzip on|off;  #是否开启 gzip")]),t._v(" "),a("li",[t._v("gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)")]),t._v(" "),a("li",[t._v("gzip_comp_level [1-9] #推荐 6 压缩级别(级别越高,压的越小,越浪费 CPU 计算资源)")]),t._v(" "),a("li",[t._v("gzip_disable #正则匹配 UA 什么样的 Uri 不进行 gzip")]),t._v(" "),a("li",[t._v("gzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)")]),t._v(" "),a("li",[t._v("gzip_http_version 1.0|1.1 # 开始压缩的 http 协议版本(可以不设置,目前几乎全是 1.1 协议)")]),t._v(" "),a("li",[t._v("gzip_proxied          # 设置请求者代理服务器,该如何缓存内容")]),t._v(" "),a("li",[t._v("gzip_types text/plain application/xml # 对哪些类型的文件用压缩 如 txt,xml,html ,css")]),t._v(" "),a("li",[t._v("gzip_vary on|off  # 是否传输 gzip 压缩标志")])]),t._v(" "),a("p",[t._v("例如 以下是配置")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_buffers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4K")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_comp_level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_min_length")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_types")]),t._v(" application/javascript text/css text/xml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_disable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MSIE [1-6]\\."')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置禁用gzip条件，支持正则。此处表示ie6及以下不启用gzip（因为ie低版本不支持）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("gzip_vary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"查看安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看安装"}},[t._v("#")]),t._v(" 查看安装")]),t._v(" "),a("p",[t._v("查看软件安装路径\n"),a("code",[t._v("whereis nginx")])]),t._v(" "),a("p",[t._v("查询运行文件所在路径\n"),a("code",[t._v("which nginx")])]),t._v(" "),a("p",[a("code",[t._v("nginx -t")]),t._v(" 检查配置文件")]),t._v(" "),a("h2",{attrs:{id:"引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://lufficc.com/blog/nginx-for-beginners",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lufficc.com/blog/nginx-for-beginners"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/qianpangzi/p/10922420.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/qianpangzi/p/10922420.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);