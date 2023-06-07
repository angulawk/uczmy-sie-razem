"use client";

import { ButtonType } from "@app/components/molecules/Button/@types/Button";
import { Button } from "@app/components/molecules/Button/Button";
import { contactButtonDefaultStyles } from "@app/components/molecules/ContactButton/styles";

const ContactButton: React.FC = () => {
  const handleContactButtonClick = () => {
    window.location.href = "mailto:agnieszka.weronika.wojcik@gmail.com";
  };

  return (
    <Button
      type={ButtonType.Secondary}
      themeClasses={contactButtonDefaultStyles}
      onClick={handleContactButtonClick}
    >
      {/* TODO should be replaced with correct email address */}
      Napisz do nas
    </Button>
  );
};

export { ContactButton };
