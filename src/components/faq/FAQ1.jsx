import { Link } from "react-router-dom";

function FAQ1() {
  return (
    <section className="faq">
      <div className="section-title">
        <h1>Can I play the game?</h1>
      </div>
      <div className="faq__text-container">
        <p className="faq__text-p">
          Yes, You can play a Demo/Prototype of the game. It serves as an
          excellent introduction to the game, allowing players to familiarize
          themselves with the basic controls.
        </p>
        <p className="faq__text-p">
          Currently, the dungeons are closed as our development team is focused
          on the alpha release of the game.
        </p>
        <p className="faq__text-p">
          We still sometimes do special events in which we open dungeons. to
          keep up to date with our events join our Discord !
        </p>
        <p className="faq__text-p">
          The Beacon is currently on the arbitrum network (layer 2 of ETH),
          within the Treasure ecosystem.
        </p>
        <p className="faq__text-p">
          The Beacon is free to play, but if you want to earn NFTs you need to
          get a Founding Character, for more information about our games
          characters and how to get them please go to{" "}
          <Link to="/guides/3" className="faq__text-link">
            Game Characters
          </Link>
          .
        </p>
        <p className="faq__text-p">
          Please be aware that all the content, features, and mechanics
          presented in the prototype may differ in the alpha version and,
          ultimately, in the full release of the game.
        </p>
      </div>
    </section>
  );
}

export default FAQ1;
