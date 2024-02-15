import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TableForm = ({
  item,
  setItem,
  hsn,
  setHsn,
  qty,
  setQty,
  unit,
  setUnit,
  price,
  setPrice,
  gst,
  setGst,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item || !qty || !price || !gst) {
      alert("Fill all details!!");
    } else {
      const newAmount = parseFloat(qty) * parseFloat(price);
      const newTotal = newAmount * (1 + parseFloat(gst) / 100);

      const newItems = {
        id: uuidv4(),
        item,
        hsn,
        qty,
        unit,
        price,
        gst,
        amount: newAmount,
        total: newTotal,
      };

      setList([...list, newItems]);

      // Clear input fields
      setItem("");
      setHsn("");
      setQty("");
      setUnit("");
      setPrice("");
      setGst("");
      setIsEditing(false);
    }
  };

  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setItem(editingRow.item);
    setHsn(editingRow.hsn);
    setQty(editingRow.qty);
    setUnit(editingRow.unit);
    setPrice(editingRow.price);
    setGst(editingRow.gst);
    setAmount(editingRow.amount);
  };

  useEffect(() => {
    let sum = 0;
    list.forEach((row) => {
      sum += row.total;
    });
    setTotal(sum);
  }, [list]);

  return (
    <div className="tableform">
      <form onSubmit={handleSubmit}>
        <div className="desc">
          <label htmlFor="description">Enter product description</label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="Enter Item"
            autoComplete="off"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="quan">
          <div>
            <label htmlFor="hsn">Enter product HSN/SAC Code</label>
            <input
              type="text"
              name="hsn"
              id="hsn"
              placeholder="Enter HSN/SAC"
              autoComplete="off"
              value={hsn}
              onChange={(e) => setHsn(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="qty">Enter product Quantity</label>
            <input
              type="text"
              name="qty"
              id="qty"
              placeholder="Enter Item Quantity"
              autoComplete="off"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="unit">Enter product unit</label>
            <input
              type="text"
              name="unit"
              id="unit"
              placeholder="Enter Unit"
              autoComplete="off"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Enter product price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Enter Item Price"
              autoComplete="off"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gst">Enter product GST</label>
            <input
              type="text"
              name="gst"
              id="gst"
              placeholder="Enter GST %"
              autoComplete="off"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="total">Enter product amount</label>
            <p>{total}</p>
          </div>
        </div>

        <button
          type="submit"
          className=" my-3 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Editing Table Item" : "Add Table Item"}
        </button>
      </form>

      <table width="100%" className="my-10">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Item</td>
            <td className="font-bold">HSN/SAC</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Unit</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">GST</td>
            <td className="font-bold">Total Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr className="my-2" key={item.id}>
                <td>{item.item}</td>
                <td>{item.hsn}</td>
                <td>{item.qty}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
                <td>{item.gst}</td>
                <td className="amount">{item.total}</td>
                <td>
                  <button
                    className=" font-bold bg-red-500 text-white p-1 rounded shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300"
                    onClick={() => deleteRow(item.id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
                <td>
                  <button
                    className=" font-bold bg-green-500 text-white p-1 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
                    onClick={() => editRow(item.id)}
                  >
                    <AiOutlineEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <h2 className="text-gray-800 text-2xl font-bold flex justify-end my-2">
          Rs. {total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
};

export default TableForm;
