"use client"
import { pagesMetadata } from "@app/app/config";

const ContactPage: React.FC = () => {
  console.log({pagesMetadata});
  console.log("sfdss");

  return (
    <p>Kontakt</p>
  )
}

// export const metadata = pagesMetadata.find(({ path }) => path === Path.Contact)

export default ContactPage;
