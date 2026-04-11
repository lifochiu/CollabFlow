"use client";
import React, { useState } from "react";
import UserIcon from "../_component/user";
import LevelBadge from "../_component/levelBadge";

export default function Board() {
  const cards = () => {
    return (
      <div className="w-60 h-30 border border-b-black rounded-md pl-5 pt-2">
        <p>Title</p>
        <LevelBadge level="Medium" />
        <div className="flex flex-row items-center mt-2">
          <p className="">Due 11-04-2026</p>
          <UserIcon />
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-row justify-center mt-10 gap-x-8">
      <div>
        <p className="mb-5 font-bold text-xl">TO DO</p>
        {cards()}
      </div>
      <div>
        <p className="mb-5 font-bold text-xl">IN PROGRESS</p>
        {cards()}
      </div>
      <div>
        <p className="mb-5 font-bold text-xl">DONE</p>
        {cards()}
      </div>
    </div>
  );
}
