function FAQ2() {
  return (
    <section className="faq">
      <div className="section-title">
        <h1>Whats coming next?</h1>
      </div>
      <div className="faq__text-container">
        <h3 className="faq__text-h3">Q3 Wrap's Ahead</h3>
        <p className="faq__text-p">
          Hey Settlers! We're thrilled to announce that we've successfully met
          all of our Q3 goals, and as we bid farewell to this quarter, we want
          to take a moment to reflect on what we've accomplished and what's
          coming up next.
        </p>
        <h4 className="faq__text-h4">The Next Two Weeks: Deep Dive Updates</h4>
        <p className="faq__text-p">
          Over the next fortnight, we'll be showing updates on all the features
          and goals mentioned in our original Q3 roadmap.
        </p>
        <p className="faq__text-p">
          These will come in various forms, be it detailed dev logs or hands-on
          demos, to give you a closer look at each item:
        </p>
        <ul>
          <li className="faq__text-li">
            Finalized Combat System{" "}
            <p className="faq__text-li__p">
              We've engineered an entirely new system that is much more
              sustainable long-term, thanks to Tinkerer™, our new custom
              schematics system, we can create all gameplay-related logic in a
              much easier, faster, and streamlined manner. This might also allow
              us to implement UGC tools in the future.
            </p>
          </li>
          <li className="faq__text-li">
            Smarter Enemies and Pathfinding{" "}
            <p className="faq__text-li__p">
              Brand new behavior tree system that makes enemies much more
              complex and interesting, this includes line of vision,
              pathfinding, and other qualities.
            </p>
          </li>
          <li className="faq__text-li">
            Improved Cosmetic System{" "}
            <p className="faq__text-li__p">
              New dynamic and layering system that allows us the creative
              freedom for a lot of things we couldn't have done before, like
              earrings, longer hairstyles, etc.
            </p>
          </li>
          <li className="faq__text-li">
            Town Square Scene{" "}
            <p className="faq__text-li__p">
              A brand new, huge scene with a lot of personality, new townfolk,
              and places to explore.
            </p>
          </li>
          <li className="faq__text-li">
            Website 2.0{" "}
            <p className="faq__text-li__p">
              Long due facelift for our main homepage.
            </p>
          </li>
        </ul>
        <h3 className="guide__text-h3">Q4 and Beyond</h3>
        <p className="faq__text-p">
          In Q4, we'll be taking a different approach. Updates will be shared as
          they're developed, offering a more streamlined, real-time look into
          our progress. In addition, we're incredibly excited for the Alpha
          launch that's on the horizon. Trust us, we're as eager to share more
          with you as you are to hear about it.
        </p>
        <p className="faq__text-p">
          That's all for now. Stay tuned for some awesome content coming your
          way!
        </p>
        <img src="/roadmap.png" alt="" className="faq__text-img" />
      </div>
    </section>
  );
}

export default FAQ2;
