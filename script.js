// Sistema de Oráculo com Respostas Completas
const oracleAnswers = {
    tarot: [
        `🃏 **O Louco** aparece em seu caminho! Esta carta representa novos começos, aventura e espontaneidade. O universo está sinalizando que é momento de dar um salto de fé em direção ao desconhecido. 

**Interpretação Detalhada:**
- **Novos Ciclos**: Você está no limiar de um novo capítulo em sua vida
- **Liberdade**: É hora de se libertar de amarras e expectativas alheias
- **Confiança**: O universo apoia sua jornada, mesmo que o caminho pareça incerto

**Conselho Prático:** 
Siga sua intuição sem medo. O Louco não carrega bagagem pesada - liberte-se do que não serve mais e confie que o caminho se revelará a cada passo.`,

        `👑 **A Imperatriz** traz fertilidade e criatividade. Esta carta representa abundância, sensualidade e conexão com a natureza.

**Interpretação Detalhada:**
- **Criatividade**: Seus projetos atuais florescerão além das expectativas
- **Abundância**: Prosperidade material e espiritual está a caminho
- **Conexão**: Fortaleça seus laços familiares e com a natureza

**Conselho Prático:**
Dedique tempo para nutrir seus projetos como um jardim. A Imperatriz ensina que a paciência e o cuidado constante trazem os melhores frutos.`,

        `⚖️ **A Justiça** revela que o equilíbrio será restaurado. Esta carta fala sobre karma, verdade e consequências.

**Interpretação Detalhada:**
- **Equilíbrio**: Situações pendentes se resolverão a seu favor
- **Verdade**: Informações importantes virão à tona
- **Responsabilidade**: Suas ações passadas estão influenciando o presente

**Conselho Prático:**
Mantenha integridade em todas as suas decisões. A Justiça garante que cada ação terá sua consequência correspondente.`
    ],

    runas: [
        `ᚠ **Fehu** - A runa da prosperidade e riqueza material e espiritual.

**Significado Profundo:**
Fehu representa o gado, que na antiguidade simbolizava riqueza móvel. Esta runa indica que você está prestes a receber os frutos de trabalhos anteriores.

**Aspectos Positivos:**
- Chegada de recursos inesperados
- Sucesso em empreendimentos
- Energia de manifestação poderosa

**Atenção:**
Fehu lembra que a verdadeira riqueza está na capacidade de compartilhar e circular energia. Evite a ganância.`,

        `ᚢ **Uruz** - Força primal, saúde e transformação radical.

**Significado Profundo:**
Uruz é a runa do boi selvagem, representando força bruta, vitalidade e mudanças profundas.

**Aspectos Positivos:**
- Superação de obstáculos aparentemente intransponíveis
- Recuperação de energia vital
- Início de transformações significativas

**Atenção:**
Use esta força com sabedoria. Transformações profundas exigem coragem e podem ser intensas.`,

        `ᚦ **Thurisaz** - Porta para novas oportunidades e proteção.

**Significado Profundo:**
Thurisaz é a runa do gigante, representando tanto perigo quanto proteção poderosa.

**Aspectos Positivos:**
- Novas portas se abrindo
- Proteção contra energias negativas
- Clareza para tomar decisões importantes

**Atenção:**
Momento de ação decisiva, mas evite impulsividade. Reflita antes de agir.`
    ],

    cristal: [
        `🔮 **Visão da Bola de Cristal:** Um caminho iluminado se revela diante de você.

**Mensagem Detalhada:**
A névoa da incerteza está se dissipando para revelar respostas claras. Seus esforços recentes estão prestes a ser recompensados de maneira significativa.

**Revelações:**
- Dentro de 7 a 14 dias, uma resposta importante surgirá
- Alguém do passado pode retornar com uma mensagem relevante
- Seu campo energético está se fortalecendo

**Orientações:**
Continue com fé e determinação. A luz no final do túnel é real e você está mais próximo do que imagina.`,

        `💫 **Visão da Bola de Cristal:** Energias de amor e harmonia.

**Mensagem Detalhada:**
Reflexos de amor e conexões genuínas envolvem seu campo energético. Relacionamentos existentes se aprofundam e novas conexões significativas estão a caminho.

**Revelações:**
- No amor: se solteiro, alguém especial se aproxima
- Se comprometido, renovação da paixão
- Amizades evoluem para conexões mais profundas

**Orientações:**
Trabalhe o amor próprio como base para atrair relacionamentos saudáveis.`
    ],

    numerologia: [
        `7️⃣ **Número 7** - Sabedoria espiritual e introspecção.

**Vibração Energética:**
O 7 é o número do buscador, do filósofo, da espiritualidade e da análise profunda.

**Influências:**
- Período ideal para estudo e pesquisa
- Desenvolvimento da intuição
- Conexão com o divino

**Aplicação Prática:**
Reserve momentos de solitude para meditar e ouvir sua voz interior. Insights valiosos surgirão durante a quietude.`,

        `3️⃣ **Número 3** - Criatividade, comunicação e alegria.

**Vibração Energética:**
O 3 representa expressão, otimismo e expansão em todas as áreas da vida.

**Influências:**
- Projetos criativos ganham impulso
- Comunicação fluida e efetiva
- Atração de oportunidades sociais

**Aplicação Prática:**
Compartilhe seus talentos com o mundo. Sua expressão autêntica atrará reconhecimento e novas oportunidades.`
    ]
};

// ... (mantenha o restante do script anterior igual) ...

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
            <p>Consultando os registros akáshicos e conectando com a sabedoria ancestral...</p>
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
                    ${randomAnswer.split('\n').map(line => `<p>${line}</p>`).join('')}
                </div>
                <div class="answer-actions">
                    <button class="share-btn" onclick="shareAnswer()">
                        <span>📤</span>
                        Compartilhar Revelação
                    </button>
                    <button class="premium-btn" onclick="buyReport()">
                        <span>💎</span>
                        Relatório Completo (R$ 9,90)
                    </button>
                </div>
            </div>
        `;
        
        // Atualizar contador de consultas
        updateConsultationCount();
        
    }, 3500);
}

// ... (mantenha o restante das funções iguais) ...
