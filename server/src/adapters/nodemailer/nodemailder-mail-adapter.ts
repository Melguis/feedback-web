import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "38c19d53d759c1",
      pass: "0ec826a7ad202f"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Jorge Henrique <jorgehenriquedasilva2014@hotmail.com>',
            subject,
            html: body,
        })
    }
}