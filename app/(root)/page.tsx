"use client";
import React from "react";
import Table from "@/components/global/Table";
import Input from "@/components/global/Input";
import Button from "@/components/global/Button";

const data = [
  ["John Doe", "Lorem Ipsum", "https:RyAInFwdgL8=a922VVhoBhlSNUdR-0"],
  ["John Doe", "Lorem Ipsum", "https:RyAInFwdgL8=a922VVhoBhlSNUdR-0"],
  ["John Doe", "Lorem Ipsum", "https:RyAInFwdgL8=a922VVhoBhlSNUdR-0"],
  ["John Doe", "Lorem Ipsum", "https:RyAInFwdgL8=a922VVhoBhlSNUdR-0"],
];

const headers = ["Name", "Description", "Shortened URL"];

const Home: React.FC = () => {
  const handleRowClick = (row: Array<any>, index: number) => {
    console.log("Row clicked:", row, index);
  };

  return (
    <div className="">
      <div className=" md:w-[50%] lg:w-[35%]">
        <h1>Shorten URL</h1>
        <form action="" className="flex flex-col space-y-5 mt-6">
          <Input type="text" label="Name" placeholder="Input name" />
          <Input
            type="text"
            label="Website"
            placeholder="www.placeholder.com"
          />
          <Input
            type="text"
            label="Description"
            placeholder="Input description"
          />
          <Button>Shorten URL</Button>
        </form>
      </div>
      <div className="mt-20">
        <Table
          data={data}
          headers={headers}
          showDetails={true}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default Home;
