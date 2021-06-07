import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis("211b48db-e8cc-4b68-82ad-bf781727ea9e", "kovan", {
  pocketDevId: "DEViHwgMmGTrQQzasR85O9z"
});
const web3 = new Web3(portis.provider);

const to = "0x85109f11a7e1385ee826fbf5da97bb97dba0d76f";
const amountInEther = 0.00001;

(async () => {
  const accounts = await portis.provider.enable();
  const response = await web3.currentProvider.send("eth_sendTransaction", [
    {
      from: accounts[0],
      to: to,
      value: etherToHexWei(amountInEther)
    }
  ]);
  print(`Transaction hash: ${response}`);
})();

function etherToHexWei(value) {
  const wei = value * 10 ** 18;
  const hexWei = wei.toString(16);
  return `0x${hexWei}`;
}

function print(str) {
  const p = document.createElement("p");
  p.innerText = str;
  document.getElementById("app").appendChild(p);
}
