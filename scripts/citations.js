var citationText = document.getElementById("citation_text");

var citationsArray = [
    "'Le vrai bonheur ne dépend d'aucun être, d'aucun object extérieur. Il ne dépend que de nous...' - Dalaï Lama",
    "'Que chaque événement de votre vie vous apprenne quelque chose.' - Osho",
    "'Vous ne pouvez être que ce que vous êtes. Détendez-vous ! L'existence a besoin de vous tel que vous êtes.' - Osho",
    "'Le bonheur est comme un don qu’on doit cultiver. Tant qu’on ne le cultive pas, on n’obtient rien.' - O. M. Aïvanhov",
    "'Nul besoin de temples, nul besoin de philosophies compliquées. Notre cerveau et notre coeur sont nos temples.' - Dalaï Lama",
    "'L'apaisement réside en chacun de nous.' - Dalaï Lama",
    "'L’amour n’est pas une relation, c’est une nouvelle façon d’être. Je ne me contente plus d’aimer ceci ou cela… Je deviens amour et cet amour déborde de mon coeur conscient.' - Osho",
    "'En prononçant le mot merci, c’est comme une source de lumière, de paix et de joie que vous faites jaillir dans votre âme..' - O. M. Aïvanhov",
    "'Cherchez la sagesse, l’amour, la vérité, la justice, la bonté, car alors, où que vous soyez, quelles que soient les conditions, vous vous sentirez libre..' - O. M. Aïvanhov",
    "'Pour apporter le bonheur aux autres, il faut surtout remplir son cœur d’amour..' - O. M. Aïvanhov"
];

var randNumber;

function selectCitation() {
    randNumber = Math.floor(Math.random() * citationsArray.length);

    citationText.innerHTML = citationsArray[randNumber];
}