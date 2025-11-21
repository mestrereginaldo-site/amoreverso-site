// Sistema de Oráculo
const oracleAnswers = {
    tarot: [
        "🃏 O Louco aparece em seu caminho! Este é o momento de novos começos. Aventure-se sem medo, pois o universo apoia cada passo que você der em direção ao desconhecido. A energia de renovação está forte.",
        "👑 A Imperatriz traz fertilidade e criatividade. Seu projeto atual florescerá além das expectativas. Cuide dele com carinho e paciência, os frutos serão doces e abundantes.",
        "⚖️ A Justiça revela que o equilíbrio será restaurado. Situações pendentes se resolverão a seu favor. Mantenha a integridade em todas as suas ações."
    ],
    runas: [
        "ᚠ Fehu - A runa da prosperidade! Recursos materiais e espirituais estão chegando. Prepare-se para receber abundância de formas inesperadas.",
        "ᚢ Uruz - Força primal se manifesta. Você tem mais energia do que imagina para superar obstáculos. Confie em sua resistência interior.",
        "ᚦ Thurisaz - Porta para novas oportunidades se abre. Momento de ação decisiva, mas cuidado com impulsividade."
    ],
    cristal: [
        "🔮 A bola de cristal mostra um caminho iluminado à sua frente. Seus esforços recentes serão recompensados em breve. Continue com fé e determinação.",
        "💫 Neblina se dissipa revelando respostas claras. Dentro de 7 dias, a verdade que você busca será revelada de maneira surpreendente.",
        "✨ Reflexos de amor e harmonia envolvem seu ser. Relacionamentos se fortalecem e novas conexões significativas surgem no horizonte."
    ],
    numerologia: [
        "7️⃣ Número 7 - Sabedoria espiritual. Período de introspecção trará as respostas profundas que você procura. Medite e ouça sua voz interior.",
        "3️⃣ Número 3 - Criatividade em alta! Sua expressão artística trará cura e oportunidades únicas. Compartilhe seus dons com o mundo.",
        "8️⃣ Número 8 - Prosperidade material. Seus projetos profissionais estão prestes a florescer. Invista em parcerias estratégicas."
    ]
};

function scrollToOracle() {
    document.getElementById('oraculo').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function generateAnswer() {
    const question = document.getElementById('userQuestion').value.trim();
    const oracleType = document.getElementById('oracleType').value;
    const answerContainer = document.getElementById('oracleAnswer');
    
    if (!question) {
        answerContainer.innerHTML = `
            <div class="answer-error">
                🔮 Por favor, faça uma pergunta sincera ao oráculo
            </div>
        `;
        answerContainer.classList.add('show');
        return;
    }
    
    // Efeito de carregamento
    answerContainer.innerHTML = `
        <div class="answer-loading">
            <div class="loading-crystal"></div>
            <p>Consultando os registros akáshicos...</p>
        </div>
    `;
    answerContainer.classList.add('show');
    
    // Simular tempo de consulta
    setTimeout(() => {
        const answers = oracleAnswers[oracleType];
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        
        answerContainer.innerHTML = `
            <div class="answer-success">
                <div class="answer-header">
                    <h3>✨ Resposta do ${document.getElementById('oracleType').options[document.getElementById('oracleType').selectedIndex].text} ✨</h3>
                    <p class="user-question">"${question}"</p>
                </div>
                <div class="answer-text">
                    <p>${randomAnswer}</p>
                </div>
                <div class="answer-actions">
                    <button class="share-btn" onclick="shareAnswer()">📤 Compartilhar Revelação</button>
                    <button class="premium-btn" onclick="buyReport()">💎 Relatório Completo (R$ 9,90)</button>
                </div>
            </div>
        `;
        
        // Atualizar contador de consultas
        updateConsultationCount();
        
    }, 3000);
}

function updateConsultationCount() {
    const countElement = document.getElementById('consultasCount');
    let currentCount = parseInt(countElement.textContent.replace('.', ''));
    currentCount += Math.floor(Math.random() * 3) + 1;
    countElement.textContent = currentCount.toLocaleString('pt-BR');
}

function shareAnswer() {
    const answerText = document.querySelector('.answer-text p').textContent;
    const shareData = {
        title: 'Minha Revelação no Amoreverso 🔮',
        text: `Acabei de receber esta mensagem do universo: "${answerText}"`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(`🔮 Amoreverso - Minha Revelação:\n\n"${answerText}"\n\nAcesse: ${window.location.href}`)
            .then(() => alert('Mensagem copiada! Cole e compartilhe com amigos.'));
    }
}

function buyReport() {
    const question = document.getElementById('userQuestion').value;
    alert(`✨ Relatório Especial Gerado!\n\nPergunta: "${question}"\n\nRedirecionando para página de pagamento seguro...`);
    // Aqui você integraria com o gateway de pagamento
}

// Sistema de newsletter
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Simular cadastro
    this.innerHTML = `
        <div class="newsletter-success">
            <p>🎉 Email cadastrado com sucesso! Bênçãos a caminho...</p>
        </div>
    `;
    
    setTimeout(() => {
        this.reset();
        this.innerHTML = `
            <input type="email" placeholder="Seu melhor e-mail" required>
            <button type="submit">Quero Receber Bênçãos</button>
        `;
    }, 3000);
});

// Efeitos de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .blog-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
