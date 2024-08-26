import "./Sidebar.less";
const Sidebar = () => {
  const title = import.meta.env.VITE_TITLE;

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src='/src/assets/react.svg' alt="" />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
