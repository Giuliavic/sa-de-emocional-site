/* =========================
   MENU MOBILE
========================= */

function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("open");

}


/* =========================
   VOLTAR AO TOPO
========================= */

window.addEventListener("scroll", function () {

    const button = document.getElementById("topButton");

    if (button) {

        if (window.scrollY > 400) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    }

});


function topPage() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   ACESSIBILIDADE
========================= */

function increaseFont() {

    document.body.classList.toggle("large-text");

}


function toggleContrast() {

    document.body.classList.toggle("contrast");

}


function toggleDark() {

    document.body.classList.toggle("dark");

}


/* =========================
   CARROSSEL
========================= */

const messages = [

    {
        number: "01",
        title: "Não existe jeito certo de sentir.",
        text: "Suas emoções merecem espaço, mesmo quando parecem confusas."
    },

    {
        number: "02",
        title: "Descansar também é fazer algo.",
        text: "Você não precisa transformar cada minuto do dia em produtividade."
    },

    {
        number: "03",
        title: "Pedir ajuda é uma forma de cuidado.",
        text: "Converse com alguém de confiança quando estiver difícil carregar tudo sozinho."
    }

];

let currentMessage = 0;


function showMessage() {

    const slide = document.getElementById("messageSlide");

    if (!slide) return;

    slide.innerHTML = `

        <span>${messages[currentMessage].number}</span>

        <h2>${messages[currentMessage].title}</h2>

        <p>${messages[currentMessage].text}</p>

    `;

}


function nextMessage() {

    currentMessage++;

    if (currentMessage >= messages.length) {
        currentMessage = 0;
    }

    showMessage();

}


function previousMessage() {

    currentMessage--;

    if (currentMessage < 0) {
        currentMessage = messages.length - 1;
    }

    showMessage();

}


/* =========================
   PORTAL DE ESCUTA
========================= */

const form = document.getElementById("listenForm");

const textArea = document.getElementById("message");

const counter = document.getElementById("counter");


if (textArea) {

    textArea.addEventListener("input", function () {

        counter.textContent = textArea.value.length;

    });

}


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const feeling =
            document.getElementById("feeling").value;

        const response =
            document.getElementById("response");

        response.innerHTML = `

            <strong>
                Obrigada por confiar este momento ao Entre Nós. ♡
            </strong>

            <br><br>

            Você contou que está se sentindo
            <strong>${feeling}</strong>.

            O que você sente merece atenção e acolhimento.

            Se estiver difícil lidar com tudo sozinho,
            converse com um adulto de confiança.

            <br><br>

            <small>
                Seu desabafo não foi armazenado.
            </small>

        `;

        response.classList.add("show");

        form.reset();

        counter.textContent = "0";

        response.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}


/* =========================
   QUIZ
========================= */

const quiz = document.getElementById("quizForm");


if (quiz) {

    quiz.addEventListener("submit", function(event) {

        event.preventDefault();

        const answers = {

            q1: "b",
            q2: "b",
            q3: "c",
            q4: "a",
            q5: "b"

        };

        let score = 0;


        for (let question in answers) {

            const selected =
                document.querySelector(
                    `input[name="${question}"]:checked`
                );

            if (
                selected &&
                selected.value === answers[question]
            ) {

                score++;

            }

        }


        const result =
            document.getElementById("quizResult");


        let message;


        if (score === 5) {

            message =
                "Mandou muito bem! Você acertou todas as perguntas. ✦";

        } else if (score >= 3) {

            message =
                "Muito bom! Você demonstrou uma boa compreensão sobre acolhimento e saúde emocional. ♡";

        } else {

            message =
                "Continue aprendendo! O mais importante não é acertar tudo, mas conhecer formas de cuidar de si e dos outros.";

        }


        result.innerHTML = `

            <strong>${score}/5</strong>

            <p>${message}</p>

            <small>
                Respostas corretas:
                1-B • 2-B • 3-C • 4-A • 5-B
            </small>

        `;

        result.classList.add("show");


        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

      }
