let cards = [
    {
        "es": "Cuando estas sentado junto a una persona en un avion, que crees que está pasando por su cabeza?",
        "en": "When you sit next to someone on a plane, what do you think goes through their mind?"
    }, {
        "es": "Si fueras el presidente de un pais, de que mentiría la prensa sobre ti?",
        "en": "If you became a leader of a country, what would the press lay about you?"
    }, {
        "es": "En que se diferencia la persona que presentas al mundo y la que realmente eres?",
        "en": "Whats the difference between the person you present to the world and who you actually are?"
    }, {
        "es": "En que aspectos tu vida ha sobrepasado tus expectaciones?",
        "en": "In whay ways your life have exceeded your expectations?"
    }, {
        "es": "Recuerda algun momento en el que no dijiste nada, pero piensas que tenias que haberlo hecho",
        "en": "Recall a moment when you didn´t speak up but you know you should have."
    }, {
        "es": "Cual es son tus primeros pensamientos por la mañana?",
        "en": "What usually are your first thoughts in the morning?"
    }, {
        "es": "Si puedieras hacer un viaje por carretera con algún famoso, a quien eligirias y donde iriais?",
        "en": "If you could go on a road trip with someone famoous, who would you choose and where would you go?"
    }, {
        "es": "Si tuvieras el dinero suficiente que preferirias, viajar por el mundo durante un año o comprar una casa y un coche decente?",
        "en": "If you had enought money for one of these, would you rather travel the world for a yyear or buy a decent house and car?"
    },
    /* ============================ CHAT GPT =========================== */
    {
        "es": "¿Qué es lo que más valoras en una amistad?",
        "en": "What do you value most in a friendship?"
    },
    {
        "es": "Si pudieras cambiar una decisión que tomaste en el pasado, ¿cuál sería?",
        "en": "If you could change one decision you made in the past, what would it be?"
    },
    {
        "es": "¿Cuál es tu mayor miedo en la vida?",
        "en": "What is your biggest fear in life?"
    },
    {
        "es": "Si tuvieras la oportunidad de viajar al espacio, ¿lo harías?",
        "en": "If you had the opportunity to travel to space, would you do it?"
    },
    {
        "es": "¿Cuál es el mejor consejo que has recibido en la vida?",
        "en": "What is the best advice you've ever received in life?"
    },
    {
        "es": "Si pudieras tener una conversación con cualquier persona, viva o fallecida, ¿a quién elegirías?",
        "en": "If you could have a conversation with anyone, living or deceased, who would you choose?"
    },
    {
        "es": "¿Cuál es tu recuerdo de infancia más preciado?",
        "en": "What is your most cherished childhood memory?"
    },
    {
        "es": "Si pudieras aprender cualquier habilidad en un instante, ¿cuál elegirías?",
        "en": "If you could instantly learn any skill, what skill would you choose?"
    },
    {
        "es": "¿Qué te hace sentir más vivo?",
        "en": "What makes you feel the most alive?"
    },
    {
        "es": "Si pudieras vivir en cualquier lugar del mundo, ¿dónde sería?",
        "en": "If you could live anywhere in the world, where would it be?"
    },
    {
        "es": "¿Qué libro o película te ha impactado más profundamente?",
        "en": "What book or movie has impacted you the most deeply?"
    },
    {
        "es": "Si tuvieras un día libre completo sin restricciones, ¿qué harías?",
        "en": "If you had an entire free day with no restrictions, what would you do?"
    },
    {
        "es": "¿Cuál es tu sueño o meta más grande en la vida?",
        "en": "What is your biggest dream or goal in life?"
    },
    {
        "es": "Si pudieras volver atrás en el tiempo y darle un consejo a tu yo más joven, ¿qué le dirías?",
        "en": "If you could go back in time and give advice to your younger self, what would you say?"
    },
    {
        "es": "¿Cuál es la lección más importante que has aprendido de un error?",
        "en": "What is the most important lesson you've learned from a mistake?"
    },
    {
        "es": "Si pudieras tener una superpotencia, ¿cuál elegirías?",
        "en": "If you could have a superpower, which one would you choose?"
    },
    {
        "es": "¿Qué te hace sentir agradecido en la vida?",
        "en": "What makes you feel grateful in life?"
    },
    {
        "es": "Si pudieras hablar con un animal, ¿cuál elegirías y qué le preguntarías?",
        "en": "If you could talk to an animal, which one would you choose, and what would you ask?"
    },
    {
        "es": "¿Cuál es la experiencia más emocionante que has tenido en un viaje?",
        "en": "What is the most exciting experience you've had while traveling?"
    },
    {
        "es": "Si pudieras cambiar una cosa en el mundo, ¿qué sería?",
        "en": "If you could change one thing in the world, what would it be?"
    },
    {
        "es": "¿Cuál es tu canción favorita y qué significa para ti?",
        "en": "What is your favorite song, and what does it mean to you?"
    },
    {
        "es": "Si pudieras tener una conversación con tu yo futuro, ¿qué te gustaría saber o preguntarle?",
        "en": "If you could have a conversation with your future self, what would you like to know or ask?"
    },
    {
        "es": "¿Cuál es el lugar más hermoso que has visitado?",
        "en": "What is the most beautiful place you've ever visited?"
    },
    {
        "es": "Si pudieras dar un consejo a todas las personas del mundo, ¿cuál sería?",
        "en": "If you could give advice to all the people in the world, what would it be?"
    },
    {
        "es": "¿Cuál es el logro del que te sientes más orgulloso en la vida?",
        "en": "What is the achievement you're most proud of in life?"
    },
    {
        "es": "Si pudieras ser famoso por algo, ¿qué te gustaría ser famoso?",
        "en": "If you could be famous for something, what would you like to be famous for?"
    },
    {
        "es": "¿Cuál es tu filosofía de vida en una sola frase?",
        "en": "What is your life philosophy in one sentence?"
    },
    {
        "es": "Si pudieras ser un personaje de ficción por un día, ¿quién serías y qué harías?",
        "en": "If you could be a fictional character for a day, who would you be and what would you do?"
    },
    {
        "es": "¿Cuál es tu comida o plato favorito y por qué?",
        "en": "What is your favorite food or dish, and why?"
    },
    {
        "es": "Si pudieras resolver un problema global, ¿cuál elegirías y cómo lo resolverías?",
        "en": "If you could solve one global issue, which one would you choose, and how would you solve it?"
    },
    {
        "es": "¿Cuál es el acto más generoso que has presenciado o experimentado?",
        "en": "What is the most generous act you've witnessed or experienced?"
    },
    {
        "es": "Si pudieras tener una conversación con un ser querido que ya no está aquí, ¿qué les dirías?",
        "en": "If you could have a conversation with a loved one who is no longer here, what would you say to them?"
    },
    {
        "es": "¿Cuál es tu lugar de escape favorito para relajarte y desconectar?",
        "en": "What is your favorite escape place to relax and disconnect?"
    },
    {
        "es": "Si pudieras aprender cualquier idioma instantáneamente, ¿cuál sería?",
        "en": "If you could instantly learn any language, which one would it be?"
    },
    {
        "es": "¿Cuál es la película que más te ha hecho llorar?",
        "en": "What is the movie that has made you cry the most?"
    },
    {
        "es": "Si pudieras vivir en una obra de ficción, ¿cuál sería?",
        "en": "If you could live in a work of fiction, which one would it be?"
    },
    {
        "es": "¿Cuál es tu mayor motivación en la vida?",
        "en": "What is your biggest motivation in life?"
    },
    {
        "es": "Si pudieras tener una conversación con un científico famoso, ¿quién sería y qué le preguntarías?",
        "en": "If you could have a conversation with a famous scientist, who would it be and what would you ask?"
    },
    {
        "es": "¿Cuál es la lección más importante que has aprendido de alguien más joven que tú?",
        "en": "What is the most important lesson you've learned from someone younger than you?"
    },
    {
        "es": "Si pudieras ser testigo de un evento histórico, ¿cuál sería?",
        "en": "If you could witness a historical event, which one would it be?"
    },
    {
        "es": "¿Cuál es la mayor lección que has aprendido de la naturaleza?",
        "en": "What is the biggest lesson you've learned from nature?"
    },
    {
        "es": "Si pudieras tener una habilidad sobrenatural, ¿cuál sería y cómo la usarías?",
        "en": "If you could have a supernatural ability, what would it be and how would you use it?"
    },
    {
        "es": "¿Cuál es la mejor decisión que has tomado en tu vida?",
        "en": "What is the best decision you've made in your life?"
    },
    {
        "es": "Si pudieras darle un regalo a toda la humanidad, ¿cuál sería?",
        "en": "If you could give a gift to all of humanity, what would it be?"
    },
    {
        "es": "¿Cuál es la experiencia que te ha cambiado más profundamente?",
        "en": "What is the experience that has changed you the most profoundly?"
    },
    {
        "es": "Si pudieras vivir en un mundo de fantasía, ¿cómo sería?",
        "en": "If you could live in a fantasy world, what would it be like?"
    },

];

