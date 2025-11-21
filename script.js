// Banco de respuestas do oráculo
const respostasOráculo = {
    tarot: [
        "As cartas revelam que o caminho está se abrindo para você. Confie no processo e siga sua intuição.",
        "O momento pede paciência. As respostas chegarão no tempo certo do universo.",
        "Uma nova oportunidade está surgindo. Esteja aberto às mudanças que se aproximam.",
        "Cuidado com decisões precipitadas. Reflita profundamente antes de agir."
    ],
    runas: [
        "As runas indicam um período de transformação. Abrace as mudanças com coragem.",
        "A prosperidade está ao seu alcance. Mantenha o foco e a determinação.",
        "Tempo de cura e renovação. Cuide de sua energia espiritual.",
        "Um ciclo se encerra para que outro possa começar. Libere o que não serve mais."
    ],
    cristal: [
        "A bola de cristal mostra luz no horizonte. Seus esforços serão recompensados.",
        "Neblina no caminho, mas a clareira está próxima. Continue com fé.",
        "Energias positivas se aproximam. Prepare-se para receber bênçãos.",
        "Reflexos de aprendizado e crescimento. Cada experiência tem seu propósito."
    ]
};

function iniciarConsulta() {
    document.getElementById('oraculo').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function gerarResposta() {
    const pergunta = document.getElementById('perguntaUsuario').value;
    const tipo = document.getElementById('tipoOráculo').value;
    const respostaDiv = document.getElementById('respostaOráculo');
    
    if (!pergunta.trim()) {
        respostaDiv.innerHTML = '<p style="color: #ff6b6b;">Por favor, faça uma pergunta ao oráculo.</p>';
        return;
    }
    
    // Efeito de carregamento
    respostaDiv.innerHTML = '<div class="loading">Consultando o universo...</div>';
    
    setTimeout(() => {
        const respostas = respostasOráculo[tipo];
        const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
        
        respostaDiv.innerHTML = `
            <div class="resposta-content">
                <h4>Sua Pergunta: "${pergunta}"</h4>
                <div class="resposta-texto">
                    <p>${respostaAleatoria}</p>
                </div>
                <div class="acoes-resposta">
                    <button onclick="compartilharResposta()" class="share-btn">📤 Compartilhar</button>
                    <button onclick="comprarRelatorio()" class="buy-btn">💎 Relatório Completo (R$ 9,90)</button>
                </div>
            </div>
        `;
    }, 2000);
}

function compartilharResposta() {
    if (navigator.share) {
        navigator.share({
            title: 'Minha Consulta no Amoreverso',
            text: 'Acabei de receber uma incrível leitura esotérica!',
            url: window.location.href
        });
    } else {
        alert('Compartilhe este site incrível com seus amigos!');
    }
}

function comprarRelatorio() {
    // Aqui você integrará com o gateway de pagamento
    alert('Redirecionando para página de pagamento...');
    // window.location.href = '/checkout';
}

// Efeitos visuais
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.servico-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});
