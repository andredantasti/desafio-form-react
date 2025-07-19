import { useForm } from "react-hook-form";

import "../assets/css/reset.css";
import "../assets/css/style.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <main className="content">
        <section className="titulo-descricao">
          <h1>
            FICOU COM DÚVIDA? <br />
            NOS MANDE UMA MENSAGEM!
          </h1>
          <p>
            caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem
            e entraremos em contato em menos de 24h.
          </p>
        </section>

        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <p>
            <input
              type="text"
              id="nome"
              placeholder="  Nome Completo *"
              className={`dados ${
                errors.nome ? "invalido" : touchedFields.nome ? "valido" : ""
              }`}
              {...register("nome", { required: "Campo Obrigatório" })}
            />
          </p>
          {errors.nome && (
            <p className="erro" style={{ color: "red" }}>
              {errors.nome.message}
            </p>
          )}
          <p>
            <input
              type="email"
              id="email"
              placeholder="  Email *"
              className={`dados ${
                errors.email ? "invalido" : touchedFields.email ? "valido" : ""
              }`}
              {...register("email", {
                required: "O E-mail Obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
                },
              })}
            />
          </p>
          {errors.email && (
            <p className="erro" style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
          <p>
            <input
              type="tel"
              id="phone"
              placeholder="  Telefone *"
              className={`dados ${
                errors.telefone
                  ? "invalido"
                  : touchedFields.telefone
                  ? "valido"
                  : ""
              }`}
              {...register("telefone", {
                required: "Telefone é Obrigatório",
                pattern: {
                  value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                  message: "Formato inválido. Ex: (11) 91234-5678",
                },
              })}
            />
          </p>
          {errors.telefone && (
            <p className="erro" style={{ color: "red" }}>
              {errors.telefone.message}
            </p>
          )}
          <p>
            <textarea
              id="textoArea"
              cols="20"
              rows="10"
              placeholder="  Mensagem *"
              className={`dados ${
                errors.mensagem
                  ? "invalido"
                  : touchedFields.mensagem
                  ? "valido"
                  : ""
              }`}
              {...register("mensagem", {
                required: "Mensagem é Obrigatória",
                minLength: {
                  value: 10,
                  message: "O comentário deve ter no mínimo 10 caracteres",
                },
              })}
            ></textarea>
          </p>
          {errors.mensagem && <p className="erro">{errors.mensagem.message}</p>}

          <button type="submit" id="btn-enviar">
            Enviar
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;
