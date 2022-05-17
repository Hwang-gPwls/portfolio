import React from "react";
import "../main.css";

const Home = () => {
  return (
    <div className="container">
      <nav className="global-nav">
        <div className="global-nav-links">
          <a href="#" className="global-nav-item">
            Home
          </a>
          <a href="#" className="global-nav-item">
            About
          </a>
          <a href="#" className="global-nav-item">
            Projects
          </a>
          <a href="#" className="global-nav-item">
            Contact
          </a>
        </div>
      </nav>
      <nav className="local-nav">
        <div className="local-nav-links">
          <a href="" className="product-name">
            AirMug Pro
          </a>
          <a href="">개요</a>
          <a href="">제품사양</a>
          <a href="">구입하기</a>
        </div>
      </nav>

      <section className="scroll-section" id="scroll-section-0">
        <h1>AirMug Pro</h1>
        <div className="sticky-elem main-message">
          <p>
            온전히 빠져들게 하는 <br />
            최고급 세라믹
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            주변 맛을 느끼게 해주는 <br />
            주변 맛 허용 모드
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>
            온종일 편안한 <br />
            맞춤형 손잡이
          </p>
        </div>
        <div className="sticky-elem main-message">
          <p>새롭게 입가를 찾아온 매혹</p>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-1">
        <p className="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          quibusdam aspernatur ratione eos ipsam quasi explicabo sunt, labore
          dolorum recusandae odit, mollitia odio. Perspiciatis rem eaque rerum
          et blanditiis porro! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloremque quibusdam aspernatur ratione eos ipsam
          quasi explicabo sunt, labore dolorum recusandae odit, mollitia odio.
          Perspiciatis rem eaque rerum et blanditiis porro! Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Doloremque quibusdam
          aspernatur ratione eos ipsam quasi explicabo sunt, labore dolorum
          recusandae odit, mollitia odio. Perspiciatis rem eaque rerum et
          blanditiis porro!
        </p>
      </section>

      <section className="scroll-section" id="scroll-section-2">
        <div className="sticky-elem main-message">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>
        <div className="sticky-elem desc-messae">
          <p>
            편안함 목넘김을 완성하는 디테일한 여러 구성 요소로, 우리는 이를
            하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
            AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
            오롯이 음료만 남게 되죠.
          </p>
          <div className="pin"></div>
        </div>
        <div className="sticky-elem desc-messae">
          <p>디자인 앤 퀄리티 오브 스웨덴, 메이드 인 차이나</p>
          <div className="pin"></div>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-3">
        <p className="mid-message">
          <strong>textText</strong>
          <br />
          아이디어를 광활하게 편칠
          <br />
          아름답고 부드러운 음료 공간
        </p>
        <p className="canvas-caption">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          quibusdam aspernatur ratione eos ipsam quasi explicabo sunt, labore
          dolorum recusandae odit, mollitia odio. Perspiciatis rem eaque rerum
          et blanditiis porro! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloremque quibusdam aspernatur ratione eos ipsam
          quasi explicabo sunt, labore dolorum recusandae odit, mollitia odio.
          Perspiciatis rem eaque rerum et blanditiis porro! Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Doloremque quibusdam
          aspernatur ratione eos ipsam quasi explicabo sunt, labore dolorum
          recusandae odit, mollitia odio. Perspiciatis rem eaque rerum et
          blanditiis porro!
        </p>
      </section>

      <footer className="footer">by Hyejin</footer>
    </div>
  );
};

export default Home;
