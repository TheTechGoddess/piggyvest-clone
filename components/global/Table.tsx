import React, { useState, useMemo } from "react";

interface TableComponentProps {
  data: Array<Array<any>>;
  headers: Array<string>;
  showDetails: boolean;
  onRowClick: (row: Array<any>, index: number) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  headers,
  showDetails,
  onRowClick,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((row) =>
      row.some((val) =>
        val.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);

  const handleRowClick = (row: Array<any>, index: number) => {
    onRowClick(row, index);
  };

  return (
    <div>
      <div className="overflow-x-auto hide-scrollbar">
        <table className="w-full border-collapse">
          <thead className="text-left bg-[#F2F4F7] text-[#757C86] font-medium text-sm">
            <tr>
              <th className="py-4 pl-4 text-left">S/N</th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="text-sm text-bodytext2 font-semibold px-3 overflow-hidden whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
              {showDetails && (
                <th className="text-sm text-bodytext2 pr-4 font-semibold">
                  Details
                </th>
              )}
            </tr>
          </thead>
          <tbody className="text-[#39404F] text-sm bg-white">
            {filteredData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-[#D2D2D4] cursor-pointer"
                onClick={() => handleRowClick(row, rowIndex)}
              >
                <td className="px-4 text-bodytext2 font-medium text-sm overflow-hidden text-left">
                  {rowIndex + 1}
                </td>
                {row.map((item, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-3 text-bodytext2 text-sm overflow-hidden text-left ${
                      colIndex !== 0
                        ? "py-4"
                        : "py-4 pl-0 text-header font-medium"
                    }`}
                  >
                    <div className="flex py-1 rounded">
                      <span
                        className={`${
                          headers[colIndex] === "Full Name" ||
                          headers[colIndex] === "Programs"
                            ? "max-w-[250px] min-w-[100px]"
                            : ""
                        }
                          ${
                            item === "active" || item === "completed"
                              ? "py-2 px-3 flex justify-center bg-[#DEFDE5] text-[#009621] rounded-2xl capitalize"
                              : ""
                          }
                          ${
                            headers[colIndex] === "Total Ans"
                              ? "py-2 px-3 flex justify-center bg-dark text-white rounded-2xl"
                              : ""
                          }
                          ${
                            item === "incomplete"
                              ? "py-2 px-3 flex justify-center bg-[#FFFAEB] text-[#F79009] rounded-2xl capitalize"
                              : ""
                          }`}
                      >
                        {item}
                      </span>
                      {["successful", "pending", "failed"].includes(item) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          style={{ strokeWidth: 1.5 }}
                        >
                          {/* Status icon path */}
                        </svg>
                      )}
                    </div>
                  </td>
                ))}
                {showDetails && (
                  <td className="pr-4 relative">
                    <p className="text-[#4FBFA3]">View</p>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
