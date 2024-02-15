import React, { useRef } from 'react'
import { useState } from 'react'
import { useReactToPrint } from 'react-to-print'

import Header from './Header'
import Table from './Table'
import Notes from './Notes'
import Footer from './Footer'
import TableForm from './TableForm'
import TaxTableForm from './TaxTableForm'
import TaxTable from './TaxTable'
// import TaxTable from "./TaxTable";
// import TaxTableForm from "./TaxTableForm";

const ShowInvoice = () => {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bankHolderName, setBankHolderName] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankAccNumber, setBankAccNumber] = useState('')
  const [website, setWebsite] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')
  const [notes, setNotes] = useState('')
  const [item, setItem] = useState('')
  const [hsn, setHsn] = useState('')
  const [unit, setUnit] = useState('')
  const [qty, setQty] = useState('')
  const [price, setPrice] = useState('')
  const [gst, setGst] = useState('')
  const [list, setList] = useState([])

  const [gstIn, setGstIn] = useState([])
  const [state, setState] = useState([])
  const [shipAddress, setShipAddress] = useState([])
  const [placeSupply, setPlaceSupply] = useState([])
  const [addressBillTo, setAddressBillTo] = useState([])
  const [bankAccountNo, setBankAccountNo] = useState([])
  const [paymentMode, setPaymentMode] = useState([])
  const [bankIfsc, setBankIfsc] = useState([])
  const [invoiceAmount, setInvoiceAmount] = useState([])
  const [companyName, setCompanyName] = useState([])
  const [invoiceAmountInWords, setInvoiceAmountInWords] = useState([])
  const [invoiceTime, setInvoiceTime] = useState([])
  const [total, setTotal] = useState(0)
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const [display, setDisplay] = useState('block')

  return (
    <div>
      {showInvoice ? (
        <>
          <button
            disabled={name === '' ? true : false}
            onClick={() => {
              handlePrint()
              setDisplay('none')
            }}
            className=" font-bold bg-gray-500 text-white py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
          >
            Print/Download
          </button>
          <Header />

          <div>
            <div ref={componentRef} style={{ padding: '10px 0' }}>
              <div className="invoice">
                <div className="head-i">
                  <div className="logo-a">
                    <h4>Insta E-mart</h4>
                    <div className="logo-a">
                      <p>
                        WA-89 Mother Diary Road Near ICIC Bank, PIN No:-110092
                        Phone no.: 9873101193 Email:
                        narayanenterprises.textile@gmail.com GSTIN:
                        07CMSPA8242G1ZW, State: 07-Delhi{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="main-table">
                  <table className="table">
                    <thead className="table-c">
                      <tr className="color">
                        <th>Bill To</th>
                        <th>Ship To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="inst">
                          <h5>{companyName}</h5>
                          <p>{addressBillTo}</p> <p>GSTIN : {gstIn}</p>{' '}
                          <p>State: {state}</p>
                        </td>
                        <td className="wa-p">
                          <p>{shipAddress}</p>
                        </td>
                        <td className="wa-pl">
                          <p>Place of supply: {placeSupply}</p>
                          <p> Invoice No. : {invoiceNumber}</p>
                          <p>Date : {invoiceDate} </p>
                          <p> TIme : {invoiceTime} </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <table className="table">
                  <thead className="table-c">
                    <tr className="color">
                      <th>Sl No</th>
                      <th>ITEM</th>
                      <th>HSN/SAC</th>
                      <th>QTY</th>
                      <th>UNIT</th>
                      <th>PRICE</th>
                      <th>GST</th>
                      <th>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id} className="item-t table-cl">
                        <td>{item.no}</td>
                        <td>{item.item}</td>
                        <td>{item.hsn}</td>
                        <td>{item.qty}</td>
                        <td>{item.unit}</td>
                        <td>{item.price}</td>
                        <td>{item.gst}</td>
                        <td>{item.amount}</td>
                      </tr>
                    ))}

             
                  </tbody>
                </table> */}
                  <Table
                    item={item}
                    hsn={hsn}
                    qty={qty}
                    unit={unit}
                    price={price}
                    gst={gst}
                    total={total}
                    list={list}
                  />
                </div>

                <div className="main-table">
                 

                 
                  <table className="table">
                    <thead className="table-c">
                      <tr className="color wid-t">
                        <th>Invoice Amount</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="tdata">
                        <td>{invoiceAmountInWords}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table">
                    <thead className="table-c">
                      <tr className="color wid-t">
                        <th>Payment Mode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="tdata">
                        <td>{paymentMode}</td>
                        <td> </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table">
                    <thead className="table-c">
                      <tr className="color wid-t text">
                        <th>Terms and Conditions</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Thanks for doing business with us!</td>
                        <td className="textr">For, Insta E-mart</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table">
                    <thead className="table-c">
                      <tr className="color wid-t text">
                        <th>Bank details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Bank Name: {bankName}
                          <p>Bank Account No.: {bankAccountNo}</p>
                          <p>Bank IFSC code: {bankIfsc}</p>
                        </td>
                        <td className="textr">Authorized Signatory</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-v">
                <h3>ACKNOWLEDGEMENT</h3>
                <h1>INSTA E-MART</h1>
              </div>
              <div className="text-f" style={{ padding: '10px' }}>
                <div>
                  <h3>{companyName}</h3>
                  <p>{addressBillTo}</p>
                </div>
                <div className="invoice-p" style={{ padding: '10px' }}>
                  <p>INVOICE NO. : {invoiceNumber}</p>
                  <p>INVOICE DATE : {invoiceDate}</p>
                  <p>INVOICE AMOUNT : {total}</p>
                </div>
              </div>
              <div className="text-v">
                <p>Receiver's Seal & Sign</p>
              </div>
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Preview Invoice
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="form-input">
            <div>
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address">Enter your address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="phone">Enter your phone number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankName">Enter your bank name</label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter your bank name"
                autoComplete="off"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankHolderName">
                Enter your bank account holder name
              </label>
              <input
                type="text"
                name="bankHolderName"
                id="bankHolderName"
                placeholder="Enter your bank account holder name"
                autoComplete="off"
                value={bankHolderName}
                onChange={(e) => setBankHolderName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankAccNumber">
                Enter your bank account number
              </label>
              <input
                type="text"
                name="bankAccNumber"
                id="bankAccNumber"
                placeholder="Enter your bank account number"
                autoComplete="off"
                value={bankAccNumber}
                onChange={(e) => setBankAccNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="website">Enter your website URL (optional)</label>
              <input
                type="text"
                name="website"
                id="website"
                placeholder="Enter your website URL (optional)"
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="clientName">Enter your client name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your Client Name"
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="clientAddress">Enter your client address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your client address"
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="invoiceNumber">Enter your invoice number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Enter your invoice number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="invoiceDate">Enter your invoice date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Enter your invoice date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="invoiceTime">Enter Invoice Time</label>
              <input
                type="time"
                name="time"
                id="time"
                placeholder="Enter Invoice Time"
                autoComplete="off"
                value={invoiceTime}
                onChange={(e) => setInvoiceTime(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="gstIn">Enter GST</label>
              <input
                type="text"
                name="gstIn"
                id="gstIn"
                placeholder="Enter Gst"
                autoComplete="off"
                value={gstIn}
                onChange={(e) => setGstIn(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="state">Enter State</label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter State"
                autoComplete="off"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="shipAddress">Enter Ship Address</label>
              <input
                type="text"
                name="shipAddress"
                id="shipAddress"
                placeholder="Enter Address"
                autoComplete="off"
                value={shipAddress}
                onChange={(e) => setShipAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="placeSupply">Enter Place Supply</label>
              <input
                type="text"
                name="placeSupply"
                id="placeSupply"
                placeholder="Enter Place Supply"
                autoComplete="off"
                value={placeSupply}
                onChange={(e) => setPlaceSupply(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="addressBillTo">Enter Address Bill To</label>
              <input
                type="text"
                name="addressBillTo"
                id="addressBillTo"
                placeholder="Enter Place Supply"
                autoComplete="off"
                value={addressBillTo}
                onChange={(e) => setAddressBillTo(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankAccountNo">Enter Bank Account No</label>
              <input
                type="text"
                name="bankAccountNo"
                id="bankAccountNo"
                placeholder="Enter Bank Account No"
                autoComplete="off"
                value={bankAccountNo}
                onChange={(e) => setBankAccountNo(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="paymentMode">Enter Payment Mode</label>
              <input
                type="text"
                name="paymentMode"
                id="paymentMode"
                placeholder="Enter Payment Mode"
                autoComplete="off"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="bankIfsc">Enter Bank IFSC Code</label>
              <input
                type="text"
                name="bankIfsc"
                id="bankIfsc"
                placeholder="Enter Bank IFSC Code"
                autoComplete="off"
                value={bankIfsc}
                onChange={(e) => setBankIfsc(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="companyName">Enter Company Name</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Enter Company Name"
                autoComplete="off"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="notes">Enter your note</label>
              <input
                type="text"
                name="notes"
                id="notes"
                placeholder="Enter a note"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          {/* table form */}

          <TableForm
            item={item}
            setItem={setItem}
            hsn={hsn}
            setHsn={setHsn}
            qty={qty}
            setQty={setQty}
            unit={unit}
            setUnit={setUnit}
            price={price}
            setPrice={setPrice}
            gst={gst}
            setGst={setGst}
            setTotal={setTotal}
            total={total}
            list={list}
            setList={setList}
            // total={total}
            // setTotal={setTotal}
          />

         
          <div style={{display:"flex",flexDirection:"column"}}>
            <label htmlFor="invoiceAmountInWords">
              Enter Invoice Amount In Words
            </label>
            <input
              type="text"
              name="invoiceAmountInWords"
              id="invoiceAmountInWords"
              placeholder="Enter Amount In Words"
              autoComplete="off"
              value={invoiceAmountInWords}
              onChange={(e) => setInvoiceAmountInWords(e.target.value)}
            />
          </div>

          {/* end of table form */}
          {/* <Notes notes={notes} /> */}
          <Footer
            name={name}
            email={email}
            phone={phone}
            bankName={bankName}
            bankHolderName={bankHolderName}
            bankAccNumber={bankAccNumber}
            website={website}
          />
          <button
            onClick={() => setShowInvoice(true)}
            className="mt-5 font-bold bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Preview Invoice
          </button>
        </div>
      )}
    </div>
  )
}

export default ShowInvoice
