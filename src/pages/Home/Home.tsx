import "./Home.less";
import Content from "@/components/Content/Content";
const Home = () => {
  return (
    <div className="home-container">
      <Content />
      <div className="home-footer">
        <p>
          <a href="https://beian.miit.gov.cn/">滇ICP备2024035356号-2</a>
        </p>
        <p>Copyright © 2024 leeHo. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;
