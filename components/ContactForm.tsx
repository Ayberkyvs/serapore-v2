// app/contact-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	GoogleReCaptcha,
	GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";

const services = [
	"Web Development",
	"Mobile App",
	"UI/UX Design",
	"SEO",
	"Maintenance",
	"Other",
];

const formSchema = z.object({
	name: z.string().min(2, "Please enter at least 2 characters."),
	lastname: z.string().min(2, "Please enter at least 2 characters."),
	email: z.string().email("Please enter a valid email address."),
	company: z.string().optional(),
	message: z.string().min(50, "Please enter at least 50 characters."),
	services: z.array(z.string()).nonempty("Please select at least one service."),
	// captcha: z.string().min(1, "Please verify that you are human."),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
	// const [token, setToken] = useState("");
	// const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			services: [],
		},
	});

	// const setTokenFunc = (getToken: string) => {
	// 	setToken(getToken);
	// 	setValue("captcha", getToken, { shouldValidate: true });
	// };

	const selectedServices = watch("services");

	const onSubmit = (data: FormData) => {
		console.log("Form data:", data);
		// send form to backend or email service
	};

	const handleCheckboxChange = (value: string) => {
		const newValues = selectedServices.includes(value)
			? selectedServices.filter((s) => s !== value)
			: [...selectedServices, value];

		setValue("services", newValues as [string, ...string[]], {
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<div className="grid grid-cols-2 gap-4">
				<div>
					<Label htmlFor="name" className="form__label">
						Name
					</Label>
					<Input id="name" {...register("name")} />
					{errors.name && (
						<p className="text-red-500 text-xs mt-1">
							{errors.name.message as string}
						</p>
					)}
				</div>
				<div>
					<Label htmlFor="lastname" className="form__label">
						Last Name
					</Label>
					<Input id="lastname" {...register("lastname")} />
					{errors.lastname && (
						<p className="text-red-500 text-xs mt-1">
							{errors.lastname.message as string}
						</p>
					)}
				</div>
			</div>

			<div>
				<Label htmlFor="email" className="form__label">
					Email*
				</Label>
				<Input id="email" type="email" {...register("email")} />
				{errors.email && (
					<p className="text-red-500 text-xs mt-1">
						{errors.email.message as string}
					</p>
				)}
			</div>

			<div>
				<Label htmlFor="company" className="form__label">
					Company
				</Label>
				<Input id="company" {...register("company")} />
				{errors.company && (
					<p className="text-red-500 text-xs mt-1">
						{errors.company.message as string}
					</p>
				)}
			</div>

			<div>
				<Label htmlFor="message" className="form__label">
					Your Message*
				</Label>
				<Textarea id="message" rows={4} {...register("message")} />
				{errors.message && (
					<p className="text-red-500 text-xs mt-1">
						{errors.message.message as string}
					</p>
				)}
			</div>

			<div>
				<Label className="form__label">Services</Label>
				<div className="grid grid-cols-2 gap-2">
					{services.map((service) => (
						<label
							key={service}
							className="flex items-center gap-2 text-sm cursor-pointer"
						>
							<Checkbox
								checked={selectedServices.includes(service)}
								onCheckedChange={() => handleCheckboxChange(service)}
							/>
							{service}
						</label>
					))}
				</div>
				{errors.services && (
					<p className="text-red-500 text-xs mt-1">
						{errors.services.message as string}
					</p>
				)}
			</div>
			{/* 
			<div>
				<GoogleReCaptchaProvider
					reCaptchaKey={process.env.GOOGLE_RECAPTCHA_SECRET_KEY || ""}
          
				>
					<GoogleReCaptcha
						onVerify={setTokenFunc}
						refreshReCaptcha={refreshReCaptcha}
					/>
				</GoogleReCaptchaProvider>
				{errors.captcha && (
					<p className="text-red-500 text-xs mt-1">{errors.captcha.message}</p>
				)}
			</div> */}

			<Button
				type="submit"
				className="w-full bg-primary-500 hover:bg-primary-600"
			>
				Send Message
			</Button>
		</form>
	);
}
