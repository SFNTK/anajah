const express = require('express');
const mysql = require('mysql');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
const port = 3000;
const nodemailer = require("nodemailer")
const cors = require('cors');
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello welcome to anajah academy ');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//$link = mysqli_connect("server217" , "anajahac_user" , "Anajah@24" , "anajahac_db");






app.post("/send", async (req, res) => {


        const content = req.body.content;
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: "ejs06795@gmail.com",
            pass: "hikb xtgf dxii vrvg",
          },
        });
        const mailOptions = {
          from: "ejs06795@gmail.com",
          to: "contact@anajahacademy.com",
          subject: "confirmation of your account",
          text: `
          Hello Anajah Academy, 
           You got a new message from ${req.body.email}
           Full Name : ${req.body.name} 
            Email : ${req.body.email} 
            Phone : ${req.body.number} 
            Message :${req.body.content} 
         `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error.message)
            res.status(400).json({ "error": error.message })
          } else {
            res.status(200).json({ etat: 'success' })
          }
        });

      }
      
    


  )

  /*  const content=req.body.content;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "ejs06795@gmail.com",
            pass: "hikbxtgfdxiivrvg",
        },
    });
    const mailOptions = {
        from: "ejs06795@gmail.com",
        to: "info@anajahacademy.com",
        subject: "confirmation of your account",
        text: `content :
        
        ${content}
        
        from :${req.body.email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
res.status(400).json({"error":error.message})        } else {
          res.status(200).json({etat:'success'})
        }
    });
*/


