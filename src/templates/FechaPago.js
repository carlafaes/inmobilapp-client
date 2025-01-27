import { sendEmail } from "../services/sendEmail";

function msg(name, payDay) {
  return `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div>
            <h2>Hola ${name}!</h2>
            <div>
            <h3>Queremos informarte que el vencimiento de tu fecha de pago esta proximo llegar</h3>
            <h3>El vencimiento del pago es: ${payDay} 🍑📷👈🏼</h3>
            
            <h5>
            ¿Tienes algunas dudas?🤔 <br />
            Visita nuestra seccion de preguntas frecuentes 😉
          </h5>
          <h5>
            Podes hacerlo ingresando al siguiente link:
            <a href="https://inmobilapp.vercel.app/preguntasFrecuentes">
              Click aqui</a
            >
          </h5>
    
          <div>
            <img
              src="https://i.ibb.co/vP2TGtp/inmobilapp-logo-landing.png"
              alt="logo-mail"
              width="70"
              height="40"
            />
            <h5>Saludos, equipo InmobilApp</h5>
          </div>
        </div>
      </body>
    </html>
    `;
}

export function sendFechaPago(name, email, payDay) {
  return sendEmail(name, email, msg(name, payDay));
}
