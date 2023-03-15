import React, { createContext, useContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xDEff216166bF562E6Fea34c5D7fF343E59eAc74e"
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, // owner
        form.title, // title
        form.description, // description
        form.target, // target
        new Date(form.deadline).getTime(), // deadline
        form.image, // image
      ]);

      console.log("Contract call success", data);
    } catch (error) {
      console.log("Contract call failure", error);
    }
  };

  return (
    <StateContext.Provider
      value={{ address, contract, createCampaign: publishCampaign }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  useContext(StateContext);
};
