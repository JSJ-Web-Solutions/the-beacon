function Video() {
  return (
    <section className="video">
      <p className="video__text">
        <span className="video__text-span">Welcome to The Beacon!</span> New
        dangers await to be conquered, and only those bearing a Writ of Passage
        will be allowed to venture forth.
      </p>
      <p className="video__text">
        Prove your worth, conquer missions, amass prestige, and earn your
        god-given right for <span className="video__text-span">adventure</span>.
      </p>
      <video
        src="trailer.mp4"
        controls
        autoPlay
        muted
        loop
        className="video__video"
      ></video>
    </section>
  );
}

export default Video;
