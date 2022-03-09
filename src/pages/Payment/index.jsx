import React, { useState } from "react";
import { sendPayment } from "../../services/payment";

export default function Payment() {
  const [pago, setPago] = useState(null);

  const handleOnClick = () => {
    sendPayment("Propiedad ID", 2500)
      .then((data) => {
        setPago(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {pago && (
        <a href={pago.links[1].href} target="_blank">
          Realizar pago
        </a>
      )}
      <button onClick={handleOnClick}>Pagar</button>
    </div>
  );
}
