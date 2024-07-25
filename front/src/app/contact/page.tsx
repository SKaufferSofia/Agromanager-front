import ContactComponent from "@/components/Contact/Contact";
import ContactForm from "@/components/Forms/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen py-28">
      <ContactComponent />
      <ContactForm />
    </div>
  );
};

export default Contact;
