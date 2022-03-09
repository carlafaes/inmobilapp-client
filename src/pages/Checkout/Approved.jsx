import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Approved() {
  const query = useLocation();
  console.log(query);
  return <div>approved</div>;
}
