import { sendEmail } from "../services/sendEmail";

const baseUrl = "http://localhost:3000";

function msg(client, property) {
  return `<p>clientID: ${client.id}, propertyID ${property.id}
  <a href=${`${baseUrl}/assignproperty/${client.id}/${property.id}`} target="_blank">AsignarPropiedad</a>
  `;
}

export function sendSolicitudProperty(client, property) {
  return sendEmail(
    property.agentID.id,
    "garcianaranjodairo@gmail.com",
    msg(client, property)
  );
}
