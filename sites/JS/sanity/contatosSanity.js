const URLcontatos =
  "https://zjpvcus5.api.sanity.io/v2025-11-02/data/query/production?query=*%5B_type+%3D%3D+%22contatos%22%5D%0A%7B+rua%2C%0A++cidade%2C%0A++cep%2C%0A++email%2C%0A++horario%2C%0A++horarioFds%2C%0A++telefone%2C%0A++whats%0A%7D&perspective=drafts";
async function renderData(result) {
  const anchorAddress = document.querySelector("#rua-cidade-cep");
  const anchorBusinessHours = document.querySelector("#funcionamento");
  const anchorContact = document.querySelector("#contato");

  anchorAddress.innerHTML = "";
  anchorBusinessHours.innerHTML = "";
  anchorContact.innerHTML = "";

  for (const data of result) {
    const divRua = document.createElement("div");
    divRua.append(data.rua);

    const divCidade = document.createElement("div");
    divCidade.append(data.cidade);

    const divCep = document.createElement("div");
    divCep.append("CEP: ");
    divCep.append(data.cep);

    const divFuncionamento = document.createElement("div");
    divFuncionamento.append(data.horario);

    if (data.horarioFds != null) {
      const divFuncionamentoFds = document.createElement("div");
      divFuncionamentoFds.append(data.horarioFds);

      anchorBusinessHours.append(divFuncionamentoFds);
    }
    const divTelefone = document.createElement("div");
    divTelefone.append(`Telefone: ${data.telefone}`);

    const divEmail = document.createElement("div");
    divEmail.append(`E-mail: ${data.email}`);

    anchorAddress.append(divRua, divCidade, divCep);
    anchorBusinessHours.append(divFuncionamento);
    anchorContact.append(divTelefone, divEmail);
  }
}

(async () => {
  const cached = localStorage.getItem("contatosData");
  let cachedData = null;

  if (cached) {
    try {
      const data = JSON.parse(cached);
      renderData(data);
    } catch (error) {
      console.warn("Invalid cache");
      localStorage.removeItem("contatosData");
    }
  }

  try {
    const response = await fetch(URLcontatos);
    const json = await response.json();
    const result = json.result;

    if (JSON.stringify(result) !== JSON.stringify(cachedData)) {
      renderData(result);
      localStorage.setItem("contatosData", JSON.stringify(result));
    }
  } catch (error) {
    console.error("Cache error = " + error);
  }
})();
