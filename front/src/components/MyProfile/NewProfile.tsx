import React from "react";

const ProfileCard = () => {
  return (
    <div className="wrapper">
      <div className="profile-card js-profile-card">
        <div className="profile-card__img">
          <img
            src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg"
            alt="profile card"
          />
        </div>

        <div className="profile-card__cnt js-profile-cnt">
          <div className="profile-card__name">Muhammed Erdem</div>
          <div className="profile-card__txt">
            Front-end Developer from <strong>Mesopotamia</strong>
          </div>
          <div className="profile-card-loc">
            <span className="profile-card-loc__icon">
              <svg className="icon">
                <use xlinkHref="#icon-location"></use>
              </svg>
            </span>

            <span className="profile-card-loc__txt">Istanbul, Turkey</span>
          </div>

          <div className="profile-card-inf">
            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">1598</div>
              <div className="profile-card-inf__txt">Followers</div>
            </div>

            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">65</div>
              <div className="profile-card-inf__txt">Following</div>
            </div>

            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">123</div>
              <div className="profile-card-inf__txt">Articles</div>
            </div>

            <div className="profile-card-inf__item">
              <div className="profile-card-inf__title">85</div>
              <div className="profile-card-inf__txt">Works</div>
            </div>
          </div>

          <div className="profile-card-social">
            <a
              href="https://www.facebook.com/iaMuhammedErdem"
              className="profile-card-social__item facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-font">
                <svg className="icon">
                  <use xlinkHref="#icon-facebook"></use>
                </svg>
              </span>
            </a>

            <a
              href="https://twitter.com/iaMuhammedErdem"
              className="profile-card-social__item twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-font">
                <svg className="icon">
                  <use xlinkHref="#icon-twitter"></use>
                </svg>
              </span>
            </a>

            <a
              href="https://www.instagram.com/iamuhammederdem"
              className="profile-card-social__item instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-font">
                <svg className="icon">
                  <use xlinkHref="#icon-instagram"></use>
                </svg>
              </span>
            </a>

            <a
              href="https://www.behance.net/iaMuhammedErdem"
              className="profile-card-social__item behance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-font">
                <svg className="icon">
                  <use xlinkHref="#icon-behance"></use>
                </svg>
              </span>
            </a>

            <a
              href="https://github.com/muhammederdem"
              className="profile-card-social__item github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-font">
                <svg className="icon">
                  <use xlinkHref="#icon-github"></use>
                </svg>
              </span>
            </a>

            <a
              href="https://codepen.io/JavaScriptJunkie"
              className="profile-card-social__item codepen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-font">
                <svg className="icon">
                  <use xlinkHref="#icon-codepen"></use>
                </svg>
              </span>
            </a>

            <a
              href="http://muhammederdem.com.tr/"
              className="profile-card-social__item link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-font">
                <svg className="icon">
                  <use xlinkHref="#icon-link"></use>
                </svg>
              </span>
            </a>
          </div>

          <div className="profile-card-ctr">
            <button className="profile-card__button button--blue js-message-btn">
              Message
            </button>
            <button className="profile-card__button button--orange">
              Follow
            </button>
          </div>
        </div>

        <div className="profile-card-message js-message">
          <form className="profile-card-form">
            <div className="profile-card-form__container">
              <textarea placeholder="Say something..."></textarea>
            </div>

            <div className="profile-card-form__bottom">
              <button className="profile-card__button button--blue js-message-close">
                Send
              </button>

              <button className="profile-card__button button--gray js-message-close">
                Cancel
              </button>
            </div>
          </form>

          <div className="profile-card__overlay js-message-close"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
