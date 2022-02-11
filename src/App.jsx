import React, { useEffect, useState } from 'react';
import adminService from './services/admin';

function App() {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    adminService.getAll().then((admins) => {
      setAdmin(admins);
    });
  }, []);

  if (admin.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{admin[0].name}</h1>
      <p>{admin[0].password}</p>
      <p>{admin[0].email}</p>
    </div>
  );
}

export default App;
