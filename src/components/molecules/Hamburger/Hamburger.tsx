import { IHamburgerProps } from "@app/components/molecules/Hamburger/@types/Hamburger";

const Hamburger: React.FC<IHamburgerProps> = ({
  isMenuVisible,
  onToggle
}) => {
  const onHamburgerButtonClick = () => {
    const _isMenuVisible = !isMenuVisible;
    onToggle(_isMenuVisible);
  };

  return (
    <div
      className="absolute top-20 right-20 w-24 h-20 mx-auto transform transition-all duration-500 ease-in-out cursor-pointer"
      onClick={onHamburgerButtonClick}
    >
      <span
        className={`absolute top-0 left-0 block h-2 rounded-2 bg-white opacity-100 transition-all duration-250 ease-in-out transform ${
          isMenuVisible ? "top-18 left-1/2 w-0" : "rotate-0 w-full"
        }`}
      />
      <span
        className={`absolute top-8 left-0 block h-2 w-full rounded-2 bg-white opacity-100 transition-all duration-250 ease-in-out transform ${
          isMenuVisible ? "rotate-45" : "rotate-0"
        }`}
      />
      <span
        className={`absolute top-8 left-0 block h-2 w-full rounded-2 bg-white opacity-100 transition-all duration-250 ease-in-out transform ${
          isMenuVisible ? "-rotate-45" : "rotate-0"
        }`}
      />
      <span
        className={`absolute top-16 left-0 block h-2 rounded-2 bg-white opacity-100 transition-all duration-250 ease-in-out transform ${
          isMenuVisible ? "top-8 left-1/2 w-0" : "rotate-0 w-full"
        }`}
      />
    </div>
  );
};

export { Hamburger };