import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/UW-bialy.png";

function Slider(props) {
  const [menu, setMenu] = useState(false);
  const [time, setTime] = useState(20);
  const [flag, setFlag] = useState(0);
  const [burger, setBurger] = useState(false);

  function handleClickBurger() {
    setBurger(!burger);
    if (burger) {
      document.body.classList.remove("js-mobile-menu-open");
    } else {
      document.body.classList.add("js-mobile-menu-open");
    }
  }

  function disableActiveMenu() {
    document.body.classList.remove("js-mobile-menu-open");
  }

  function changeSliderText() {
    if (time === 20) {
      setFlag(0);
    } else if (time === 15) {
      setFlag(1);
    } else if (time === 10) {
      setFlag(2);
    } else if (time === 5) {
      setFlag(3);
    }
  }

  function timer() {
    setTime(time - 1);
    changeSliderText();
  }

  useEffect(() => {
    let progressInterval = null;
    if (time <= 20) {
      progressInterval = setInterval(timer, 1000);
      return () => clearInterval(progressInterval);
    }
  });

  if (time === 0) {
    setTime(20);
  }

  function addFlag() {
    if (flag >= 3) {
      setFlag(0);
    } else {
      setFlag(flag + 1);
    }

    if (flag === 0) {
      setTime(20);
    } else if (flag === 1) {
      setTime(15);
    } else if (flag === 2) {
      setTime(10);
    } else if (flag === 3) {
      setTime(5);
    }
  }

  function subtractFlag() {
    if (flag <= 0) {
      setFlag(3);
    } else {
      setFlag(flag - 1);
    }

    if (flag === 0) {
      setTime(20);
    } else if (flag === 1) {
      setTime(15);
    } else if (flag === 2) {
      setTime(10);
    } else if (flag === 3) {
      setTime(5);
    }
  }

  function changeBgc() {
    if (window.scrollY >= 144) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  window.addEventListener("scroll", changeBgc);

  return (
    <section className={`slider_${flag}`}>
      <div className="slider_wrapper">
        <div className={menu ? "menu_wrapper active" : "menu_wrapper"}>
          <div className="menu">
            <div className={menu ? "logo_slider active" : "logo_slider"}>
              <Link
                to="/"
                onClick={() => {
                  setBurger(false);
                  disableActiveMenu();
                }}
              >
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <ul className={burger ? "active_burger" : "nonactive_burger"}>
              <li>
                <Link
                  to="/1_stopnia"
                  onClick={() => {
                    setBurger(false);
                    disableActiveMenu();
                  }}
                >
                  I stopnia
                </Link>
              </li>
              <li>
                <Link
                  to="/2_stopnia"
                  onClick={() => {
                    setBurger(false);
                    disableActiveMenu();
                  }}
                >
                  II stopnia
                </Link>
              </li>
              <li>
                <Link
                  to="/podyplomowe"
                  onClick={() => {
                    setBurger(false);
                    disableActiveMenu();
                  }}
                >
                  Podyplomowe
                </Link>
              </li>
              <li>
                <Link
                  to="/szkolenia"
                  onClick={() => {
                    setBurger(false);
                    disableActiveMenu();
                  }}
                >
                  Szkolenia
                </Link>
              </li>
              <li>
                <Link
                  to="/uwagi"
                  onClick={() => {
                    setBurger(false);
                    disableActiveMenu();
                  }}
                >
                  Uwagi
                </Link>
              </li>
            </ul>
            <div
              className={burger ? "burger_mobile active" : "burger_mobile"}
              onClick={() => {
                handleClickBurger();
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="main_content_wrapper">
          <div className="txt_btn_slider">
            <div className="txt_slider">
              <p>
                {flag === 0 && "Będziesz się uczyć z ciekawością."}
                {flag === 1 && "Będziesz się uczyć z ciekawością. cz.2"}
                {flag === 2 && "Będziesz się uczyć z ciekawością. cz.3"}
                {flag === 3 && "Będziesz się uczyć z ciekawością. cz.4"}
              </p>
              <p>
                {flag === 0 && "Obiecujemy."}
                {flag === 1 && "Obiecujemy. cz.2"}
                {flag === 2 && "Obiecujemy. cz.3"}
                {flag === 3 && "Obiecujemy. cz.4"}
              </p>
            </div>
            <div className="buttons_slider">
              <div className="slider_left_btn">
                <p>ZOBACZ WIĘCEJ</p>
              </div>
              <div className="slider_right_btn">
                <p>UMÓW SIĘ Z ANIOŁEM</p>
              </div>
            </div>
            <div className="arrows">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.117"
                height="20.992"
                viewBox="0 0 30.117 20.992"
                onClick={subtractFlag}
              >
                <path
                  id="nawigacja_slajdera"
                  data-name="nawigacja slajdera"
                  d="M237.109,708.4H215l8.364-8.4h-5.913l-10.456,10.5L217.448,721h5.913L215,712.6h22.113Z"
                  transform="translate(-206.992 -700.004)"
                  fill="#fff"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.117"
                height="20.992"
                viewBox="0 0 30.117 20.992"
                onClick={addFlag}
              >
                <path
                  id="nawigacja_slajdera"
                  data-name="nawigacja slajdera"
                  d="M250.891,712.6H273l-8.364,8.4h5.913l10.456-10.5L270.552,700h-5.913L273,708.4H250.891Z"
                  transform="translate(-250.891 -700.004)"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
          <div className="dots">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <circle
                id="Ellipse_764_copy_3"
                data-name="Ellipse 764 copy 3"
                cx="6"
                cy="6"
                r="6"
                fill={flag === 0 ? "#F6C004" : "#fff"}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <circle
                id="Ellipse_764_copy_3"
                data-name="Ellipse 764 copy 3"
                cx="6"
                cy="6"
                r="6"
                fill={flag === 1 ? "#F6C004" : "#fff"}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <circle
                id="Ellipse_764_copy_3"
                data-name="Ellipse 764 copy 3"
                cx="6"
                cy="6"
                r="6"
                fill={flag === 2 ? "#F6C004" : "#fff"}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <circle
                id="Ellipse_764_copy_3"
                data-name="Ellipse 764 copy 3"
                cx="6"
                cy="6"
                r="6"
                fill={flag === 3 ? "#F6C004" : "#fff"}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
