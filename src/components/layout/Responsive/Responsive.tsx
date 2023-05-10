import {
  Device,
  IResponsiveProps
} from "@app/components/layout/Responsive/@types/Responsive";

const Responsive: React.FC<IResponsiveProps> = ({ children, devices }) => {
  const responsiveClassNames = `
    hidden
    ${devices.includes(Device.Tv) ? "screenLg:block" : ""}
    ${devices.includes(Device.Desktop) ? "screenMdLg:block" : ""}
    ${devices.includes(Device.Tablet) ? "screenSmMd:block" : ""}
    ${devices.includes(Device.Mobile) ? "screenMaxSm:block" : ""}
  `;

  return <div className={responsiveClassNames}>{children}</div>;
};

export { Responsive };
