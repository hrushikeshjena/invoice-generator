import React from "react";

const Table = ({ list, total }) => {
  return (
    <>
      <table width="100%">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Item</td>
            <td className="font-bold">HSN/SAC</td>
            <td className="font-bold">QTY</td>
            <td className="font-bold">Unit</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">GST</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr className="my-1" key={item.id}>
                <td>{item.item}</td>
                <td>{item.hsn}</td>
                <td>{item.qty}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
                <td>{item.gst}%</td>
                <td>{item.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <h2 className="text-gray-800 text-xl font-bold flex justify-end mt-2">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
};

export default Table;
