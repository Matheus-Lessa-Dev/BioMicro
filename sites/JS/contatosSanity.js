const URL =
  "https://zjpvcus5.api.sanity.io/v2025-11-02/data/query/production?query=*%5B_type+%3D%3D+%22contatos%22%5D%0A%7B+rua%2C%0A++cidade%2C%0A++cep%0A%7D&perspective=drafts";
(async () => {
  const response = await fetch(URL);

  const json = await response.json();
  const result = json.result;

  const main = document.querySelector("#rua-cidade-cep");

  for (const item of result) {
    const divRua = document.createElement("div");
    divRua.append(item.rua);

    const divCidade = document.createElement("div");
    divCidade.append(item.cidade);

    const divCep = document.createElement("div");
    divCep.append("CEP: ");
    divCep.append(item.cep);

    main.append(divRua, divCidade, divCep);
  }
})();
