export const skills = [
  {
    key: "react",
    title: "React",
    contents: [
      "ToyProject 일기장을 개발 했습니다.",
      "Portfolio 프로젝트를 개발 했습니다.",
      "공식문서 및 강의를 통한 체계적인 학습을 했습니다.",
    ],
  },
  {
    key: "html",
    title: "HTML/CSS",
    contents: [
      "HTML5 기본 문법을 준수하고 웹표준을 지키려고 노력 합니다.",
      "웹페이지에 사용할 컨트롤 ",
      "크로스 브라우징에 대응할 수 있습니다.",
      "Bootstrap, kendo ui 등 컨트롤 오픈소스 및 CSS 라이브러리를 사용하여 개발할 수 있습니다.",
      "handsontable 등의 컨트롤 오픈소스 라이브러리를 고도화 하여 사용한 경험이 있습니다.",
    ],
  },
  {
    key: "javascript",
    title: "Javascript",
    contents: [
      "ES6+ 문법에 익숙합니다.",
      "회사 내 자체 프레임워크 개발에 참여해 ES6+ 함수를 고도화 하여 적용시킨 경험이 있습니다.",
      "webpack등의 번들러 사용경험이 있습니다.",
      "VanillaJS를 이용해 웹페이지를 개발할 수 있습니다.",
    ],
  },
  {
    key: "qrame",
    title: "Qrame",
    contents: [
      "사내 프레임워크로 ES6+를 고도화 한 함수 및 자체내장함수와 기능등을 제공합니다.",
      "프론트엔드 개발에 필요한 컨트롤 고도화 및 함수 고도화에 참여 하였습니다.",
      "다양한 오픈소스를 활용하고, 접목시킨 경험이 있습니다.",
      "Qrame을 이용하여 ERP솔루션 및 관리자 페이지 개발 경험이 있습니다.",
    ],
  },
  {
    key: "net",
    title: ".Net Core",
    contents: [".Net Core를 이용한 API 개발 경험이 있습니다."],
  },
  {
    key: "mysql",
    title: "MySQL",
    contents: [
      "스키마 설계 및 ERD작성 경험이 있습니다.",
      "MySQL 문법과 함수를 사용하여 SQL을 작성 합니다.",
      "서버리스 프로젝트의 쿼리를 담당하여, 백엔드에서 처리해야 할 기능을 쿼리를 통해 구현한 경험이 있습니다.",
      "쿼리 성능 최적화 경험이 있습니다.",
    ],
  },
];

export const projects = [
  {
    title: "EasyWork ERP 프로그램 운영",
    date: "2022.03 - 현재",
    skills: ["Qrame", "Javascript", "MySQL"],
    about:
      "클라이언트별 추가기능 개발 및 쿼리, 컨트롤 기능 개선을 위한 EasyWork 운영",
    contents: [
      "Qrame 컨트롤 이슈 파악 및 기능 개선",
      "기존 테스트 DB의 스키마 및 일부 운영 데이터 운영 DB로 마이그레이션",
      "상대적으로 성능이 느린 페이지의 쿼리 개선",
      "카카오 지도 API를 사용한 근태 위치 시각화 팝업 추가 개발",
      "사용자별 출퇴근 시간 관리 및 휴가 취소 기능, 외근 직원 별도 관리 기능 개발",
      "사용자별 출퇴근 시간 30분 이후 근태 데이터가 없을경우, 알림톡 전송 쿼리 개발",
    ],
  },
  {
    title: "Mojito 쇼핑몰 솔루션 개발",
    date: "2021.10 - 2021.12",
    skills: ["ASP.NET Core", "Javascript", "MySQL"],
    about: "다양한 브랜드쇼핑몰에 대응하기 위한 쇼핑몰 솔루션 개발",
    contents: [
      "ASP .Net Core를 이용한 웹페이지 개발",
      "모듈화를 통해 요구사항별로 필요한 화면만을 사용할 수 있도록 개발",
      "서버와의 연동을 위한 API개발 및 쿼리 작성",
      "목록화면 및 장바구니, 구매목록 페이지에 페이지네이션 적용 개발",
      "session데이터를 사용한 장바구니 기능 개발",
      "이니시스 결제 모듈 적용",
      "chrome, safari에서의 크로스브라우징 테스트",
    ],
  },
  {
    title: "EasyWork ERP 프로그램 개발",
    date: "2021.03 - 2021.10",
    skills: ["Qrame", "Javascript", "MySQL"],
    about:
      "근태, 결재, 게시판 등 모듈화를 통해 클라이언트가 원하는 기능만을 선택구매할 수 있는 ERP솔루션 개발",
    contents: [
      "ERP 프로그램 스키마 설계 및 쿼리 작성",
      "기획 / 설계 단계부터 참여",
      "Report Designer 솔루션을 사용하여 결재서류 뷰어와 인쇄기능 제공 및 Report Designer 파일 개발에 참여",
      "사내 프레임워크인 Qrame을 사용한 화면 개발",
      "디자이너와의 협업을 통한 css 수정 및 퍼블리싱 참여",
    ],
  },
  {
    title: "윤선생 Wooyoung(우리동네 영어교실) 개발 및 운영",
    date: "2020.10 - 2020.12 / 2021.01 - 2021.03",
    skills: ["Qrame", "Javascript", "grunt"],
    about: "윤선생 Wooyoung 관리자 웹페이지 개발",
    contents: [
      "회원, 지점관리 및 교재 주문 서비스 개선을 위한 Admin 웹 페이지 개발 및 운영",
      "사내 프레임워크인 Qrame을 사용한 화면 개발",
      "Qrame 솔루션 오류 개선 및 컴포넌트 고도화",
      "인수인계를 위한 Qrame Frontend 개발 가이드 문서 작성",
    ],
  },
  {
    title: "Qrame Solution 고도화 및 오류 수정",
    date: "2020.01 - 현재",
    skills: ["Javascript", ".Net Core"],
    about: "사내 프레임워크인 Qrame Solution의 테스트 및 오류수정, 고도화",
    contents: [
      "Qrame Frontend 컨트롤 및 함수 테스트",
      "Qrame Frontend 기술 공유를 위한 사내 세미나 진행",
      "Qrame Frontend 오류 개선 및 컴포넌트 고도화",
      "Qrame Control 디자인 작업에 참여",
      "인수인계 및 교육을 위한 Qrame Frontend 데모 페이지 개발",
      "Qrame 오픈소스화를 위한 깃허브 구성 및 commit message conveltion 문서 작성",
    ],
  },
  {
    title: "Collabic (생산자 구매자 섬유산업 서비스 플랫폼)",
    date: "2019.10 - 2019.12",
    skills: ["Vue", "Qrame", "Javascript", "SQLServer"],
    about: "원단 판매 사업의 판매 프로세스 개선을 위한 원단 추천 AI 프로젝트",
    contents: [
      "vue.js를 사용하여 AI기반 구매자 추천 소재 제안 알고리즘 시현을 위한 데모 화면 개발",
      "사내 프레임워크인 Qrame을 사용한 AI Admin 페이지 개발",
    ],
  },
];

export const sceneInfo = {
  //0
  id: 0,
  type: "sticky",
  values: {
    messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
    messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
    messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
    messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],

    messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
    messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
    messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
    messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],

    messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
    messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
    messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
    messageC_translateY_out: [0, -20, { start: 0.65, end: 0.9 }],

    messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
    messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
    messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
    messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
  },
};
