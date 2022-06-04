import React from 'react';
import { BsTwitter, BsGithub, BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/z9669x/'><BsGithub /> </a>
    </div>
    <div>
    <a href='https://twitter.com/z9669x/'><BsTwitter /> </a>
    </div>
    <div>
    <a href='https://instagram.com/z9669x/'><BsInstagram /> </a>
    </div>
  </div>
);

export default SocialMedia;