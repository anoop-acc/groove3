import React from "react";
import "antd/dist/antd.css";

import { Table } from "antd";
import { useState } from "react";
const columns = [
  {
    title: "Document ID",
    dataIndex: "docid"
  },
  {
    title: "File Name",
    dataIndex: "filename"
  },
  {
    title: "Format Name",
    dataIndex: "formatname"
  },
  {
    title: "Status",
    dataIndex: "status"
  }
  ,
  {
    title: "Current Owner",
    dataIndex: "currentowner"
  }
  ,
  {
    title: "Received on",
    dataIndex: "receivedon"
  }
  ,
  {
    title: "Modified by",
    dataIndex: "modifiedby"
  }
  ,
  {
    title: "Modified on",
    dataIndex: "modifiedon"
  }
  ,
  {
    title: "Pending Age",
    dataIndex: "pendingage"
  }
];
const data = [];

for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    docid: `12345 ${i}`,
    filename: `LoanApplication`,
    formatname: `Application Form`,
    status: `Captured`,
    currentowner: `Nayah SIgh`,
    receivedon: `04/04/2020`,
    modifiedby: `Gustavo Hernandez Fer `,
    modifiedon: `04/04/2020`,
    pendingage: `5 days ${i}`
  });
}

const TableDefaultVScroll = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16
        }}
      ></div>
      <Table
       
        className={`datatable-groove ${props.variant}`}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 240, }} />
    </div>
  );
};

export default TableDefaultVScroll;
