import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const essential = <span className="text-[#4acd8d] text-[15px]">*</span>;

  const hundred = <span className="text-[#4acd8d]">100%</span>;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && "Loading..."}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName={"Your Name"}
            essential={essential}
            placeholder="Write your name"
            inputType="text"
            value={form.name}
            handleChange={(e) => {
              handleFormFieldChange("name", e);
            }}
          />
          <FormField
            labelName={"Campaign Title"}
            essential={essential}
            placeholder="Write a campaign title"
            inputType="text"
            value={form.title}
            handleChange={(e) => {
              handleFormFieldChange("title", e);
            }}
          />
        </div>

        <FormField
          labelName={"Story"}
          essential={essential}
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => {
            handleFormFieldChange("description", e);
          }}
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="money_icon"
            className="w-[40px] h-[40px] object-contain  animate-pulse"
          />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[30px] animate-pulse my-auto">
            You will get {hundred} of the raised amount!
          </h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName={"Goal"}
            essential={essential}
            placeholder="ETH 0.50"
            inputType="number"
            value={form.target}
            handleChange={(e) => {
              handleFormFieldChange("target", e);
            }}
          />
          <FormField
            labelName={"End Date"}
            essential={essential}
            placeholder="Select End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => {
              handleFormFieldChange("deadline", e);
            }}
          />
        </div>

        <FormField
          labelName={"Campaign image"}
          essential={essential}
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => {
            handleFormFieldChange("image", e);
          }}
        />

        <div className="flex justify-center items-center mt-[20px]">
          <CustomButton
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
