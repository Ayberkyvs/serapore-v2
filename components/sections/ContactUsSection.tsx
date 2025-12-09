import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { useTranslations } from "next-intl";
import ContactForm from "../ContactForm";

const ContactUsSection = () => {
  const t = useTranslations("ContactUsSection");
  return (
    <>
      <div className="contact-us-section">
        <div className="inner-contact-us-section flex flex-col-reverse md:grid md:grid-cols-12 gap-10 py-25 w-full h-fit">
          <div className="flex flex-col shrink-0 h-fit gap-5 md:col-span-6 lg:col-span-5">
            <SectionHeading
              title={t("sectionHeading.title")}
              subtitle={t("sectionHeading.subtitle")}
            />
            <ContactForm />
          </div>

          <div className="relative w-full aspect-video md:col-span-6 lg:col-span-7">
            <Image
              src="/media/gallery/doner_tablali_makine_2.webp"
              alt="Contact Us Photo"
              fill
              className="size-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
