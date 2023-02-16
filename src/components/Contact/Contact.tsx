import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>To form a connection please press the button bellow</h2>
      <a
        href="mailto:viktorijamartinaityte@gmail.com?subject=Connection formed"
        className="contact__link"
      >
        Connect
      </a>
    </div>
  );
};

export default Contact;
