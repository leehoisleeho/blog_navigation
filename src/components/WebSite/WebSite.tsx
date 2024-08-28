import "./Website.less";
import { WebSites, WebSiteList } from "../../types";
// 获取环境变量的接口地址
const baseUrl = import.meta.env.VITE_API_BASEURL;

const WebSite = ({ data }: { data: WebSites }) => {
  const handleClick = (url: string) => {
    window.open(url);
  };
  return (
    <div className="webSite">
      <div className="webSite-title">
        <img src={baseUrl + data.url} alt="" />
        <h1>{data.title}</h1>
      </div>
      <ul className="webSite-item">
        {data.list.map((item: WebSiteList) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                handleClick(item.webSiteUrl);
              }}
            >
              <div className="webSite-item-box">
                <img src={baseUrl + item.url} alt="" />
                <div className="webSite-item-info">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WebSite;
