import React, { useEffect, useState } from "react";
import adminService from "../services/admin";
import Loading from "./Loading";

export default function PutAdmin({ id }) {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    adminService()
      .getAdminID(id)
      .then((data) => {
        setAdmin(data);
      });
  }, [id]);

  if (Object.keys(admin).length === 0) {
    return <Loading />;
  }
}
