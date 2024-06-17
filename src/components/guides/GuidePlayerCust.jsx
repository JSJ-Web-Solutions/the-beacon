function GuidePlayerCust() {
  return (
    <section className="guide">
      <div className="section-title">
        <h1>Player Customization</h1>
      </div>
      <div className="guide__text-container">
        <p className="guide__text-p">
          Player customization is one of the most addictive features The beacon
          has to offer, the only limit is your imagination. Your character is
          divided into 5 fundamental pieces, Head, Eyes, Mouth, Torso and Legs.
          Besides that you can change the color of your skin, eyes, hair,
          eyebrown and Facial Hair.
        </p>
        <p className="guide__text-p">
          To be able to change the color you will need Dye, these can be
          obtained after a dungeon run or by buying them in trove (insert item
          purchase guide).
        </p>
        <p className="guide__text-p">There are 2 types of DYE</p>
        <ul>
          <li className="guide__text-li">
            Hair Dye:
            <p className="guide__text-li__p">
              This Dye will allow you to change the color of your Hair, Eyebrown
              & Facial Hair.
            </p>
          </li>
          <li className="guide__text-li">
            Eye Dye:{" "}
            <p className="guide__text-li__p">
              This Dye will allow you to change only the color of your eyes.
            </p>
          </li>
        </ul>
        <div className="guide__text__img-container">
          <img
            src="/guides/guide-pc1.png"
            alt=""
            className="guide__text__img"
          />
          <img
            src="/guides/guide-pc2.png"
            alt=""
            className="guide__text__img"
          />
        </div>
        <p className="guide__text-p">
          To unlock a color, you need to have one of these items in your
          inventory. Clicking on it will prompt a confirmation window asking if
          you want to use this item. Upon acceptance, the new color will be
          added to your palette for selection.
        </p>
        <h3 className="guide__text-h3">Skin Color</h3>
        <p className="guide__text-p">
          There are 7 basic skin colors, all characters have the option to
          change their skin within those colors.
        </p>
        <p className="guide__text-p">
          Ivory, Pink, Tan, Chestnut, Deep, Caramel Tan & Ebon.
        </p>
        <p className="guide__text-p">
          There are 7 rare skin colors, which can only be obtained if your
          character comes with this color (to buy characters click this guide).
        </p>
        <p className="guide__text-p">These colors are:</p>
        <p className="guide__text-p">
          Red, Gray, Blue, Obsidian, Green, Pale & Purple.
        </p>
        <div className="guide__text__img-container">
          <img
            src="/guides/guide-pc3.png"
            alt=""
            className="guide__text__img"
          />
          <img
            src="/guides/guide-pc4.png"
            alt=""
            className="guide__text__img"
          />
        </div>
        <h3 className="guide__text-h3">How do you equip items?</h3>
        <p className="guide__text-p">
          To equip items to your character, simply drag the desired item to its
          corresponding slot. Keep in mind that your inventory displays all
          items across all your characters. Therefore, if you have already
          equipped a head piece on one character, you won't be able to equip it
          on another.
        </p>
      </div>
    </section>
  );
}

export default GuidePlayerCust;
