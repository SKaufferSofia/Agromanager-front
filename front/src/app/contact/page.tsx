import ContactComponent from "@/components/Contact/Contact";
import ContactForm from "@/components/Forms/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen py-32 z-10">
      <div className={`absolute inset-0 z-0 `}>
        <video
          autoPlay
          muted
          loop
          className="w-full h-screen object-cover blur-sm"
        >
          <source
            src="/videos/15350334-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <ContactComponent />
      <ContactForm />
    </div>
  );
};

export default Contact;
