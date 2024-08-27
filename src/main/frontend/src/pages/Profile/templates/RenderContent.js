import { useSelector } from "react-redux";
import WriteList from "../organisms/WriteList";
import ReviewList from "../organisms/ReviewList";

const RenderContent = () => {
  const activeTab = useSelector((state) => state.profile.activeTab);

  switch (activeTab) {
    case "writeList":
      return <WriteList />;
    case "reviewList":
      return <ReviewList />;
    case "heartList":
      return "관심 목록";
    case "changeEmail":
      return "회원정보 변경";
    case "notice":
      return "공지사항";
    case "faq":
      return "자주 묻는 질문";
    default:
      return "프로필";
  }
};

export default RenderContent;
