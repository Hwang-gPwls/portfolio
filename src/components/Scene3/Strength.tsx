import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Strength = ({ skill, idx }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const isEven = (idx + 1) % 2 === 0;

  return (
    <Container data-aos={isEven ? "fade-down-right" : "fade-down-left"}>
      <div className={isEven ? "card card-right" : "card card-left"}>
        <div className="card_heading">{skill.title}</div>
        <div>
          {skill.contents.map((content, idx) => (
            <div
              className="card_wrapper_content card_paper"
              key={idx.toString()}>
              <FontAwesomeIcon icon={faSquareCheck} size="sm" fixedWidth />
              <div className="wrapper_content_content" key={idx.toString()}>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .card {
    width: 45rem;
    background-color: ${({ theme }) => theme.color.white};
    border: 0.7px solid ${({ theme }) => theme.color.black};
    border-radius: 0.8rem;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    ::hover {
      box-shadow: 10px 14px 0 #3d4856,
        10px 10px 0 ${({ theme }) => theme.color.black};
      transform: translateY(-10px);
    }

    &_heading {
      margin: 2rem 1rem;
      width: 41rem;
      font-size: 3.5vh;
      font-weight: bold;
      color: ${({ theme }) => theme.color.black};
      text-align: center;
      background-color: #f9f0e0;
      border: 1.3px solid #3d4856;
      border-radius: 1.7rem;
    }

    &_wrapper_content {
      display: flex;
      font-size: 1.1rem;

      &_wrapper_content_content {
        display: table-cell;
        vertical-align: middle;
      }
    }

    &_paper {
      position: relative;
      border: 1px solid #b5b5b5;
      background: white;
      -webkit-background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      background-size: 100% 100%;

      ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 3.5rem;
        bottom: 0;
        border-left: 1px solid #f8d3d3;
      }
    }
  }

  .card * {
    padding: 10px;
  }

  .card-right {
    margin-left: 30rem;
  }

  .card-left {
    margin-right: 30rem;
  }

  .svg-inline--fa.fa-fw {
    width: var(--fa-fw-width, 1.25em);
    margin-top: 0.6rem;
  }
`;

export default React.memo(Strength);
