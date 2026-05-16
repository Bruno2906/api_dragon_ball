const container = document.getElementById("characters-container");
const searchInput = document.getElementById("searchInput");

let characters = [];

fetch("https://dragonball-api.com/api/characters?limit=58")
  .then(response => response.json())
  .then(data => {

    characters = data.items;

    console.log(characters)

    showCharacters(characters);

  })
  .catch(error => {
    console.log("Erro ao buscar personagens", error);
  });

function showCharacters(charactersList){

    container.innerHTML = "";

    charactersList.forEach(character => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        
            <img src="${character.image}" alt="${character.name}">

            <div class="card-content">

                <h2>${character.name}</h2>

                <p><strong>Raça:</strong> ${character.race}</p>

                <p><strong>Ki:</strong> ${character.ki}</p>

                <p><strong>Afiliação:</strong> ${character.affiliation}</p>

            </div>

        `;

        container.appendChild(card);

    });

}

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(value)
    );

    showCharacters(filteredCharacters);

});