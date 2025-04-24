import "server-only";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	const { name, lastname, email, company, message, services } =
		await req.json();

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: process.env.SMTP_SECURE === "true",
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const mailOptions = {
		from: `"${name} ${lastname}" <${process.env.SMTP_USER}>`,
		to: process.env.MAIL_TO,
		subject: `New Contact from ${name} | serapore.com`,
		html: `
			<!DOCTYPE html>
			<html lang="en">
			<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>New Contact Form Submission</title>
			</head>
			<body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.5; color: #242424; background-color: #f5f7fa; margin: 0; padding: 0;">
			<div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">
				<!-- Header -->
				<div style="background-color: #0c2a60; padding: 28px 24px; text-align: center;">
				<div style="margin-bottom: 16px; text-align: left;">
					<!-- Company Logo -->
					<img src="https://www.serapore.com/logo.webp" alt="Serapore Company Logo" style="max-height: 60px; width: auto;">
				</div>
				<h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.02em; text-align: left;">New Contact Request</h1>
				</div>

				<!-- Accent Bar -->
				<div style="height: 6px; background: #f18f01;"></div>

				<!-- Content -->
				<div style="padding: 32px 24px;">
				<h2 style="color: #0c2a60; margin-top: 0; margin-bottom: 24px; font-size: 20px; font-weight: 600; border-bottom: 2px solid #f9d299; padding-bottom: 12px; letter-spacing: -0.01em;">Contact Form Submission Details</h2>

				<div style="margin-bottom: 20px; display: block;">
					<span style="font-weight: 600; color: #103880; display: inline-block; width: 100px; padding-right: 16px;">Name:</span>
					<span style="display: inline-block; color: #242424;">${name} ${lastname}</span>
				</div>

				<div style="margin-bottom: 20px; display: block;">
					<span style="font-weight: 600; color: #103880; display: inline-block; width: 100px; padding-right: 16px;">Email:</span>
					<span style="display: inline-block; color: #242424;">${email}</span>
				</div>

				<div style="margin-bottom: 20px; display: block;">
					<span style="font-weight: 600; color: #103880; display: inline-block; width: 100px; padding-right: 16px;">Company:</span>
					<span style="display: inline-block; color: #242424;">${company || "N/A"}</span>
				</div>

				<div style="margin-bottom: 20px; display: block;">
					<span style="font-weight: 600; color: #103880; display: inline-block; width: 100px; padding-right: 16px;">Services:</span>
					<span style="display: inline-block; color: #242424;">${services.join(", ")}</span>
				</div>

				<div style="margin-bottom: 20px; display: block;">
					<span style="font-weight: 600; color: #103880; display: inline-block; width: 100px; padding-right: 16px; vertical-align: top;">Message:</span>
					<div style="background-color: #e1eafb; padding: 20px; border-radius: 10px; margin-top: 8px; white-space: pre-line; border-left: 4px solid #f4a534; display: block;">${message.replace(/\n/g, "<br>")}</div>
				</div>
				</div>

				<!-- Footer -->
				<div style="background-color: #cddaf2; padding: 24px; text-align: center; font-size: 14px; color: #0c2a60; border-top: 1px solid #ebebeb;">
				<p style="margin: 0 0 16px 0;">Thank you for your submission. Our team will review your request and get back to you shortly.</p>

				<div style="margin-top: 16px; text-align: center;">
					<a href="ayberkyavas.com" target="_blank" style="font-size: 13px;">ayberkyavas.com</a>
				</div>

				<p style="margin-top: 16px; font-size: 13px; color: #103880;">This is an automated message. Coming from https://serapore.com</p>
				</div>
			</div>
			</body>
			</html>
		`,
		replyTo: email,
		sender: email,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
