import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  // Use the connectWallet hook thirdweb gives us.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className='landing'>
        <h1>Welcome to SoccerDao</h1>
        <button onClick={() => connectWallet("injected")} className='btn-hero'>
          Connect Your Wallet!!!
        </button>
      </div>
    );
  }

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>👀 Wallet connected, now what!</h1>
    </div>
  );
};

export default App;
