import "./Content.less"
// @ts-ignore
import { WebSites, WebSiteList } from "@/types";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import WebSite from "@/components/WebSite/WebSite";
// @ts-ignore
import { getTitles, getWebsites } from "@/http/api";

const Content = () => {
  const [data, setData] = useState<WebSites[]>([]);
  useEffect(() => {
    async function getDate() {
      const webSites = await getWebsites();
      const titles = await getTitles();
      const _data: WebSites[] = [];
      titles.data.map((item: WebSites) => {
        _data.push({
          id: item.id,
          title: item.title,
          url: item.url,
          list: webSites.data.filter(
            (webSite: WebSiteList) => webSite.titleId === item.id
          ),
        });
      });
      setData(_data);
    }
    getDate();
  }, []);

  return (
    <div className="content-container">
      <div className="content-title">
        <img src={logo} alt="" />
        <h1>程序员常用网站导航</h1>
        <p>Don't repeat yourself</p>
      </div>
      <div className="content-main">
        {data.map((item: WebSites) => {
          return <WebSite key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Content;
