import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Account } from "src/components/Account";
import { useAccount } from "wagmi";

export default function App() {
  const { isConnected } = useAccount();
  return (
    <div>
      <div id="background-box"></div>
      <div id="app-main">
        <h1>Applebee's</h1>
        <ConnectButton />
        {isConnected && <Account />}
      </div>
    </div>
  );
}
