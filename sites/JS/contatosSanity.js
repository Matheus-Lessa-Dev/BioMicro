const URLaddress =
  "https://zjpvcus5.api.sanity.io/v2025-11-02/data/query/production?query=*%5B_type+%3D%3D+%22contatos%22%5D%0A%7B+rua%2C%0A++cidade%2C%0A++cep%2C%0A++email%2C%0A++horario%2C%0A++horarioFds%2C%0A++telefone%2C%0A++whats%0A%7D&perspective=drafts";
(async () => {
  const response = await fetch(URLaddress);

  const json = await response.json();
  const result = json.result;

  const anchor = document.querySelector("#rua-cidade-cep");

  for (const data of result) {
    const divRua = document.createElement("div");
    divRua.append(data.rua);

    const divCidade = document.createElement("div");
    divCidade.append(data.cidade);

    anchor.append(divRua, divCidade);
    if (data.cep) {
      const divCep = document.createElement("div");
      divCep.append("CEP: ");
      divCep.append(data.cep);

      anchor.append(divCep);
    }
  }
})();

const URLbusinessHours =
  "https://zjpvcus5.api.sanity.io/v2025-11-02/data/query/production?query=*%5B_type+%3D%3D+%22contatos%22%5D%0A%7B+rua%2C%0A++cidade%2C%0A++cep%2C%0A++email%2C%0A++horario%2C%0A++horarioFds%2C%0A++telefone%2C%0A++whats%0A%7D&perspective=drafts";

(async () => {
  const response = await fetch(URLbusinessHours);
  const json = await response.json();
  const result = json.result;

  const anchor = document.querySelector("#funcionamento");
  for (let data of result) {
    const divFuncionamento = document.createElement("div");
    divFuncionamento.append(data.horario);

    anchor.append(divFuncionamento);

    if (data.horarioFds) {
      const divFuncionamentoFds = document.createElement("div");
      divFuncionamentoFds.append(data.horarioFds);
      anchor.append(divFuncionamentoFds);
    }
  }
})();

const URLcontact =
  "https://zjpvcus5.api.sanity.io/v2025-11-02/data/query/production?query=*%5B_type+%3D%3D+%22contatos%22%5D%0A%7B+rua%2C%0A++cidade%2C%0A++cep%2C%0A++email%2C%0A++horario%2C%0A++horarioFds%2C%0A++telefone%2C%0A++whats%0A%7D&perspective=drafts";

(async () => {
  const response = await fetch(URLcontact);
  const json = await response.json();
  const result = json.result;

  const anchor = document.querySelector("#contato");
  for (let data of result) {
    const divTelefone = document.createElement("div");
    divTelefone.append(`Telefone: ${data.telefone}`);

    const divEmail = document.createElement("div");
    divEmail.append(`E-mail: ${data.email}`);

    anchor.append(divTelefone, divEmail);
  }
})();
