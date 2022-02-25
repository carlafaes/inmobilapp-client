import React from "react";

export default function MaquetaForm() {
  return (
    <div>
      <h1>Titulo del form</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">
            Name Input
            <abbr title="required" aria-label="required">
              *
            </abbr>
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
        <label htmlFor="error">
            error
            <abbr title="required" aria-label="required">
              *
            </abbr>
          </label>
          <input
            id="error"
            type="text"
            name="error"
            placeholder="Error"
          />
          <p>Error message</p>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <abbr title="required" aria-label="required">
              *
            </abbr>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="number">
            Number
          </label>
          <input
            id="number"
            type="number"
            name="number"
            placeholder="Number"
          />
        </div>
        <div>
          <label htmlFor="url">
            Url
          </label>
          <input
            id="url"
            type="url"
            name="url"
            placeholder="url"
          />
        </div>
        <div>
          <label htmlFor="tel">
            Tel:
          </label>
          <input
            id="tel"
            type="tel"
            name="tel"
            placeholder="tel"
          />
        </div>
        <button>Calcelar</button>
        <button>Enviar</button>
      </form>
    </div>
  );
}
