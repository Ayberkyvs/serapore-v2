import { cn } from "@/lib/utils";

const BackgroundImageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div className={cn("bg_gradient_down min-h-[100vh]", className)}>
        {children}
      </div>
    </>
  );
};

export default BackgroundImageWrapper;
