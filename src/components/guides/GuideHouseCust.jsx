function GuideHouseCust() {
  return (
    <section className="guide">
      <div className="section-title">
        <h1>House Customization</h1>
      </div>
      <div className="guide__text-container">
        <p className="guide__text-p">
          At first, your character will be created with an empty house. Items
          that you obtain through the game can be used to decorate it. (add buy
          item guide)
        </p>
        <p className="guide__text-p">
          Pressing the button or pressing “E” Will open the house editor.{" "}
        </p>
        <p className="guide__text-p">
          In here you will find your all the housing items that are available in
          your inventory. Simply click and drag them to place where you want
          them to display.{" "}
        </p>
        <div className="guide__text__img-container">
          <img
            src="/guides/guide-hc1.png"
            alt=""
            className="guide__text__img"
            style={{ width: "60%" }}
          />
        </div>
        <p className="guide__text-p">
          Click save and you’ll be able to see the changes in game
        </p>
        <div className="guide__text__img-container">
          <img
            src="/guides/guide-hc2.png"
            alt=""
            className="guide__text__img"
            style={{ width: "60%" }}
          />
        </div>
        <p className="guide__text-p">
          Press Q to rotate an item’s direction, and rimply right click an item
          if you want to remove it from its current position.
        </p>
        <p className="guide__text-p">
          You can also decorate change the infrastructure of your house on the
          left panel, changing the entire look of floors and walls depending on
          the sets you have. Simply double click to apply the changes, right
          click to remove them.
        </p>
        <p className="guide__text-p">
          After you save your house, it will be automatically post it on the the
          beacon web app for everyone to see.{" "}
        </p>
        <div className="guide__text__img-container">
          <img
            src="/guides/guide-hc3.png"
            alt=""
            className="guide__text__img"
            style={{ width: "60%" }}
          />
        </div>
        <p className="guide__text-p">
          The current controls may be subject to change in the future as we add
          more features.
        </p>
      </div>
    </section>
  );
}

export default GuideHouseCust;
