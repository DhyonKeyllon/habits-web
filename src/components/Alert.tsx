import { useState } from "react";
import { Info } from "phosphor-react";

export type AlertType = "SUCCESS" | "WARNING" | "ERROR" | "INFORMATION";

type AlertComponentProps = {
  alertType: AlertType;
  title: string;
  width?: string | number;
  height?: string | number;
  className?: HTMLDivElement["className"];
  iconSize?: string | number;
  icon?: React.ReactNode;
  content?: string;
};

export const AlertComponent = ({
  alertType,
  title,
  width,
  height,
  className,
  iconSize = "22",
  icon,
  content,
}: AlertComponentProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const colors = {
    SUCCESS: "#54C975",
    WARNING: "#C9A154",
    ERROR: "#C9546A",
    INFORMATION: "#548AC9",
  };

  if (isOpen)
    return (
      <div
        className={`
        flex justify-self-center place-self-center self-center w-[400px]
        bg-[#1E2127]
        lg:flex-row lg:w-full 
        ${width ? `w-[${width}px]` : "w-full"}
        ${height ? `h-[${height}px]` : "h-full"}
        rounded-lg ${className}
      `}
      >
        <div className="flex">
          <div className="flex flex-row gap-2">
            {icon ? (
              icon
            ) : (
              <Info
                color={colors[alertType]}
                height={iconSize}
                width={iconSize}
              />
            )}
            <span
              className={`flex text-[${colors[alertType]}] text-[1rem] self-center`}
            >
              {title}
            </span>
          </div>
          <span className="ml-6">{content}</span>
        </div>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex self-stretch ml-auto cursor-pointer hover:opacity-80"
          onClick={() => setIsOpen(false)}
        >
          <g clip-path="url(#clip0_7098_57954)">
            <path
              d="M12.2 4.30714C11.94 4.04714 11.52 4.04714 11.26 4.30714L7.99998 7.56047L4.73998 4.30047C4.47998 4.04047 4.05998 4.04047 3.79998 4.30047C3.53998 4.56047 3.53998 4.98047 3.79998 5.24047L7.05998 8.50047L3.79998 11.7605C3.53998 12.0205 3.53998 12.4405 3.79998 12.7005C4.05998 12.9605 4.47998 12.9605 4.73998 12.7005L7.99998 9.44047L11.26 12.7005C11.52 12.9605 11.94 12.9605 12.2 12.7005C12.46 12.4405 12.46 12.0205 12.2 11.7605L8.93998 8.50047L12.2 5.24047C12.4533 4.98714 12.4533 4.56047 12.2 4.30714V4.30714Z"
              fill="#B2B2B2"
            />
          </g>
          <defs>
            <clipPath id="clip0_7098_57954">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );

  return null;
};
