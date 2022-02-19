import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="google icon" />
    </div>
    <div>
      <img src={slack} alt="slack icon" />
    </div>
    <div>
      <img src={atlassian} alt="atlassin icon" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox icon" />
    </div>
    <div>
      <img src={shopify} alt="shopify icon" />
    </div>
  </div>
);

export default Brand;
