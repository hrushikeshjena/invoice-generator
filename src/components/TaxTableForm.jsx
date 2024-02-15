import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TaxTableForm = ({
  list,
  setList,
  total,
  setTotal,
}) => {
  const [taxType, setTaxType] = useState("");
  const [taxableAmount, setTaxableAmount] = useState("");
  const [rate, setRate] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taxableAmount || !rate) {
      alert("Fill in all details!!");
    } else {
      const newItems = {
        id: uuidv4(),
        taxType,
        taxableAmount,
        rate,
        taxAmount,
      };

      setList([...list, newItems]);

      // Clear input fields
      setTaxType("");
      setTaxableAmount("");
      setRate("");
      setTaxAmount("");
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
    setTaxType(editingRow.taxType);
    setTaxableAmount(editingRow.taxableAmount);
    setRate(editingRow.rate);
    setTaxAmount(editingRow.taxAmount);
  };

  useEffect(() => {
    let sum = 0;
    list.forEach((item) => {
      sum += parseFloat(item.taxAmount);
    });
    setTotal(sum);
  }, [list, setTotal]);

  return (
    <div className="tax-table-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taxType">Tax Type</label>
          <input
            type="text"
            name="taxType"
            id="taxType"
            placeholder="Enter Tax Type"
            value={taxType}
            onChange={(e) => setTaxType(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taxableAmount">Taxable Amount</label>
          <input
            type="text"
            name="taxableAmount"
            id="taxableAmount"
            placeholder="Enter Taxable Amount"
            value={taxableAmount}
            onChange={(e) => setTaxableAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rate">Rate</label>
          <input
            type="text"
            name="rate"
            id="rate"
            placeholder="Enter Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taxAmount">Tax Amount</label>
          <input
            type="text"
            name="taxAmount"
            id="taxAmount"
            placeholder="Enter Tax Amount"
            value={taxAmount}
            onChange={(e) => setTaxAmount(e.target.value)}
          />
        </div>
        <button type="submit">
          {isEditing ? "Edit Tax Item" : "Add Tax Item"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Tax Type</th>
            <th>Taxable Amount</th>
            <th>Rate</th>
            <th>Tax Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.taxType}</td>
              <td>{item.taxableAmount}</td>
              <td>{item.rate}</td>
              <td>{item.taxAmount}</td>
              <td>
                <button onClick={() => deleteRow(item.id)}>
                  <AiOutlineDelete />
                </button>
                <button onClick={() => editRow(item.id)}>
                  <AiOutlineEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>Total Tax: {total}</div>
    </div>
  );
};

export default TaxTableForm;
