const express = require('express');

const nodeMailer = require('nodemailer');


// node-notifier module for sending notifications : 
const notifier = require('node-notifier');
// notifier.notify('Message');

const mailer = nodeMailer.createTransport({
    service: 'gmail',
    port: 3001,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: 'sabir@mobcast.in',
        pass: process.env.pass,
    }
});

exports.sendMail = (req, res, next) => {
    const subject = req.body.subject;
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const mail = req.body.mail;
    const email = {
        from: sender,
        to: receiver,
        subject: subject,
        text: mail,
    };
    mailer.sendMail(email).then(result => {
        res.redirect('/');
        console.log("mail sent successfully!");
        notifier.notify({
            title: "mail sent successfully!",
            message: mail,
        })
    }).catch(err => {
        console.log("error sending mail: " + err);
    })
};


