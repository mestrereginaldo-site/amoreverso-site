/// Banco expandido de respostas do oráculo
const respostasOráculo = {
    tarot: [
        "O Louco aparece! Este é o momento de novos começos. Aventure-se sem medo, o universo apoia seus passos.",
        "A Sacerdotisa revela segredos. Sua intuição está aguçada - confie nas mensagens dos seus sonhos.",
        "A carta da Força mostra que você tem mais poder do que imagina. Enfrente desafios com coragem e compaixão.",
        "A Roda da Fortuna gira a seu favor. Mudanças positivas estão chegando - esteja aberto ao inesperado.",
        "O Enamorado traz questões do coração. Escolhas amorosas se apresentam - siga sua verdade interior."
    ],
    runas: [
        "Fehu - Abundância chega! Prosperidade material e espiritual está em seu caminho. Prepare-se para receber.",
        "Ansuz - Mensagens importantes. Preste atenção aos sinais e comunicações esta semana.",
        "Berkana - Novo começo. Um ciclo de crescimento e renovação se inicia, perfeito para projetos criativos.",
        "Gebo - Presente divino. Uma troca harmoniosa acontecerá, trazendo equilíbrio e parcerias abençoadas.",
        "Algiz - Proteção ativa. Você está espiritualmente protegido durante este período desafiador."
    ],
    cristal: [
        "A bola de cristal mostra um caminho de luz. Seus esforços serão recompensados em breve - persevere!",
        "Neblina se dissipa revelando respostas claras. A verdade que busca será revelada dentro de 7 dias.",
        "Reflexos de amor e harmonia. Relacionamentos se fortalecem e novas conexões surgem no horizonte.",
        "Energias de cura envolvem seu ser. Momento ideal para perdoar, curar feridas e seguir em frente leve."
    ],
    numerologia: [
        "Número 7 - Sabedoria espiritual. Período de introspecção trará respostas profundas que procura.",
        "Número 3 - Criatividade e alegria. Expressão artística trará cura e oportunidades únicas.",
        "Número 8 - Prosperidade material. Seus projetos profissionais estão prestes a florescer.",
        "Número 11 - Iluminação. Você está recebendo insights poderosos - anote suas ideias!"
    ]
};

// Perguntas frequentes para sugestão
const perguntasSugeridas = [
    "Devo mudar de emprego?",
    "Meu amor está próximo?",
    "Como atrair prosperidade?",
    "Qual meu propósito de vida?",
    "Devo perdoar esta pessoa?",
    "Como melhorar minha energia?"
];

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
        respostaDiv.innerHTML = '<p style="color: #ff6b6b;">🔮 Por favor, faça uma pergunta sincera ao oráculo.</p>';
        return;
    }
    
    // Efeito de carregamento místico
    respostaDiv.innerHTML = `
        <div class="loading">
            <div class="crystal-loading"></div>
            <p>Consultando os registros akáshicos...</p>
        </div>
    `;
    
    setTimeout(() => {
        const respostas = respostasOráculo[tipo];
        const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
        
        respostaDiv.innerHTML = `
            <div class="resposta-content">
                <div class="resposta-header">
                    <h4>✨ Resposta do ${document.getElementById('tipoOráculo').options[document.getElementById('tipoOráculo').selectedIndex].text} ✨</h4>
                    <p class="pergunta-usuario">"${pergunta}"</p>
                </div>
                <div class="resposta-texto">
                    <p>${respostaAleatoria}</p>
                </div>
                <div class="resposta-dica">
                    <p><strong>Dica do Mestre:</strong> Anote esta mensagem e reflita sobre ela nos próximos 3 dias.</p>
                </div>
                <div class="acoes-resposta">
                    <button onclick="compartilharResposta()" class="share-btn">📤 Compartilhar esta Revelação</button>
                    <button onclick="comprarRelatorio()" class="buy-btn">💎 Relatório Completo (R$ 9,90)</button>
                    <button onclick="novaConsulta()" class="new-btn">🔁 Fazer Outra Pergunta</button>
                </div>
            </div>
        `;
        
        // Animação de entrada
        respostaDiv.style.opacity = '0';
        respostaDiv.style.transform = 'translateY(20px)';
        setTimeout(() => {
            respostaDiv.style.opacity = '1';
            respostaDiv.style.transform = 'translateY(0)';
        }, 100);
        
    }, 3000);
}

function novaConsulta() {
    document.getElementById('perguntaUsuario').value = '';
    document.getElementById('respostaOráculo').innerHTML = '';
    document.getElementById('perguntaUsuario').focus();
}

function compartilharResposta() {
    const resposta = document.querySelector('.resposta-texto p').textContent;
    
    if (navigator.share) {
        navigator.share({
            title: 'Minha Revelação no Amoreverso 🔮',
            text: `Acabei de receber esta mensagem do universo: "${resposta}"`,
            url: window.location.href
        });
    } else {
        // Fallback para copiar texto
        navigator.clipboard.writeText(`🔮 Amoreverso - Minha Revelação:\n\n"${resposta}"\n\nAcesse: ${window.location.href}`)
            .then(() => alert('Mensagem copiada! Cole e compartilhe com amigos.'));
    }
}

function comprarRelatorio() {
    // Simulação de redirecionamento para pagamento
    const pergunta = document.getElementById('perguntaUsuario').value;
    alert(`✨ Relatório Especial Gerado!\n\nPergunta: "${pergunta}"\n\nRedirecionando para página de pagamento seguro...`);
    // window.location.href = '/checkout?tipo=relatorio&pergunta=' + encodeURIComponent(pergunta);
}

// Efeitos visuais e interações
document.addEventListener('DOMContentLoaded', function() {
    // Animações de entrada
    const elements = document.querySelectorAll('.servico-card, .blog-card');
    
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Sugestões de perguntas
    const textarea = document.getElementById('perguntaUsuario');
    let sugestaoIndex = 0;
    
    function mostrarSugestao() {
        if (!textarea.value) {
            textarea.placeholder = perguntasSugeridas[sugestaoIndex];
            sugestaoIndex = (sugestaoIndex + 1) % perguntasSugeridas.length;
        }
    }
    
    // Rotação de sugestões a cada 3 segundos
    setInterval(mostrarSugestao, 3000);
    mostrarSugestao();
    
    // Contador de consultas (simulação)
    function atualizarContador() {
        const base = 15847;
        const incremento = Math.floor(Math.random() * 3) + 1;
        document.querySelector('.hero-stats .number').textContent = (base + incremento).toLocaleString();
    }
    
    setInterval(atualizarContador, 5000);
});

// Newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`🎉 Obrigado! Você acaba de ativar bênçãos especiais!\n\nEmail ${email} cadastrado com sucesso. Verifique sua caixa de entrada.`);
    this.reset();
});
