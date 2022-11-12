// import nodemailer from "nodemailer";

export const sendMail = async (data) => {
    await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}