# 学习中心

> 该学习中心使用liascript开源团队开发的liascript解释器项目进行部署

### 为什么选择此项目

此项目具有高可用性，可使用固定的liascript模板使用解析器进行解析处理

可高效快速的实现文本解析以及多功能解析实现，并有效节省流量

该解析器使用github的api调用代理请求，国内可正常使用

另一个使用该解析器的原因就是可以支持在线代码运行，高扩展性，可以解析pyodide等多个功能模块，可在浏览器上加载pyodide js数据包进行numpy等分析程序的运行，给读者提供更好的阅读体验感，也给同学们一个不用搭建环境即可运行程序的一个简易环境！

### 项目架构
该项目使用nodejs的elm typescript等模块化程序进行架构

虽然安装环境官方并未给出，但经过多次踩坑实验过后得出一个最好用的nodejs版本和npm

若要尝试别的版本讲该项目中的node_module删除，并重新进行npm install的运行


因为该项目需要使用gcc编译模块以供加载解释器的程序运行界面，所以nodejs程序需要在有gcc和cmake的环境下进行build

其次该程序使用parcel进行构建，请自行搜索文档并安装其模块库，或直接 `npm install` 进行构建安装parcel程序

国内部分被墙的机器无法正常下载，所以建议使用手动安装该程序


本人使用npm对该程序在ubuntu 20.04系统上进行编译

nodejs版本：v12.22.12
npm版本：6.14.16

建议使用nvm对此版本nodejs进行安装

安装过程中会有gcc编译程序的过程，时间较长需要耐心等待！

然后使用 `npm run watch`的命令使其在开发环境下进行编译并打开端口查看

若没有问题则可以使用 `npm run build` 进行编译生成index文件，文件传到网站服务器【nginx/apache/...】配置文件root目录下即可运行

### 程序结构

该程序结构较复杂不一一列出

仅提示几个重要的文件名称

src/elm中 view.elm
src/elm/Index 中view.elm

以及static和resources文件夹
