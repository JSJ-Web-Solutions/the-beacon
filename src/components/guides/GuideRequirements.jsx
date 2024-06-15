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
            To play The Beacon, you'll need MetaMask.
          </li>
          <li className="guide__text-li">
            Follow these steps to set up MetaMask and Arbitrum One:
          </li>
          <ol>
            <li className="guide__text-li-inner">
              Install the MetaMask browser extension from metamask.io.
            </li>
            <li className="guide__text-li-inner">
              Follow the setup flow on the MetaMask setup page.
            </li>
            <ul>
              <li className="guide__text-li-inner-2">
                Set up a wallet in MetaMask
              </li>
              <li className="guide__text-li-inner-2">
                Import wallets from a different MetaMask client
              </li>
            </ul>
            <li className="guide__text-li-inner">
              Add Arbitrum One network to MetaMask following this guide.
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
            <li className="guide__text-li-inner">SushiSwap: Tutorial</li>
            <li className="guide__text-li-inner">Credit Card: Tutorial</li>
            <li className="guide__text-li-inner">Bridge: Tutorial</li>
          </ul>
        </ul>
      </div>
    </section>
  );
}

export default Guide2;
