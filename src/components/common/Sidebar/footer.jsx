import React from "react";
import moment from "moment";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p>&copy; Madiba. Inc {moment().year()}</p>
      </div>
    </>
  );
}
