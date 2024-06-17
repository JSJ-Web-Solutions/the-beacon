import { Link } from "react-router-dom";

function Guide2() {
  return (
    <section className="guide">
      <div className="section-title">
        <h1>What do I need to play ?</h1>
      </div>
      <div className="guide__text-container">
        <p className="guide__text-p">
          To embark on your journey into The Beacon, ensure you have the
          following essentials:
        </p>
        <h3 className="guide__text-h3">Web Browser</h3>
        <h3 className="guide__text-h3">Digital Wallet</h3>
        <ul>
          <li className="guide__text-li">
            To play The Beacon, you'll need{" "}
            <Link to="https://metamask.io/" target="_blank">
              MetaMask
            </Link>
            .
          </li>
          <li className="guide__text-li">
            Follow these steps to set up MetaMask and Arbitrum One:
          </li>
          <ol>
            <li className="guide__text-li-inner">
              Install the MetaMask browser extension from{" "}
              <Link to="https://metamask.io/" target="_blank">
                metamask.io
              </Link>
              .
            </li>
            <li className="guide__text-li-inner">
              Follow the setup flow on the MetaMask setup page.
            </li>
            <ul>
              <li className="guide__text-li-inner-2">
                <Link
                  to="https://www.notion.so/f11a497b7a674321be0ed4ab22341b54?p=a3a883982a814b9d86f176dde4375fa6&pm=s&pvs=4"
                  target="_blank"
                >
                  Set up a wallet in MetaMask
                </Link>
              </li>
              <li className="guide__text-li-inner-2">
                <Link
                  to="https://www.notion.so/Import-wallets-from-a-different-MetaMask-client-34d3ec63138d42849d309a7bb6f5e0a4?pvs=4"
                  target="_blank"
                >
                  Import wallets from a different MetaMask client
                </Link>
              </li>
            </ul>
            <li className="guide__text-li-inner">
              Add Arbitrum One network to MetaMask following this{" "}
              <Link
                to="https://www.notion.so/Add-founds-to-your-wallet-3f0a6bbd6622401ab0ad34ed25f915a9?pvs=4"
                target="_blank"
              >
                guide
              </Link>
              .
            </li>
            <li className="guide__text-li-inner">
              Deposit ETH funds into your MetaMask wallet.
            </li>
          </ol>
          <li className="guide__text-li">
            Explore various methods to add ETH to your wallet as outlined in our
            guides.
          </li>
        </ul>
        <h3 className="guide__text-h3">$MAGIC</h3>
        <ul>
          <li className="guide__text-li">
            $MAGIC is the natural resource of the Treasure metaverse. It “powers
            on” NFTs and turns them from fantasy into productive, yield-bearing
            assets.
          </li>
          <li className="guide__text-li">Purchase $MAGIC using:</li>
          <ul>
            <li className="guide__text-li-inner">
              SushiSwap:{" "}
              <Link
                to="https://docs.treasure.lol/get-started/what-is-magic/how-do-i-buy-magic"
                target="_blank"
              >
                Tutorial
              </Link>
            </li>
            <li className="guide__text-li-inner">
              Credit Card:{" "}
              <Link
                to="https://docs.treasure.lol/get-started/what-is-magic/how-do-i-buy-magic"
                target="_blank"
              >
                Tutorial
              </Link>
            </li>
            <li className="guide__text-li-inner">
              Bridge:{" "}
              <Link
                to="https://docs.treasure.lol/get-started/what-is-magic/how-do-i-buy-magic"
                target="_blank"
              >
                Tutorial
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </section>
  );
}

export default Guide2;
