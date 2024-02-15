import React from "react";

const Footer = ({
  name,
  email,
  phone,
  bankName,
  bankHolderName,
  bankAccNumber,
  website,
}) => {
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center">
        <li>
          <span className="font-bold ml-2">Your name:</span> {name}
        </li>
        <li>
          <span className="font-bold ml-2">Your email:</span>
          {email}
        </li>
        <li>
          <span className="font-bold ml-2">Phone number:</span> {phone}
        </li>
        <li>
          <span className="font-bold ml-2">Bank name:</span> {bankName}
        </li>
        <li>
          <span className="font-bold ml-2">Account holder name:</span>
          {bankHolderName}
        </li>
        <li>
          <span className="font-bold ml-2">Account Number:</span>
          {bankAccNumber}
        </li>
        <li>
          <span className="font-bold ml-2">Website:</span>{" "}
          <a href={website} target="_black" rel="noopenner noreferrer">
            {website}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
