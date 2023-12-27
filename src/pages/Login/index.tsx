import "./styles.scss";

export default function Login() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="../assets/img/Login-rafiki.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form action="./formulario.php">
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example23">
                  Senha
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Lembrar me{" "}
                  </label>
                </div>
                <a href="#!">Esqueceu a Senha?</a>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Entrar
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                className="btn btn-primary btn-lg btn-block button-secondary"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f me-2"></i>Continuar com Facebook
              </a>
              <a
                className="btn btn-primary btn-lg btn-block button-primary"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter me-2"></i>Continuar com Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
