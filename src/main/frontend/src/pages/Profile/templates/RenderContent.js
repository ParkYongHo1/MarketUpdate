import { useSelector } from "react-redux";

const RenderContent = () => {
  const activeTab = useSelector((state) => state.profile.activeTab);

  switch (activeTab) {
    case "writeList":
      return "작성 글 목록";
    case "reviewList":
      return "받은 거래 후기";
    case "heartList":
      return "관심 목록";
    case "changeEmail":
      return "이메일 변경";
    case "changePassword":
      return "비밀번호 변경";
    case "changePhone":
      return "휴대폰 번호 변경";
    case "changeAddress":
      return "주소 변경";
    case "event":
      return "진행 중인 이벤트";
    case "notice":
      return "공지사항";
    case "faq":
      return "자주 묻는 질문";
    default:
      return "프로필";
  }
};

export default RenderContent;
