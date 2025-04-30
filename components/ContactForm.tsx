"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters."),
  lastname: z.string().min(2, "Please enter at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  message: z.string().min(50, "Please enter at least 50 characters."),
  services: z.array(z.string()).nonempty("Please select at least one service."),
});

type FormData = z.infer<typeof formSchema>;

const onSubmit = async (
  data: FormData,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsSubmitting(true);
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to send");

    setSuccess(true);
  } catch (err) {
    console.error(err);
    alert("There was a problem sending your message.");
  } finally {
    setIsSubmitting(false);
  }
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [success, setSuccess] = useState(false);

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

  useEffect(() => {
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const now = new Date().getTime();
    if (lastSubmitTime && now - parseInt(lastSubmitTime) < 86400000) {
      setSubmitCount(2);
    }
  }, []);

  const selectedServices = watch("services");

  const handleCheckboxChange = (value: string) => {
    const newValues = selectedServices.includes(value)
      ? selectedServices.filter((s) => s !== value)
      : [...selectedServices, value];

    setValue("services", newValues as [string, ...string[]], {
      shouldValidate: true,
    });
  };

  const handleFormSubmit = (data: FormData) => {
    if (submitCount >= 2) {
      alert("You can only submit the form twice a day.");
      return;
    }
    if (isSubmitting) return;
    onSubmit(data, setIsSubmitting, setSuccess);
    setSubmitCount(submitCount + 1);
    localStorage.setItem("lastSubmitTime", new Date().getTime().toString());
  };

  const t = useTranslations("ContactUsSection.form");

  const services = [
    t("services.1"),
    t("services.2"),
    t("services.3"),
    t("services.4"),
    t("services.5"),
    t("services.6"),
  ];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="form__label">
            {t("name")}*
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
            {t("lastname")}*
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
          {t("email")}*
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
          {t("company")}
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
          {t("message")}*
        </Label>
        <Textarea
          id="message"
          rows={4}
          {...register("message")}
          draggable={false}
          className="resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">
            {errors.message.message as string}
          </p>
        )}
      </div>

      <div>
        <Label className="form__label">{t("services.title")}*</Label>
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

      <Button
        type="submit"
        className="w-full bg-primary-500 hover:bg-primary-600"
        disabled={isSubmitting || submitCount >= 2}
      >
        {isSubmitting ? (
          <span className="animate-spin">{<Loader />}</span>
        ) : (
          t("submitButton")
        )}
      </Button>
      {submitCount >= 2 && (
        <p className="text-red-500 text-xs mt-1">
          You can only submit the form twice a day.
        </p>
      )}
      {success && (
        <p className={cn("text-green-500 text-xs mt-1", { hidden: !success })}>
          Message sent successfully! We will get back to you soon.
        </p>
      )}
    </form>
  );
}
