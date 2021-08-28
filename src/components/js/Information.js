import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import arrow_point from "../img/arrow_point.png";
import for_whom_img from "../img/for_whom_img.png";
import what_for_img from "../img/what_for_img.png";
import with_whom_img from "../img/with_whom_img.png";
import play_btn from "../img/play_btn.png";

function Information(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="information">
      <div className="for_whom">
        <div className="for_whom_txt">
          <h2>Dla kogo?</h2>
          <p className="for_whom_txt_p">
            Dedykowane nauczycielom posiadającym przygotowanie pedagogiczne,
            którzy chcą uzyskać merytoryczne i metodyczne przygotowanie do
            nauczania kolejnego przedmiotu - Geografii.
          </p>
          <p className="for_whom_txt_p">
            Studia adresowane są do osób legitymujących się wyższym
            wykształceniem na poziomie studiów licencjackim o specjalnościach
            nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne,
            lub słuchaczy legitymujących się wyższym wykształceniem na poziomie
            studiów magisterskich nadających kwalifikacje nauczycielskie i
            przygotowanie pedagogiczne, zgodnie z Rozporządzeniem Ministra
            Edukacji Narodowej z dnia 1 sierpnia 2017 r. w sprawie szczegółowych
            kwalifikacji wymaganych od nauczycieli{" "}
            <span>(Dz.U. 2017 poz. 1575)</span>.
          </p>
          <p className="for_whom_requirements">Wymagane od kandydata:</p>
          <div>
            <img src={arrow_point} alt="Arrow" />
            <p>Ukończone studia wyższe</p>
          </div>
          <div>
            <img src={arrow_point} alt="Arrow" />
            <p>Przygotowanie pedagogiczne</p>
          </div>
        </div>
        <div className="for_whom_img">
          <img src={for_whom_img} alt="Globe" />
        </div>
      </div>
      <div className="what_for">
        <div className="what_for_img">
          <img src={what_for_img} alt="Handshake" />
        </div>
        <div className="what_for_txt">
          <h2>Po co?</h2>
          <p>
            UW wie co zrobić, by programy proponowanych kierunków studiów były
            jak najbardziej atrakcyjne z biznesowego punktu widzenia. Do
            współpracy zapraszamy przedsiębiorców, trenerów, doświadczonych
            praktyków. Dbamy o to, żeby nasi studenci korzystali z doświadczenia
            i wiedzy osób, które odniosły w życiu zawodowy sukces. Dążymy do
            tego, by wybierający naszą uczelnię już w trakcie studiów mieli
            kontakt z jak największą liczbą pracodawców i praktyków biznesu
            ponieważ wiemy, że pomoże to im w zdobyciu wielu potrzebnych
            kwalifikacji oraz umiejętności, które zaprocentują w każdym miejscu
            pracy a także zainspiruje do poszerzania swoich kompetencji.
          </p>
        </div>
      </div>
      <div className="with_whom">
        <div className="with_whom_txt">
          <h2>Z kim?</h2>
          <p>
            Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi do
            ciągłego rozwoju. CDV to miejsce, w którym studenci z
            zainteresowaniem i z przyjemnością zdobywają wiedzę. Zarówno
            studenci, absolwenci, jak i pracownicy to osoby nie tylko ciekawe
            świata, ale także pełne pasji w odkrywaniu nowych rzeczy i w
            pozytywny sposób wpływające na swoje otoczenie.
          </p>
          <p>
            Nasze kierunki studiów są interesujące i innowacyjne, tworzone we
            współpracy z pracodawcami oraz na podstawie trendów w światowej
            gospodarce i kierunku zmian na dynamicznym rynku pracy. Nasi
            absolwenci znajdują pracę zgodną ze swoimi zainteresowaniami i
            wykształceniem.
          </p>
        </div>
        <div className="with_whom_img">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="sBx_tfY_WJQ"
            onClose={() => setOpen(false)}
          />
          <div className="btn-primary" onClick={() => setOpen(true)}>
            <img src={play_btn} alt="Play button" />
          </div>
          <img src={with_whom_img} alt="Movie" />
        </div>
      </div>
    </section>
  );
}

export default Information;
