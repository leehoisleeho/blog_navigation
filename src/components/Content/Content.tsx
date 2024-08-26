import "./Content.less";
import WebSite from "../WebSite/WebSite";
import { WebSites } from "@/types";
import { useState } from "react";
const Content = () => {
  const [data, setData] = useState<WebSites[]>([
    {
      id: 1,
      title: "前端开发",
      url: "https://www.baidu.com",
      list: [
        {
          id: 1,
          name: "TS文档",
          url: "https://www.baidu.com",
          des: "TypeScript是JavaScript的一个超集，主要增加了类型系统和对ES6的支持",
        },
        {
          id: 2,
          name: "ES6文档",
          url: "https://www.baidu.com",
          des: "ECMAScript6(ES6)是JavaScript语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得JavaScript语言可以用来编写大型的复杂的应用",
        },
        {
          id: 3,
          name: "React文档",
          url: "https://www.baidu.com",
          des: "React是一个用于构建用户界面的 JAVASCRIPT 库。",
        },
        {
          id: 4,
          name: "Vue文档",
          url: "https://www.baidu.com",
          des: "Vue.js 是一套构建用户界面的渐进式框架。",
        },
        {
          id: 5,
          name: "Vue文档",
          url: "https://www.baidu.com",
          des: "Vue.js 是一套构建用户界面的渐进式框架。",
        },
        {
          id: 6,
          name: "Vue文档",
          url: "https://www.baidu.com",
          des: "Vue.js 是一套构建用户界面的渐进式框架。",
        },
      ],
    },
    {
      id: 2,
      title: "博客",
      url: "https://www.baidu.com",
      list: [
        {
          id: 5,
          name: "Nest文档",
          url: "https://www.baidu.com",
          des: "Nest 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。",
        },
        {
          id: 6,
          name: "Node文档",
          url: "https://www.baidu.com",
          des: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。",
        },
      ],
    },
  ]);
  return (
    <div className="content-container">
      <div className="content-title">
        <img src="/public/logo.png" alt="" />
        <h1>程序员常用网站导航</h1>
        <p>Don't repeat yourself</p>
      </div>
      <div className="content-main">
        {data.map((item) => {
          return <WebSite key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Content;
