"use client";
import { motion } from "framer-motion";

const VerticalGalleryCard = ({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <>
      <div
        className="relative group aspect-[9/16] min-w-[280px] w-[300px] xs:w-[280px] rounded-sm border border-neutral-300 bg-cover hover:cursor-pointer select-none"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      >
        <div className="absolute inset-0 px-5 py-8 bg-black/20 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-300 rounded-sm flex flex-col gap-5">
          <h6 className="h6 text-white drop-shadow-md">{title}</h6>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white small hidden group-hover:block"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default VerticalGalleryCard;
