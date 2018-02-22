# Koa2

> A Koa2 project, 爬虫的后台项目    
通过 node 的 http 核心模块获取目标网址 [easyvoa](http://www.esayvoa.com) 的页面, 使用 cheerio 分析页面获取主要数据返回.

## 启动

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start
```
## 环境要求

- node 7.6 +
- async/await
- promise

## 工具

- [koa2](https://github.com/koajs/koa)
- [cheerio](https://github.com/cheeriojs/cheerio)

## api
- api/home
``` bash
{
  "ret": true,
  "data": {
    "list": [
      {
        "id": 10002,
        "category": "[ AS IT IS ]",
        "title": "American Religious Leader Billy Graham Dies(2018-02-22)",
        "link": "/detail/AS_IT_IS/20012.html"
      },
      ...
    ]
  }
}
```
- api/common
``` bash
{
  "ret": true,
  "data": {
    "list": [
      {
        "id": 10000,
        "title": "大家说英语",
        "link": "/list/lt/index.html"
      },
      ...
     ],
     "category": [
        {
          "title": "常速英语",
          "link": "/list/voa-standard-english/index.html",
          "list": [
            {
              "id": 10000,
              "title": "音频",
              "link": "/list/voa-standard-english/mp3/index.html"
             },
             ...
           ]
         },
         ...
      ]
   }
 }
```
- detail/*
``` bash
{
  "ret": true,
  "data": {
    "title": "大家说英语：20110226 MP3在线课程 复习课程",
    "pubdate": "2018-01-24 06:24",
    "count": "320",
    "mp3": "http://dl.easyvoa.com/lets/20110226uji.mp3",
    "content": "\n\t\t\t\t\t<div id=\"playbar\">\n\t\t\t\t\t<script language=\"javascript\" type=\"text/javascript\">Player('http://dl.easyvoa.com/lets/20110226uji.mp3');</script>\n\t\t\t\t\t  <a href=\"http://dl.easyvoa.com/lets/20110226uji.mp3\">&#x4E0B;&#x8F7D;&#x97F3;&#x9891;</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div id=\"content_top_ad\">\n\t\t\t\t\t\t<script async src=\"http://www.easyvoa.com//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n\t\t\t\t\t\t<!-- 内页正方形 -->\n\t\t\t\t\t\t<ins class=\"adsbygoogle\" style=\"display:inline-block;width:336px;height:280px\" data-ad-client=\"ca-pub-5658918148921061\" data-ad-slot=\"0460124899\"></ins>\n\t\t\t\t\t\t<script>\n\t\t\t\t\t\t(adsbygoogle = window.adsbygoogle || []).push({});\n\t\t\t\t\t\t</script>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<p><strong>Easyvoa&#x4E0E;&#x7A7A;&#x4E2D;&#x82F1;&#x8BED;&#x6559;&#x5BA4;&#x5409;&#x6797;&#x51FA;&#x7248;&#x793E;&#x5408;&#x4F5C;&#xFF0C;&#x63A8;&#x51FA;&#x7A7A;&#x4E2D;&#x82F1;&#x8BED;&#x5728;&#x7EBF;&#x5B66;&#x4E60;&#x5185;&#x5BB9;&#xFF0C;&#x4E3A;&#x4FDD;&#x62A4;&#x7248;&#x6743;&#xFF0C;&#x4E0D;&#x5F71;&#x54CD;&#x7A7A;&#x82F1;&#x7684;&#x6742;&#x5FD7;&#x9500;&#x552E;&#xFF0C;&#x53EA;&#x63D0;&#x4F9B;&#x4E24;&#x5E74;&#x524D;&#x7A7A;&#x82F1;&#x7684;&#x5B66;&#x4E60;&#x8D44;&#x6599;&#x3002;&#x5982;&#x679C;&#x60A8;&#x559C;&#x6B22;&#x7A7A;&#x4E2D;&#x82F1;&#x8BED;&#x6559;&#x5BA4;&#xFF0C;&#x6B22;&#x8FCE;&#x52A0;&#x5165; Easyvoa&#x7A7A;&#x82F1;&#x7FA4;115390136&#x3002;</strong></p>\n\t\t\t\t\n\t\t\t\t"
  }
}
```
- list/*
``` bash
{
  "ret": true,
  "data": {
    "list": [
      {
        "id": 10002,
        "title": "大家说英语：20110226 MP3在线课程 复习课程",
        "pubdate": "",
        "link": "/detail/lt/10533.html"
      },
      ...
    ]
  }
}
```
