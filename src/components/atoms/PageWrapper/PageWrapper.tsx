import { IPageWrapperProps } from "@app/components/atoms/PageWrapper/@types/PageWrapper";

const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => (
  <div className="flex flex-col min-h-[100vh]">{children}</div>
);

export { PageWrapper };
