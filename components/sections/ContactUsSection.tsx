import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { useTranslations } from "next-intl";
import ContactForm from "../ContactForm";

const ContactUsSection = () => {
  const t = useTranslations("ContactUsSection");
  return (
    <>
      <div className="contact-us-section">
        <div className="inner-contact-us-section flex flex-col-reverse md:flex-row gap-5 py-25 w-full h-fit">
          <div className="flex flex-col w-full h-fit gap-5">
            <SectionHeading
              title={t("sectionHeading.title")}
              subtitle={t("sectionHeading.subtitle")}
            />
            <ContactForm />
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src="/media/gallery/doner_tablali_makine_2.webp"
              alt="Contact Us Photo"
              fill
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
