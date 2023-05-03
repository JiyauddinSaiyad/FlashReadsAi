import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { logo, pngLogo } from "../assets";

const heroLogo = {
  marginTop: "2rem",
  width:"5rem",
}

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={pngLogo} onClick={() =>
          window.open("https://flashreadsai.netlify.app/")
        }
          alt='sumz_logo'
          className='logo w-28 object-contain'
        />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/JiyauddinSaiyad", "_blank")
          }
          className='black_btn'
        >
          <FontAwesomeIcon icon={faGithub} className='mr-2' />
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        <span >Summarize Articles with </span> <br className='max-md:hidden' />
        <span className='orange_gradient '>Flash Reads AI by OpenAI GPT-4</span>
      </h1>
      <h1>
        <img src={pngLogo} style={heroLogo}
          alt='sumz_logo'
          className='logo w-28 object-contain'
        />
      </h1>
      <h2 className='desc'>
        Simplify your reading with Flash Reads AI, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
