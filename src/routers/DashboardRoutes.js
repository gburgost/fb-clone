import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Feed from "../Feed";

export const DashboardRoutes = () => {
  return (
    <>
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};
