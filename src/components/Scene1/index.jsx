import React, { useState, forwardRef } from "react";
import Home from "./Home";
import TextScroll from "./TextScroll";
import "./Home.css";

const Scene1 = ({}, ref ) => {
  return (
    <>
      <Home/>
      <TextScroll ref = {ref}/>
    </>
  );
};

export default forwardRef(Scene1);
