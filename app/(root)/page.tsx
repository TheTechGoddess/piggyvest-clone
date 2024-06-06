"use client";
import React from "react";
import Table from "@/components/global/Table";

const data = [
  ["John Doe", "active", 15, "completed"],
  ["Jane Smith", "inactive", 5, "incomplete"],
  ["Alice Johnson", "active", 20, "completed"],
];

const headers = ["Full Name", "Status", "Total Ans", "Programs"];

const Home: React.FC = () => {
  const handleRowClick = (row: Array<any>, index: number) => {
    console.log("Row clicked:", row, index);
  };

  return (
    <div>
      <h1>My Table Page</h1>
      <Table
        data={data}
        headers={headers}
        showDetails={true}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default Home;
