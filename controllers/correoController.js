const {} = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req=request,resp=response)=>{
    let body = req.body

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        auth: {
            user:'informaticaycomputacion2023@gmail.com',
            pass: 'hcsrayblzbjdvlja'
        },
        tls: {rejectUnauthorized: false}
    });

    const opciones = {
        from: 'Programacion',
        subject: body.asunto,
        to: body.email,
        html: `
        <head>
    <title>Correo Electrónico - Universidad Católica de Cuenca</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color:  #2E2D2D; /* Color principal de la Universidad */
            color: #000000; /* Texto en color blanco */
        }
        .logo {
            text-align: center;
            margin-bottom: 10px;
        }
        .logo img {
            max-width: 600px;
        }
        .greeting {
            color: #e12128; /* Color de saludo */
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .content {
            background-color: #ffffff; /* Fondo blanco para el contenido */
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #C5C4C8; /* Texto gris claro para el pie de página */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://orientacion.universia.com.ec/imgs2011/imagenes/banner_T2020M02D06_104948@2x.jpg" alt="Logo Universidad Católica de Cuenca">
        </div>
        <div class="greeting">${body.asunto}</div>
        <div class="content">
            ${body.mensaje}
        </div>
        <div class="footer">
            Universidad Católica de Cuenca | Dirección: Vargas Machuca 6-50 y Juan Jaramillo. Cuenca. | Teléfono: 072 834 736
        </div>
    </div>
</body>
    `
    };

    config.sendMail(opciones, function(error, result){

        if (error) return resp.json({ok: false, msg: error})
        return resp.json({
            ok:true
        });
    })
}

module.exports = {
    envioCorreo
}
