var citationText = document.getElementById("citation_text");

var citationsArray = [
    "'Le vrai bonheur ne d�pend d'aucun �tre, d'aucun object ext�rieur. Il ne d�pend que de nous...' - Dala� Lama",
    "'Que chaque �v�nement de votre vie vous apprenne quelque chose.' - Osho",
    "'Vous ne pouvez �tre que ce que vous �tes. D�tendez-vous ! L'existence a besoin de vous tel que vous �tes.' - Osho",
    "'Le bonheur est comme un don qu�on doit cultiver. Tant qu�on ne le cultive pas, on n�obtient rien.' - O. M. A�vanhov",
    "'Nul besoin de temples, nul besoin de philosophies compliqu�es. Notre cerveau et notre coeur sont nos temples.' - Dala� Lama",
    "'L'apaisement r�side en chacun de nous.' - Dala� Lama",
    "'L�amour n�est pas une relation, c�est une nouvelle fa�on d��tre. Je ne me contente plus d�aimer ceci ou cela� Je deviens amour et cet amour d�borde de mon coeur conscient.' - Osho",
    "'En pronon�ant le mot merci, c�est comme une source de lumi�re, de paix et de joie que vous faites jaillir dans votre �me..' - O. M. A�vanhov",
    "'Cherchez la sagesse, l�amour, la v�rit�, la justice, la bont�, car alors, o� que vous soyez, quelles que soient les conditions, vous vous sentirez libre..' - O. M. A�vanhov",
    "'Pour apporter le bonheur aux autres, il faut surtout remplir son c�ur d�amour..' - O. M. A�vanhov"
];

var randNumber;

function selectCitation() {
    randNumber = Math.floor(Math.random() * citationsArray.length);

    citationText.innerHTML = citationsArray[randNumber];
}