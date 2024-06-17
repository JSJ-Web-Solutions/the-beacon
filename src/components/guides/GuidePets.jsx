import { Link } from "react-router-dom";

function GuidePets() {
  return (
    <section className="guide">
      <div className="section-title">
        <h1>Player Customization</h1>
      </div>
      <div className="guide__text-container">
        <h3 className="guide__text-h3">What are pets ?</h3>
        <p className="guide__text-p">
          The Beacon's world is teeming with strange and adorable creatures
          called the Moonfae, that you can call your own. With a pet, players
          will be able to breed for offsprings and earn more reards throughout
          your adventures.
        </p>
        <p className="guide__text-p">
          Pets are composed of two types of traits: body parts and blessings.
        </p>
        <ul>
          <li className="guide__text-li">
            Body parts are cosmetic traits, pets may have up to 6 body parts,
            including one for the head, back, belly, body, eyes, and mouth. A
            subset of body parts are the Ancestral Body Parts (up to 4).
          </li>
          <li className="guide__text-li">
            Blessings are traits that provide quality-of-life benefits in the
            game. Generation-0 pets are allowed to hatch with more blessings
            than subsequent generations and are guaranteed to have at least two
            blessing.
            <ul>
              <li
                className="guide__text-li-inner"
                style={{ marginTop: "2rem" }}
              >
                Unique traits: Gen-0 pets are guaranteed to have at least one
                Ancestral Body Part, which can only be acquired randomly at
                hatching by gen-0 pets (up to 4). Subsequent generations can
                only acquire these traits through inheritance.
              </li>
              <li className="guide__text-li-inner">
                Yield boost: The number of Ancestral Body Parts a gen-0 pet has
                will determine its yield boost, which can range from 10% to 20%.
                The more Ancestral Body Parts a gen-0 pet has, the higher the
                boost.
              </li>
              <li className="guide__text-li-inner">
                Also having a generation-0 pet comes with several perks, such as
                the opportunity to participate in game events before other
                players, access to special benefits outside the game for pets
                with a lower ID and unique Discord role, and more.
              </li>
            </ul>
          </li>
          <li className="guide__text-li">
            Affinity is how the character/moonfae sways in the lux/umbra
            spectrum. It's on a bell curve, hence the prevalence of values
            closer to 0.5. Right now there's no mechanics related to it, but
            we're playing around with some ideas. There's no guarantee that
            it'll end up being significant though
          </li>
        </ul>
        <p className="guide__text-p">
          The mint of generation-0 pets already happened on December 16th 2022,
          and there is a cap of 4096. You can only get them now by purchasing
          them in the open market (Treasure Marketplace)
        </p>
        <h3 className="guide__text-h3">How to buy a Pet </h3>
        <ol>
          <li className="guide__text-li">
            To be able to buy a Pet, the first thing we need is to have $Magic
            and Eth in our digital wallet.{" "}
            <Link
              to="https://shell-whip-bf9.notion.site/Add-founds-to-your-wallet-3f0a6bbd6622401ab0ad34ed25f915a9"
              target="_blank"
            >
              Add founds to your wallet
            </Link>{" "}
          </li>
          <li className="guide__text-li">
            Go to{" "}
            <Link
              to="https://app.treasure.lol/collection/the-beacon-pets"
              target="_blank"
            >
              https://app.treasure.lol/collection/the-beacon-pets
            </Link>{" "}
            Once you find the Founding Character you like the most , click on
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
        <h3 className="guide__text-h3">How to get my Pet on the game</h3>
        <p className="guide__text-p">
          To integrate your Pet into the game, go to{" "}
          <Link to="https://app.thebeacon.gg/" target="_blank">
            https://app.thebeacon.gg/
          </Link>
          . Sign in to your account by selecting "Sign In." After logging in,
          access your profile by clicking on the top right corner. To see your
          Pets , click on the "Pet" tab.
        </p>
        <p className="guide__text-p">
          Identify the recently purchased Pet, which will be marked with a blue
          lock. Click on it to open the import items window.
        </p>
        <p className="guide__text-p">
          Lastly, click "Send to game," and once you confirm the transaction in
          Metamask, your Pet will be ready for use in the game.
        </p>
        <h3 className="guide__text-h3">Withdraw a Pet</h3>
        <p className="guide__text-p">
          To withdraw a Pet from the game, enabling you to either sell it or
          transfer it to another account, ensure that there is ETH in your
          wallet.{" "}
          <Link
            to="https://www.notion.so/Add-founds-to-your-wallet-3f0a6bbd6622401ab0ad34ed25f915a9?pvs=4"
            target="_blank"
          >
            Add funds to your wallet.
          </Link>
        </p>
        <ol>
          <li className="guide__text-li">
            Navigate to{" "}
            <Link to="https://app.thebeacon.gg/" target="_blank">
              https://app.thebeacon.gg/
            </Link>
            , click on your profile, and go to the "Pets" section (placeholder).
          </li>
          <li className="guide__text-li">
            Select the pet you wish to withdraw and click on "Withdraw."
          </li>
          <li className="guide__text-li">
            After confirming the transaction on MetaMask, the withdrawal will be
            processed successfully. Upon checking your inventory, you'll see the
            blue lock on your Founding Pet, signifying that you can now list and
            sell the item or transfer it to another account.
          </li>
        </ol>
        <h3 className="guide__text-h3">Selling a Pet</h3>
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
            Locate the Pet you want to sell (make sure it's withdrawn from the
            game).
          </li>
          <li className="guide__text-li">
            Decide the selling price in $MAGIC.
          </li>
          <li className="guide__text-li">
            Determine how long you want your Pet listed in the marketplace.
          </li>
          <li className="guide__text-li">
            Click the yellow button to create your item listing.
          </li>
          <li className="guide__text-li">
            Use MetaMask to confirm the transaction.
          </li>
          <li className="guide__text-li">
            If you hear a satisfying sound, your Pet is successfully listed on
            the marketplace.
          </li>
        </ol>
        <h3 className="guide__text-h3">Transfer a Pet</h3>
        <p className="guide__text-p">
          Transferring a Pet is a simple process as outlined in this guide. Just
          click on the "..." button and choose the transfer option. Next, enter
          the wallet address where you want to send the pet, and you're
          finished. Remember that having ETH is crucial to facilitate the
          transfer of an item between accounts.
        </p>
        <p className="guide__text-p">
          Please be aware that all the pet-related content, and mechanics
          presented in the prototype may evolve in the alpha version and,
          ultimately, in the full release of our project.
        </p>
      </div>
    </section>
  );
}

export default GuidePets;
