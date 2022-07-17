import "./Scene2.css";
import Contact from "./Contact";
import TextWavy from "./TextWavy";

const Scene2 = () => {
  return (
    <div className="section-0-frame">
      <div className="container-scene2">
        <TextWavy />
        <div className="wrapper-description">
          <div className="heading">
            경험을 통해 성장하고, 새로운 도전을 두려워 하지 않는 개발자 황혜진
            입니다.
          </div>
          <div>
            사람들에게 편의와 긍정적인 영향을 줄 수 있는 좋은 서비스를 개발하고
            발전시키는 데에 관심이 많습니다.
            <br />
            주로 웹 서비스 개발을 담당하였으며,
            <br />
            회사에서 자체적으로 개발한 프레임워크인 Qrame 기능 확장 및
            유지보수에 참여하여 해당 
            <div className="highlight-container">
              <span className="highlight">
                프레임워크를 고도화하고 다른 프레임워크와 접목해 사용한 경험
              </span>
            </div>
            이 있습니다.
            <div className="highlight-container">
              <span className="hightlight">기획부터 개발, 운영</span>
            </div>
            까지 프로젝트 전반적인 과정에 참여하고 경험을 쌓고 있으며, 개발
            완료로 끝나는 것이 아닌, 
            <div className="highlight-container">
              <span className="hightlight">지속할 수 있는 개발</span>
            </div>
            을 지향합니다.
            <br />
            <div className="highlight-container">
              <span className="hightlight">건강한 협업 문화</span>
            </div>
            를 만드는 일을 좋아합니다.
            <br />
            스케쥴과 이슈 관리가 되지 않는 점이 있어, 팀 구성원들과 위클리 회의
            문화를 제안해 개발 상황과 이슈에 대한 원활한 소통문화를 만들어
            나간 경험이 있습니다.
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Scene2;
