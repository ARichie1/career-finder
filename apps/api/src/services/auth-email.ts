import { createTransport } from 'nodemailer';
import { env } from '../config/env.js';

const transporter = env.SMTP_HOST
  ? createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth: env.SMTP_USER && env.SMTP_PASSWORD
        ? { user: env.SMTP_USER, pass: env.SMTP_PASSWORD }
        : undefined
    })
  : null;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]!);
}

export async function sendAuthEmail(to: string, subject: string, url: string) {
  if (!transporter) {
    throw new Error('SMTP_HOST must be configured to deliver authentication email');
  }

  await transporter.sendMail({
    from: env.SMTP_FROM,
    to,
    subject,
    text: `${subject}\n\nOpen this link to continue: ${url}`,
    html: `<p>${escapeHtml(subject)}</p><p><a href="${escapeHtml(url)}">Continue to Career Finder</a></p>`
  });
}
