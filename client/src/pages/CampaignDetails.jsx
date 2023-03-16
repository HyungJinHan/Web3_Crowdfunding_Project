import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { thirdweb } from "../assets";
import { CounterBox } from "../components";
import { useStateContext } from "../context";
import { calculateBarPercentage, daysLeft } from "../utils";

const CampaignDetails = () => {
  const { state } = useLocation();
  // DisplayCampaigns 컴포넌트에서 state 값으로 보낸 값을 사용
  const { getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.campaign.deadline);

  return (
    <div>
      {isLoading && "Loading..."}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <div className="overflow-hidden rounded-xl">
            <img
              src={state.campaign.image}
              alt="campaign_image"
              className="w-full h-[410px] object-cover rounded-xl hover:scale-[103%] transition duration-200 ease-in"
            />
          </div>

          <div className="relative w-full h-[8px] bg-[#3a3a43] mt-2 rounded">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${calculateBarPercentage(
                  state.campaign.target,
                  state.campaign.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            />
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CounterBox title="Days Left" value={remainingDays} />
          <CounterBox
            title={`Raised of ${state.campaign.target}`}
            value={state.campaign.amountCollected}
          />
          <CounterBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white p-3 uppercase">
              Creator
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user_icon"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>

              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">
                  {state.campaign.owner}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                  {state.length} Campaingns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white p-3 uppercase">
              Story
            </h4>

            <div className="mt-[20px]">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
