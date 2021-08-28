import React, { useState } from "react";

function Form(props) {
  const [newCheckbox, setNewCheckbox] = useState(false);

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    checkbox: newCheckbox,
  });

  function handleCheckbox() {
    setNewCheckbox(!newCheckbox);
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <section className="form">
      <div className="form_wrapper">
        <div className="fw_top_txt">
          <p>Nie znalazłeś odpowiedniego kontaktu?</p>
          <p>Skorzystaj z formularza.</p>
        </div>
        <form className="form" onSubmit={(e) => submit(e)}>
          <div className="name_and_last_name">
            <input
              className="name"
              type="text"
              placeholder="Imię"
              id="name"
              value={data.name}
              onChange={(e) => handle(e)}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Imię")}
              required
            />
            <input
              className="last_name"
              type="text"
              placeholder="Nazwisko"
              id="lastName"
              value={data.lastName}
              onChange={(e) => handle(e)}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Nazwisko")}
              required
            />
          </div>
          <input
            className="email"
            type="email"
            placeholder="Adres e-mail"
            id="email"
            value={data.email}
            onChange={(e) => handle(e)}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Adres e-mail")}
          />
          <textarea
            className="message"
            type="text"
            placeholder="Treść wiadomości"
            id="message"
            value={data.message}
            onChange={(e) => handle(e)}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Treść wiadomości")}
            required
          />
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              onClick={handleCheckbox}
              onChange={(e) => handle(e)}
            />
            <p>
              Wyrażam zgodę na przetwarzanie moich danych osobowych w rozumieniu
              ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych
              oraz ustawy z dnia 16 lipca 2004 roku Prawo telekomunikacyjne w
              celach marketingowych przez Collegium Da Vinci i oświadczam, iż
              podanie przeze mnie danych osobowych jest dobrowolne oraz iż
              zostałem poinformowany o prawie żądania dostępu do moich danych
              osobowych, ich zmiany oraz usunięcia.
            </p>
          </div>
          <button className="form_submit" type="submit">
            WYŚLIJ
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
