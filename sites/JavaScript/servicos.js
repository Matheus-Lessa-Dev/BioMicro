const URL = ""
async function carregarServicos() {
    const response = await fetch(URL, {
        method: "GET",
    });

    const json = await response.json();
    const result = json.result;

    const main = document.querySelector("main#servicos");
    
    for(let index = 0; index < result.length; index++) {
        const element = result[index];
        console.log(element);

        const img = document.createElement("img");
        img.src = element.imagem;

        const divImg = document.createElement("div");
        divImg.classlist.add("card-media");
        divImg.append(img);

        const h2 = document.createElement("h2");
        h2.classList.add("card-title");
        h2.innerText = element.titulo;

        const p = document.createElement("p");
        p.classList.add("card-desc");
        p.innerText = element.descricao;

        main.append(divImg);
    }
}
carregarServicos();