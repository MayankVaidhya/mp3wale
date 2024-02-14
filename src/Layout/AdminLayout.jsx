import React from "react";
import AdminNavbar from "../admin/AdminNavbar";
import AdminFooter from "../admin/AdminFooter";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
