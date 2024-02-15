import React from "react";

const Table = ({ list, total }) => {
  return (
    <>
      <table width="100%">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Tax Type</td>
            <td className="font-bold">Taxable Amount</td>
            <td className="font-bold">Rate</td>
            <td className="font-bold">Tax Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr className="my-1" key={item.id}>
                <td>{item.taxType}</td>
                <td>{item.taxableAmount}</td>
                <td>{item.rate}</td>
                <td>{item.taxAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <div>
        <h2 className="text-gray-800 text-xl font-bold flex justify-end mt-2">
          Rs. {total.toLocaleString()}
        </h2>
      </div> */}
    </>
  );
};

export default Table;
