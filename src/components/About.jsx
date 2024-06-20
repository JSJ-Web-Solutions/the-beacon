function Video() {
  return (
    <section className="about">
      <p className="about__text">
        <span className="about__text-span">Welcome to The Beacon Wiki!</span>
      </p>

      <p className="about__text">
        On this website you will find{" "}
        <span className="about__text-span">tutorials</span> that will help you
        to complete the different events. Besides, there are several{" "}
        <span className="about__text-span">guides</span> with information about
        the important stuff of the game.
      </p>
      <img src="about-1.gif" alt="" className="about__gif-1" />
      <img src="about-1.gif" alt="" className="about__gif-2" />
    </section>
  );
}

export default Video;
