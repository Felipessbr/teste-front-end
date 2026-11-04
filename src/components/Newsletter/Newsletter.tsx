import { useState, type FormEvent } from "react";

import "./Newsletter.scss";

function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Formulário validado! O envio ainda precisa ser conectado a um serviço."
    );
  }

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__info">
          <h2>Inscreva-se na nossa newsletter</h2>

          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              aria-label="Digite seu nome"
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              aria-label="Digite seu e-mail"
            />

            <button type="submit">INSCREVER</button>
          </div>

          <label className="newsletter__terms">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
              required
            />

            <span>Aceito os termos e condições</span>
          </label>

          {message && (
            <p className="newsletter__message" role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Newsletter;