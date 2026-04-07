import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Categories</h3>
        </div>
        <div className="sidebar-menu">
          <Link to="/shop?category=electronics" className="sidebar-link" onClick={closeSidebar}>
            <div className="sidebar-item">
              <span className="sidebar-icon">📱</span>
              <span>Electronics</span>
            </div>
          </Link>
          <Link to="/shop?category=clothing" className="sidebar-link" onClick={closeSidebar}>
            <div className="sidebar-item">
              <span className="sidebar-icon">👕</span>
              <span>Clothing</span>
            </div>
          </Link>
          <Link to="/shop?category=books" className="sidebar-link" onClick={closeSidebar}>
            <div className="sidebar-item">
              <span className="sidebar-icon">📚</span>
              <span>Books</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;