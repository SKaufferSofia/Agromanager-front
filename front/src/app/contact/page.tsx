import ContactComponent from "@/components/Contact/Contact";
import ContactForm from "@/components/Forms/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col py-28">
      <div>
        <ContactComponent />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
