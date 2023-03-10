import "./About.css";

const About = () => {
  const currentDate = new Date();
  const startDate = new Date("2022-05-01");

  const dateDiff =
    currentDate.getMonth() -
    startDate.getMonth() +
    12 * (currentDate.getFullYear() - startDate.getFullYear());

  return (
    <div className="about">
      <h2 className="about__title">I'm Viktorija</h2>
      <p className="about__text">
        I'm an entry-level{" "}
        <span className="about__text--underlined">Software Developer</span> who
        started this coder's journey {dateDiff} months ago. I was always curious
        about how web pages or games came to life and was beyond excited when
        found CodeAcademy Full Stack course. My current favourite aesthetic is
        cyberpunk and I recently started drawing. In the near future, I'm
        planning to learn Blender.
      </p>
    </div>
  );
};

export default About;
