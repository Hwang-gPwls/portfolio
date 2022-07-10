import { gsap } from "gsap";
const Contact = () => {
  const moveLocation = (e) => {
    if (e.target.id === "github") {
      window.open("https://github.com/Hwang-gPwls");
    }

    if (e.target.id === "contact") {
    }
  };

  const onMouseOver = (e) => {
    let tl = gsap.timeline();
    tl.to(e.target, { y: -40, duration: 0.5 });
    tl.to(e.target, { y: 0, duration: 3 });
  };

  return (
    <>
      <div className="wrapper-contact">
        <div className="arrow">
          <div className="curve"></div>
          <div className="point"></div>
        </div>
        <div className="contact">
          <div
            id="contact"
            className="contact-circle"
            onMouseOver={onMouseOver}
            onClick={moveLocation}
          >
            <span className="contact-text">h960502hhj@gmail.com</span>
          </div>
          <p id="github" className="button" onClick={moveLocation}>
            github
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
