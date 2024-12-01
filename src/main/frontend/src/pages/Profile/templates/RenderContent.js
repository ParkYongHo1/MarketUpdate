import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import WriteList from "../organisms/WriteList";
import ReviewList from "../organisms/ReviewList";
import HeartList from "../organisms/HeartList";
import ChangeEmail from "../organisms/ChangeEmail";
import Notice from "../organisms/Notice";
import Faq from "../organisms/Faq";

const RenderContent = () => {
  const activeTab = useSelector((state) => state.profile.activeTab);

  switch (activeTab) {
    case "writeList":
      return <WriteList />;
    case "reviewList":
      return <ReviewList />;
    case "heartList":
      return <HeartList />;
    case "changeEmail":
      return <ChangeEmail />;
    case "notice":
      return <Notice />;
    case "faq":
      return <Faq />;
    default:
      return <div>프로필</div>;
  }
};

export default RenderContent;
