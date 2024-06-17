import { Link } from "react-router-dom";

function GuideGameCharacters() {
  return (
    <section className="guide">
      <div className="section-title">
        <h1>Game Characters</h1>
      </div>
      <div className="guide__text-container">
        <h3 className="guide__text-h3">
          What type of characters are or will be available?
        </h3>
        <p className="guide__text-p">
          The Beacon will offer players three (3) tiers of features:
        </p>
        <ol>
          <li className="guide__text-li">
            Free-to-play (F2P)
            <p className="guide__text-li__p">
              The F2P tier gives players access to the game’s most fundamental
              gameplay — fight your way through dungeons full of monsters and
              other challenges. Players will be able to find and take home
              non-NFT character cosmetics and house decor.{" "}
            </p>
          </li>
          <li className="guide__text-li">
            Paid character{" "}
            <p className="guide__text-li__p">
              Players who have a paid character (paid players) will access
              everything that F2P players have, and more. A character purchase
              comes with a starting set of character cosmetics, house decor, and
              some quality-of-life benefits. Throughout gameplay, paid players
              will also be able to receive NFT character cosmetics and house
              decor. Paid players will also be eligible for showing up on the
              competitive leaderboard, and be eligible for all of the available
              rewards and incentives.
            </p>
            <p className="guide__text-li__p">
              Regular paid characters are not available to purchase directly at
              the moment, but you can purchase a Founding Character in the open
              market (Treasure or Opensea) from January 31 and on.
            </p>
          </li>
          <li className="guide__text-li">
            Founding Character{" "}
            <p className="guide__text-li__p">
              These were an early, limited version of paid characters you could
              mint during the Settlement Launch (now over). Having a Founding
              Character grants players several in-game benefits, such as being
              able to acquire NFTs as rewards when opening chests, item
              recycling features, and customizing their character with
              cosmetics. This is in contrast to a free-to-play player, who would
              not have access to these benefits.
            </p>
            <p>
              The game can be played for FREE now, but to get access to the full
              content of the game you must hold a Founding Character.
            </p>
          </li>
        </ol>

        <h3 className="guide__text-h3">How to buy a FC</h3>
        <ol>
          <li className="guide__text-li">
            To be able to buy a Founding Character, the first thing we need is
            to have $Magic and ETH in our digital wallet.{" "}
            <Link
              to="https://shell-whip-bf9.notion.site/Add-founds-to-your-wallet-3f0a6bbd6622401ab0ad34ed25f915a9"
              target="_blank"
            >
              {" "}
              Add founds to your wallet.
            </Link>
          </li>
          <li className="guide__text-li">
            Go to{" "}
            <Link
              to="https://app.treasure.lol/collection/the-beacon-founding-characters"
              target="_blank"
            >
              https://app.treasure.lol/collection/the-beacon-founding-characters
            </Link>
            . Once you find the Founding Character you like the most , click on
            "Buy Now".{" "}
          </li>
          <li className="guide__text-li">
            Click the yellow button to confirm the quantity of items you will
            buy.{" "}
          </li>
          <li className="guide__text-li">
            Finally, to confirm the transaction, a new window will open. This
            time, it is a signature request for the transaction to be confirmed
            within the Treasure contract.
          </li>
        </ol>

        <h3 className="guide__text-h3">How to get my FC on the game?</h3>
        <p className="guide__text-p">
          To import your FC into the game, navigate to{" "}
          <Link to="https://app.thebeacon.gg/" target="_blank">
            https://app.thebeacon.gg/
          </Link>
          . Ensure that you are signed in to your account by clicking on "Sign
          In." Once logged in, access your profile by clicking on it at the top
          right corner. To view your characters click characters.
        </p>
        <p className="guide__text-p">
          Among the characters, you will locate the one you recently purchased,
          but it will be displayed with a blue lock. Clicking on it will open a
          window for importing items. Finally just click Send to game and after
          you confirm the transaction in metamask, your character will be
          available for use in game.
        </p>

        <h3 className="guide__text-h3">How to withdraw my FC</h3>
        <ol>
          <li className="guide__text-li">
            <Link to="https://app.thebeacon.gg/" target="_blank">
              https://app.thebeacon.gg/
            </Link>{" "}
            then click your profile and go to characters.
          </li>
          <li className="guide__text-li">
            Before you initiate the withdrawal process for founding characters,
            it's essential to double-check that they don't have any unbound
            items equipped. To successfully transfer a founding character,
            you'll need to ensure that all unbound items are unequipped.
          </li>
          <li className="guide__text-li">
            Click on the FC we want to withdraw, and press "Withdraw."
          </li>
          <li className="guide__text-li">
            Successfully processed. Upon checking our inventory, the blue lock
            will be visible on your Founding Character.
          </li>
        </ol>

        <h3 className="guide__text-h3">How to sell a FC</h3>
        <ol>
          <li className="guide__text-li">
            Go to{" "}
            <Link to="https://app.treasure.lol/" target="_blank">
              https://app.treasure.lol/
            </Link>{" "}
            .
          </li>
          <li className="guide__text-li">Connect your wallet and log in.</li>
          <li className="guide__text-li">Visit the "Inventory" tab.</li>
          <li className="guide__text-li">
            Locate the FC you want to sell (make sure it's withdrawn from the
            game).
          </li>
          <li className="guide__text-li">
            Determine how long you want your FC listed in the marketplace.
          </li>
          <li className="guide__text-li">
            Click the yellow button to create your item listing.
          </li>
          <li className="guide__text-li">
            Use MetaMask to confirm the transaction.
          </li>
          <li className="guide__text-li">
            If you hear a satisfying sound, your FC is successfully listed on
            the marketplace.
          </li>
        </ol>

        <h3 className="guide__text-h3">Transfer a Fc</h3>
        <p className="guide__text-p">
          Moving an FC is a straightforward process according to this guide.{" "}
        </p>
        <ol>
          <li className="guide__text-li">
            Go to{" "}
            <Link to="https://app.treasure.lol/" target="_blank">
              https://app.treasure.lol/
            </Link>
            .
          </li>
          <li className="guide__text-li">Connect your wallet and log in.</li>
          <li className="guide__text-li">Visit the "Inventory" tab.</li>
          <li className="guide__text-li">
            Locate the FC you want to transfer (make sure it's withdrawn from
            the game).
          </li>
          <li className="guide__text-li">
            Click on the "..." button and select the transfer option.{" "}
          </li>
          <li className="guide__text-li">
            Enter the wallet address to which you intend to send the founding
            character, and you're done.{" "}
          </li>
        </ol>
        <p className="guide__text-p">
          Keep in mind that having ETH is essential for executing the transfer
          of an item between accounts.
        </p>
      </div>
    </section>
  );
}

export default GuideGameCharacters;
