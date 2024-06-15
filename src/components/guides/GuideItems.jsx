/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";

function Guide3() {
  return (
    <section className="guide">
      <div className="section-title">
        <h1>Game Items</h1>
      </div>
      <div className="guide__text-container">
        <h3 className="guide__text-h3">What are Items?</h3>
        <p className="guide__text-p">
          Items can be obtained through dungeons or by purchasing them from the
          marketplace. Items are NFTs, except for common items. In the beacon
          universe, items are divided into three main categories: Cosmetics,
          Household, and Consumables. In addition to the categories, some items
          have different rarities within the rarity types. There are Common,
          Rare, Epic, Legendary, and Mythical items.
        </p>
        <ul className="lists__box-h">
          <li className="guide__text-li">
            <h4>Cosmetics</h4>
            <ul>
              <li className="guide__text-li-inner">Mouth</li>
              <li className="guide__text-li-inner">Eyes</li>
              <li className="guide__text-li-inner">Tutorial</li>
              <li className="guide__text-li-inner">Head</li>
              <li className="guide__text-li-inner">Torso</li>
            </ul>
          </li>
          <li className="guide__text-li">
            <h4>House</h4>
            <ul>
              <li className="guide__text-li-inner">House Floor</li>
              <li className="guide__text-li-inner">House Walls</li>
              <li className="guide__text-li-inner">House Items</li>
            </ul>
          </li>
          <li className="guide__text-li">
            <h4>Consumables</h4>
            <ul>
              <li className="guide__text-li-inner">Hair Dye</li>
              <li className="guide__text-li-inner">Eye Dye</li>
            </ul>
          </li>
        </ul>

        <h4 className="text-center-italics">
          Common items are not NFT, they cannot be bought or sold!
        </h4>
      </div>

      <div className="guide__text-container">
        <p className="guide__text-p">
          For a detailed guide on how to customize your character or decorate
          your house, please visit{" "}
          <Link to="/guides/5">Player Customization</Link> &{" "}
          <Link to="/guides/6">House Customization</Link>
        </p>
      </div>

      <div className="guide__text-container">
        <h3 className="guide__text-h3">Buy Items</h3>
        <ol>
          <li className="guide__text-li-inner">
            To be able to buy items, the first thing we need is to have $MAGIC
            and $ETH in our digital wallet.
          </li>
          <li className="guide__text-li-inner">
            Go to
            <a
              href="https://app.treasure.lol/collection/the-beacon-items"
              target="_blank"
              rel="no-referrer"
            >
              https://app.treasure.lol/collection/the-beacon-items
            </a>
            . Once you find the item you like the most (remember that items are
            divided into 3 categories), click on "Buy Now". After that, a window
            will appear to confirm the quantity of this item you want to
            purchase. Click the yellow button to confirm the quantity of items
            you will buy. Finally, to confirm the transaction, a new window will
            open. This time, it is a signature request for the transaction to be
            confirmed within the Treasure contract.
          </li>

          <li className="guide__text-li-inner">
            After a cool animation (and sound) your item will be on your
            Treasure inventary.
          </li>
        </ol>
        <h4 className="text-center-italics">
          The item has not been added to the game yet. Please continue reading
          to discover how to import items into the game.
        </h4>
      </div>
      <div className="guide__text-container">
        <h3 className="guide__text-h3">Import items to the game</h3>
        <p className="guide__text-p">
          To import items into the game, navigate to{" "}
          <a href="https://app.thebeacon.gg/" target="_blank" rel="no-referrer">
            https://app.thebeacon.gg/
          </a>
          . Ensure that you are signed in to your account by clicking on "Sign
          In." Once logged in, access your profile by clicking on it at the top
          right corner. To view your items, scroll to the bottom of your
          profile. <br />
          in order to use the items in the game ….
        </p>
        <p className="guide__text-p">
          Among the items, you will locate the one you recently purchased, but
          it will be displayed with a blue lock.
        </p>
        <p className="guide__text-p">
          Clicking on it will open a window for importing items. As shown in the
          example, the clicked item is selected for import. In the same example,
          another item available for import is visible. To complete this
          process, simply click "Send 1 items to game.”
        </p>
        <h5 className="text-center-italics">
          You can import a maximum of 50 items per transaction.
        </h5>
      </div>
      <div className="guide__text-container">
        <p className="guide__text-p">
          Finally, we need to confirm the transaction, and the item will be
          added to the game. To perform this action, ETH is required.
          <br />
          And that is it, the item will be in your in-game inventory!
        </p>
      </div>

      <div className="guide__text-container">
        <h3 className="guide__text-h3">Withdraw items.</h3>
        <p className="guide__text-p">
          Withdraw items from the game will allow us to sell or transfer it to
          another account. To do this we need ETH in our wallet.@Add founds to
          your wallet
        </p>
        <p className="guide__text-p">
          For this example, we will use the telescope game. The first thing we
          have to do is click on the telescope and press "withdraw." Of course,
          we value security, so you need to confirm your action.
        </p>
        <p className="guide__text-p">
          The Approximate transaction fee its ~0.0003ETH
        </p>
        <p className="guide__text-p">
          After confirming the transaction on MetaMask, your withdrawal will be
          successfully processed. Upon checking our inventory, the blue lock
          will be visible on our telescope, indicating that we can now list and
          sell the item or transfer it to another account.
        </p>
      </div>

      <div className="guide__text-container">
        <h3 className="guide__text-h3">Sell items.</h3>
        <h4 className="guide__text-h3">Quick Guide.</h4>
        <ol>
          <li className="guide__text-li-inner">
            Go to https://app.treasure.lol/.
          </li>
          <li className="guide__text-li-inner">
            Connect your wallet and log in.
          </li>
          <li className="guide__text-li-inner">Visit the "Inventory" tab.</li>
          <li className="guide__text-li-inner">
            Locate the item you want to sell (make sure it's withdrawn from the
            game).
          </li>
          <li className="guide__text-li-inner">
            Decide the selling price in $MAGIC.
          </li>
          <li className="guide__text-li-inner">
            Determine how long you want your item listed in the marketplace.
          </li>
          <li className="guide__text-li-inner">
            If you have more than one item, choose the quantity. For a single
            item, this is fixed.
          </li>
          <li className="guide__text-li-inner">
            Click the yellow button to create your item listing.
          </li>
          <li className="guide__text-li-inner">
            Use MetaMask to confirm the transaction.
          </li>
          <li className="guide__text-li-inner">
            If you hear a satisfying sound, your item is successfully listed on
            the marketplace.
          </li>
        </ol>
      </div>

      <div className="guide__text-container">
        <h3 className="guide__text-h3">Transfer an item.</h3>
        <p className="guide__text-p">
          Transferring an item is the easiest thing that this guide has, we just
          have to click on the ... button and click on transfer. After that we
          have to enter the wallet address to which we want to send the item and
          that's it. Remember that we will need ETH to be able to transfer an
          item from one account to another.
        </p>
      </div>
    </section>
  );
}

export default Guide3;
