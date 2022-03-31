import React, { useState, useEffect } from "react";
import QrcodeGenerator from "qrcode";
const Qrcode = ({ text }) => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QrcodeGenerator.toDataURL(text).then(setSrc);
  }, [text]);
  return <img src={src} alt={text} />;
};

export default Qrcode;
