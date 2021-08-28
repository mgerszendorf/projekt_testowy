import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <section className="footer">
      <div className="footer_wrapper">
        <div className="f_colum_1">
          <p>ul. Głogowska 10</p>
          <p>61-719 Poznań</p>
          <p>tel. 61 27 11 000</p>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.19599486151!2d16.907801415803064!3d52.40312397979214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b32ff308f59%3A0x6c6642c3550b9e68!2sG%C5%82ogowska%2010%2C%2061-001%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1629996652129!5m2!1spl!2spl"
              width="200"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="f_colum_2">
          <h3>O nas</h3>
          <Link to="/dlaczego_cdv">Dlaczego CDV</Link>
          <Link to="/kadra_naukowa">Kadra naukowa</Link>
          <Link to="/dla_mediow">Dla mediów</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
        <div className="f_colum_3">
          <h3>Dla kandydata</h3>
          <Link to="/poradnik_maturzysty">Poradnik maturzysty</Link>
          <Link to="/rekrutacja">Rekrtacja</Link>
          <Link to="/kredyt_studencki">Kredyt studencki</Link>
          <Link to="/studia_dla_cudzoziemcow">Studia dla cudzoziemców</Link>
        </div>
        <div className="f_colum_4">
          <h3>Dla studenta</h3>
          <Link to="/wirtualna_uczelnia">Wirtualna Uczelnia</Link>
          <Link to="/stypendia">Stypendia</Link>
          <Link to="/biuro_karier">Biuro Karier</Link>
          <Link to="/studiuj_dalej">Studiuj dalej</Link>
        </div>
        <div className="f_colum_5">
          <h3>Dla biznesu</h3>
          <Link to="/wspolpraca_z_biznesem">Współpraca z biznesem</Link>
          <Link to="/emotionslab">EmotionsLAB</Link>
          <Link to="/wynajem_sal">Wynajem sal</Link>
          <Link to="/znajdz_pracownika">Znajdź pracownika</Link>
        </div>
        <div className="f_colum_6">
          <h3>Na skróty</h3>
          <Link to="/aktualnosci">Aktualności</Link>
          <Link to="/wydarzenia">Wydarzenia</Link>
          <Link to="/konferencje">Konferencje</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