let shownCards = [];
let idioma="es";
let currentCard;
document.getElementById('contador').textContent = cards.length;
document.getElementById('total').textContent = cards.length + shownCards.length;

function nextCard() {
    document.getElementById("tarjeta").innerHTML=' <span class="datebl">So...</span>    <span class="datebr">So...</span>    <span class="datetl">So...</span>    <span class="datetr">So...</span>    <div>        <hr class="corta">        <hr class="larga">        <p id="current-card"></p>        <hr class="larga">        <hr class="corta">    </div>';
    idioma=document.getElementById("idioma").value;

    //console.log(words.length);
    if (cards.length > 0) {
        currentIndex = Math.floor(Math.random() * cards.length);
        currentCard = cards[currentIndex];
        let carta = cards.splice(currentIndex, 1);
        shownCards.push(currentCard);
        idioma=="es"?document.getElementById('current-card').textContent = currentCard.es:document.getElementById('current-card').textContent = currentCard.en;
        document.getElementById('contador').textContent = cards.length;
        document.getElementById('total').textContent = cards.length + shownCards.length;
    } else {
        document.getElementById('current-card').textContent = "SO...";
        alert("Se acabo la baraja");
        nextRoundBtn.style.display = "block";
    }

}

function cambiarIdioma(){
    idioma=document.getElementById("idioma").value;
    idioma=="es"?document.getElementById('current-card').textContent = currentCard.es:document.getElementById('current-card').textContent = currentCard.en;
}
