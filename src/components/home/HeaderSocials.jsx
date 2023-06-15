import React from 'react'

const HeaderSocials = () => {
  return (
    <div class="home__socials">
        <a href="https://www.linkedin.com" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://www.twitter.com" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-twitter"></i>
        </a>

        <a href="https://www.google.com" className="home__social-link" target='_blank'>
            <i class="fa-regular fa-envelope"></i>
        </a>
    </div>
  )
}

export default HeaderSocials