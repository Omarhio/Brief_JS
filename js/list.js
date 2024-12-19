// Sélection des éléments
const addListButton = document.getElementById("addListButton");
const listNameInput = document.getElementById("listName");
const itemCountInput = document.getElementById("itemCount");
const listContainer = document.getElementById("listContainer");

// Fonction pour créer une liste avec des éléments nommés et quantités
function createList(name, itemCount) {
    // Crée un élément conteneur pour la liste
    const listItem = document.createElement("div");
    listItem.className = "list-item";

    // Titre de la liste
    const listTitle = document.createElement("h3");
    listTitle.textContent = name || "Nouvelle Liste";

    // Bouton pour modifier le titre
    const editTitleButton = document.createElement("button");
    editTitleButton.textContent = "Modifier le Titre";
    editTitleButton.className = "edit-button";

    editTitleButton.addEventListener("click", () => {
        const newTitle = prompt("Entrez le nouveau titre :", listTitle.textContent);
        if (newTitle) {
            listTitle.textContent = newTitle;
        }
    });

    // Crée la liste <ul> avec des éléments et quantités
    const ul = document.createElement("ul");
    for (let i = 1; i <= itemCount; i++) {
        const li = document.createElement("li");

        // Demande le nom et la quantité de l'élément
        const itemName = prompt(`Nom de l'élément ${i} :`, `Élément ${i}`);
        const itemQuantity = prompt(`Quantité pour "${itemName || `Élément ${i}`}":`, 1);

        // Formatage : Nom x Quantité
        li.textContent = `${itemName || `Élément ${i}`} x${itemQuantity || 1}`;
        ul.appendChild(li);
    }

    // Bouton pour supprimer la liste
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer la Liste";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", () => {
        listContainer.removeChild(listItem);
        alert(`La liste "${listTitle.textContent}" a été supprimée.`);
    });

    // Assemble les éléments
    listItem.appendChild(listTitle);
    listItem.appendChild(editTitleButton);
    listItem.appendChild(ul);
    listItem.appendChild(deleteButton);

    listContainer.appendChild(listItem);
}

// Gestion du bouton d'ajout de liste
addListButton.addEventListener("click", () => {
    const listName = listNameInput.value.trim();
    const itemCount = parseInt(itemCountInput.value, 10);

    if (!listName) {
        alert("Veuillez entrer un nom pour la liste !");
        return;
    }

    if (!itemCount || itemCount < 1) {
        alert("Veuillez entrer un nombre valide d'éléments !");
        return;
    }

    createList(listName, itemCount); // Crée la liste avec le nom et le nombre d'éléments
    listNameInput.value = "";
    itemCountInput.value = "";
});
