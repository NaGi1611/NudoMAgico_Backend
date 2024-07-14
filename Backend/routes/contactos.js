var express = require('express');
var router = express.Router();
const connection = require("./../bbdd");
const multer = require("multer");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

/* GET pagina de contactos. */
router.get('/', function(req, res, next) {
  connection.query('select * from productos', function (error, results, fields) {
      if (error) throw error;
      res.render('contactos');
    });
});

module.exports = router;

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "files_emails")); // Ruta donde se guardarán los archivos adjuntos
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Configuración del servicio de correo electrónico
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "petty161188@gmail.com",
    pass: "ydgf opdq veiv tqih",
  },
});

app.post("contactos/procesar-email", upload.single("fileAdjunto"), (req, res) => {
  const { desde, para, titulo, telefono, mensaje } = req.body;
  const fileAdjunto = req.file;

  // Verificar si se adjuntó un archivo
  let attachments = [];
  if (fileAdjunto) {
    // Ruta absoluta donde se guarda el archivo adjunto
    const filePath = path.join(__dirname, "files_emails", fileAdjunto.filename);

    attachments = [
      {
        filename: fileAdjunto.name,
        path: filePath,
      },
    ];
  }

  // Definir el contenido del cuerpo para el correo electrónico que deseas enviar
  const mailOptions = {
    from: desde,
    to: "petty161188@gmail.com",
    subject: titulo,
    text: telefono,
    text: mensaje,
    attachments: attachments,
  };
  // Envía el correo electrónico utilizando el método sendMail del objeto transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });

  res.render("index");
});

/* Iniciar el servidor con Express
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); */