import axios from "axios";

const baseUrl = "/api/payment/create";

export async function sendPayment(description, value) {
  return (await axios.post(baseUrl, { description, value })).data;
}
