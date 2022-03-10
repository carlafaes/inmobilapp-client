export  function msg(name, property){
    return `
    <!DOCTYPE html>
    <html style='margin:0; padding:0;'>
       <head>
          
       </head>
           <body>
               <div>
                   <h2>Hola ${name}!</h2>
                   <div>
                   <h3>Estamos muy contentos de poder informarte que has arrendado tu propiedad con exito! 🤩 Gracias por ser parte de nuestra comunidad. Accediendo a tu cuenta podras mantenerte al tanto de los pagos de tu inmueble</h3>
                   <h3>Te dejamos alguna informacion respecto a la propiedad que arrendaste 😁</h3>
                   <h4>Detalles de tu propiedad: </h4>
                   <h4> Ciudad: ${property.location.city}</h4>
                   <h4>Area: ${property.details.area} </h4>
                   <h4> Dormitorios: ${property.details.rooms} </h4>
                   <h4> Baños: ${property.details.rooms}</h4>
                   <br/>
                   
                   ${property.images.map(imgUrl => {
                       return `<img src=${imgUrl} alt="inmueble-images" width='100' height='100'/>`
                 })}

                 <h5>¿Tienes algunas dudas?🤔 <br/> Visita nuestra seccion de preguntas frecuentes 😉</h5>
                   <h5>Podes hacerlo ingresando al siguiente link: <a href='https://inmobilapp.vercel.app/preguntasFrecuentes'> Click aqui</a> </h5>
                   
                   <div>
                   <img src='https://i.ibb.co/vP2TGtp/inmobilapp-logo-landing.png' alt='logo-mail' width='70' height='40' /><h5>Saludos, equipo InmobilApp</h5>
                   </div>
                   </div>
               </div>
           </body>
       </html>
       `}