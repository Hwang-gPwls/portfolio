import { createGlobalStyle } from "styled-components";
import backgroundImg from "../asset/images/noisy-texture.png";

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar { 
        display: none !important;
    }

    body{
        @import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@400;900&family=Yeon+Sung&display=swap");
        font-family: "Noto Sans KR", sans-serif;
        background-image: url(${backgroundImg});
        scroll-behavior: smooth;
        letter-spacing: -0.05em;
    }
    
    p {
        line-height: 1.6;
    }

    .scroll-section {
        padding-top: 10vh;
    }
    
    .sticky-elem {
        display: none;
        position: fixed;
        left: 0;
        width: 100%;
    }
    
    .sticky-elem {
        &p{
            color: #7d97b8;
        }
    }
    
    #show-scene-0 #scroll-section-0 .sticky-elem{
        display: block;
    }
    
    @media (min-width: 1024px) {
        #scroll-section-0 h1 {
            font-size: 9vw;
        }
    
        .main-message {
            font-size: 4vw;
        }
    
        .description {
            font-size: 2rem;
        }
    
        .description strong {
            font-size: 6rem;
        }
    }
`;
