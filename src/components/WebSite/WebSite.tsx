import "./Website.less";
import { WebSites } from "@/types";
const WebSite = ({ data }: { data: WebSites }) => {
  return (
    <div className="webSite">
      <div className="webSite-title">
        <img src="/public/logo.png" alt="" />
        <h1>{data.title}</h1>
      </div>
      <ul className="webSite-item">
        {data.list.map((item) => {
          return (
            <li key={item.id}>
              <div className="webSite-item-box">
                <img src="/public/logo.png" alt="" />
                <div className="webSite-item-info">
                  <h2>{item.name}</h2>
                  <p>{item.des}</p>
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
