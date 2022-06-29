import "../projects/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="wrapper-career"></div>
      <div className="section-0-frame">
        <div className="careerContents">
          <div className="box-wrapper">
            <div id="box" data-aos="fade-up-right">
              <h1 className="heading">Mojito 쇼핑몰 솔루션 개발</h1>
              <div className="data">
                <span className="date">2021.10 - 2021.12</span>
              </div>
              <p className="texts">
                ASP .Net Core를 이용한 웹페이지 개발
                <br />
                모듈화를 통해 요구사항별로 필요한 화면만을 사용할 수 있도록 개발
                <br />
                서버와의 연동을 위한 API개발 및 쿼리 작성
              </p>
            </div>
          </div>
          <div id="box" data-aos="fade-down-left">
            <h1 className="heading">EasyWork ERP 프로그램 개발 및 운영</h1>
            <div className="data">
              <span className="date">2021.03 - 2021.10 / 2022.01 - 현재</span>
            </div>
            <p className="texts">
              ERP 프로그램 스키마 설계 및 쿼리 작성
              <br />
              기획 / 설계 단계부터 참여
              <br />
              사내 프레임워크인 Qrame을 사용한 화면 개발
              <br />
              Qrame 컨트롤 이슈 파악 및 기능 개선
            </p>
          </div>
          <div className="box-wrapper">
            <div id="box" data-aos="fade-down-right">
              <h1 className="heading">
                윤선생 Wooyoung(우리동네 영어교실) 개발 및 운영
              </h1>
              <div className="data">
                <span className="date">
                  2020.10 - 2020.12 / 2021.01 - 2021.03
                </span>
              </div>
              <p className="texts">
                회원, 지점관리 및 교재 주문 서비스 개선을 위한 관리자 웹 페이지
                개발 및 운영
                <br />
                Qrame 오픈소스 오류 개선 및 컴포넌트 고도화
                <br />
                사내 프레임워크인 Qrame을 사용한 화면 개발
              </p>
            </div>
          </div>
          <div id="box" data-aos="fade-down-left">
            <h1 className="heading">
              Collabic (생산자 구매자 섬유산업 서비스 플랫폼)
            </h1>
            <div className="data">
              <span className="date">2019.10 - 2019.12</span>
            </div>
            <p className="texts">
              원단 판매 사업의 판매 프로세스 개선을 위한 원단 추천 AI 프로젝트
              <br />
              vue.js를 사용하여 AI기반 구매자 추천 소재 제안 알고리즘 시현을
              위한 데모 화면 개발
              <br />
              사내 프레임워크인 Qrame을 사용한 AI Admin 페이지 개발
              <br />
              ML.NET을 이용한 AI 테스트용 API 개발
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
