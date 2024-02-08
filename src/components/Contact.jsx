import Email from "../layout/Email";

const Contact = () => {
  return (
    <div className="border border-myRed my-5 min-h-screen] lg:px-5">
      <h1 className="text-center font-semibold text-4xl font-lora">
        Contact Me
        <div className="flex flex-col lg:flex-row justify-around">
          <div>Get In Touch</div>
          <div>
            <Email />
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Contact;
