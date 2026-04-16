const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector("#send-btn");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;

// 🔹 Crear mensaje
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);

    let chatContent = className === "outgoing"
        ? `<p>${message}</p>`
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;

    chatLi.innerHTML = chatContent;
    return chatLi;
};

// 🔹 Scroll automático
const scrollToBottom = () => {
    chatbox.scrollTop = chatbox.scrollHeight;
};

// 🔹 IA mejorada
const generateResponse = (message) => {
    message = message.toLowerCase();

    if (message.includes("hola") || message.includes("buenas")) {
        return "¡Hola! 😊 Bienvenido a CENCOSUD. ¿Te gustaría conocer oportunidades de crecimiento?";
    }

    if (message.includes("trabajo") || message.includes("vacantes")) {
        return "Tenemos vacantes internas disponibles en diferentes áreas como ventas, logística y liderazgo. 💼";
    }

    if (message.includes("crecer") || message.includes("ascender")) {
        return "En CENCOSUD puedes crecer profesionalmente desde puestos operativos hasta roles de liderazgo 🚀";
    }

    if (message.includes("requisitos")) {
        return "Buscamos compromiso, experiencia y ganas de aprender. Cada puesto tiene requisitos específicos.";
    }

    if (message.includes("postular")) {
        return "Puedes postular directamente desde la plataforma interna en la sección de oportunidades 📲";
    }

    if (message.includes("gracias")) {
        return "¡Con gusto! 😊 Estoy aquí para ayudarte en tu crecimiento.";
    }

    return "🤖 Estoy aquí para ayudarte a descubrir tu camino en CENCOSUD. ¿Puedes darme más detalles?";
};

// 🔹 Manejo del chat
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // mensaje usuario
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";
    scrollToBottom();

    // mensaje IA (typing...)
    const thinkingLi = createChatLi("Escribiendo...", "incoming");
    chatbox.appendChild(thinkingLi);
    scrollToBottom();

    setTimeout(() => {
        const botResponse = generateResponse(userMessage);
        thinkingLi.querySelector("p").textContent = botResponse;
        scrollToBottom();
    }, 1200);
};

// 🔹 Click
sendChatBtn.addEventListener("click", handleChat);

// 🔹 Enter para enviar
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});


chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));