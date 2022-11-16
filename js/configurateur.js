const optionsTissu = [
    { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];
const optionsPoche = [
    { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];
const couleurText = [
    { couleur: 'Blanc', code: '#FFFFFF' },
    { couleur: 'Noir', code: '#000000' },
    { couleur: 'Bleu', code: '#11119e' },
    { couleur: 'Fuchsia', code: '#991157' },
    { couleur: 'Rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'Jaune', code: '#e2d047' },
    { couleur: 'Orange', code: '#f1722f' }
];
let selectedTissu = 'Jaune';
// let selectedPoche = 'Rouge';
// let customText = 'Votre texte ici';
// let selectedTextColor = 'Noir';
// let textOption = true;
const prixLettre = 1.80;

window.addEventListener("load", () => {
console.log("everything's ready !");

})

const textCustom = document.getElementById('customText');
const textColor = document.getElementById('textColorOptions');
const blockTissu = document.getElementById('tissu');
const titreTissu = document.getElementById('displayTissu');
const imgTissu = document.getElementById('optionTissuImage');

    optionsTissu.forEach(tissu => {

        console.log(tissu);

        const divTissu = document.createElement('div');
        divTissu.classList.add("colorRound");
        divTissu.style.backgroundColor = tissu.code;
        divTissu.setAttribute("id", tissu.couleur);

        if (selectedTissu == tissu.couleur) {

            divTissu.classList.add("selectedColor");
            titreTissu.textContent = tissu.couleur;
            imgTissu.setAttribute("src", tissu.image);
        }
        blockTissu.appendChild(divTissu);

        const clickTissu = document.getElementById(tissu.couleur);

        divTissu.addEventListener('click', event => {
            
            selectedTissu = divTissu;
            // divTissu.forEach(tissu => {
            //     tissu.classList.add("selectedColor");

            // })
            
        })
    });
 






const textPerso = document.querySelectorAll('[name="useText"]').forEach(radioElement => {
    radioElement.addEventListener("change", event => {
        const activeText = event.target.value;
        // console.log(activeText);

        if (activeText == "false") {
            textCustom.style.display = 'none';
            textColor.style.display = 'none';
        } else if ( activeText == "true") {
            textCustom.style.display = 'unset';
            textColor.style.display = 'unset';
        }
    })
})


textCustom.addEventListener("input", (event) => {
    const nbLetter = event.target.value.length;
    const inputText  = event.target.value;

    // console.log(nbLettre);

    const textConfig = document.querySelector(".textePerso");

    textConfig.textContent = inputText;

})


