const LINK_MERCADO_PAGO = "https://link.mercadopago.com.br/techshop";

let selectedApp = null;

const downloaderCodes = {
    'UniTV': '9335318',
    'Uniplay': '5897118',
    'WPlay': '2943496',
    'Spark Player': '2340800'
};
function selectApp(appName, element) {
    const payBtn = document.getElementById('btn-mercadopago');
    const pixBtn = document.getElementById('btn-pix-nubank');
    const testBtn = document.getElementById('btn-test-drive');
    const tutorialSection = document.getElementById('tutorial-section');
    const tutorialContent = document.getElementById('tutorial-content');
    const stepNode2 = document.getElementById('step-node-2');
    const stepNode3 = document.getElementById('step-node-3');

        // Se o usuário clicar no mesmo aplicativo que já está selecionado -> DESSELECIONA
    if (selectedApp === appName) {
        selectedApp = null;

                // Restaura a exibição e o texto original de todos os cards
        document.querySelectorAll('.app-card').forEach(card => {
            card.classList.remove('selected');
            card.style.display = '';
            
            // Restaura a legenda original armazenada
            const subtitle = card.querySelector('span');
            if (subtitle && card.dataset.originalText) {
                subtitle.innerText = card.dataset.originalText;
            }
        });

        // Restaura a exibição de todos os títulos/categorias
        document.querySelectorAll('.card-step p[style*="font-size"]').forEach(title => {
            title.style.display = '';
        });

        // Desativa os botões de ação
        if (payBtn) payBtn.classList.add('disabled');
        if (pixBtn) pixBtn.classList.add('disabled');
        if (testBtn) testBtn.classList.add('disabled');

        // Esconde o tutorial e reseta o indicador de passos
        if (tutorialSection) tutorialSection.style.display = 'none';
        if (stepNode2) stepNode2.classList.remove('active');
        if (stepNode3) stepNode3.classList.remove('active');

        // Reseta os campos e estado do cupom de desconto
        resetCouponFields();

        return; // Interrompe a execução aqui
    }

        // Se for a primeira seleção ou um app diferente -> SELECIONA NORMALMENTE
    selectedApp = appName;
    
    // Oculta todos os cards de aplicativos e exibe apenas o selecionado
    document.querySelectorAll('.app-card').forEach(card => {
        card.classList.remove('selected');
        card.style.display = 'none';
    });

    // Oculta todos os títulos/categorias dos aplicativos
    document.querySelectorAll('.card-step p[style*="font-size"]').forEach(title => {
        title.style.display = 'none';
    });

        if (element) {
        element.classList.add('selected');
        element.style.display = 'block';

        // Salva o texto original do subtítulo (se ainda não salvou) e exibe a dica
        const subtitle = element.querySelector('span');
        if (subtitle) {
            if (!element.dataset.originalText) {
                element.dataset.originalText = subtitle.innerText;
            }
            subtitle.innerText = "✖ Clique para trocar de aplicativo";
        }
    }
    // Ativa os botões de pagamento e de teste grátis
    if (payBtn) {
        payBtn.classList.remove('disabled');
        payBtn.removeAttribute('aria-disabled');
    }
    if (pixBtn) {
        pixBtn.classList.remove('disabled');
        pixBtn.removeAttribute('aria-disabled');
    }
    if (testBtn) {
        testBtn.classList.remove('disabled');
        testBtn.removeAttribute('aria-disabled');
    }

    if (tutorialSection) {
        tutorialSection.style.display = 'block';
        tutorialSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Atualiza o indicador de etapas ativando os passos 2 e 3
    if (stepNode2) stepNode2.classList.add('active');
    if (stepNode3) stepNode3.classList.add('active');
        // Se for um aplicativo Android que usa o Downloader
    if (tutorialContent) {
        if (downloaderCodes[appName]) {
            const code = downloaderCodes[appName];
            tutorialContent.innerHTML = `
            <p><strong>Passo a passo para ${appName}:</strong></p>
            <ol style="margin-left: 18px; margin-top: 6px;">
                <li>Abra o aplicativo <strong>Downloader</strong> no seu Android TV / TV Box.</li>
                <li>
                    Digite o código 
                    <span class="copy-code-container">
                        <strong id="code-downloader">${code}</strong>
                        <button type="button" class="btn-copy" onclick="copyToClipboard('${code}', this)">Copiar</button>
                    </span>
                    na barra de pesquisa e clique em Go.
                </li>
                <li>Após baixar e instalar, conclua a assinatura e faça o login.</li>
            </ol>
        `;
        } else {
            // Demais aplicativos (Smart TVs LG, Samsung, Roku, etc)
            tutorialContent.innerHTML = `
            <p><strong>Passo a passo para ${appName}:</strong></p>
            <ol style="margin-left: 18px; margin-top: 6px;">
                <li>Acesse a loja de aplicativos da sua Smart TV.</li>
                <li>Pesquise por "<strong>${appName}</strong>", baixe o aplicativo e anote a MAC / Key ou código exibido.</li>
                <li>Realize o pagamento para ativação imediata.</li>
            </ol>
        `;
        }
    }
}

function redirectPayment(event) {
    if (event) event.preventDefault();

    // Bloqueia a execução se nenhum app tiver sido selecionado
    if (!selectedApp) {
        return;
    }
    
    if (!LINK_MERCADO_PAGO) {
        alert('O link de pagamento não está configurado.');
        return;
    }

    window.location.href = LINK_MERCADO_PAGO;
}
function copyToClipboard(text, buttonElement) {
    if (!navigator.clipboard) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            buttonElement.textContent = 'Copiado!';
            buttonElement.classList.add('copied');
            setTimeout(() => {
                buttonElement.textContent = 'Copiar';
                buttonElement.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Erro ao copiar', err);
        }
        document.body.removeChild(textArea);
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
        const originalText = buttonElement.textContent;
        buttonElement.textContent = 'Copiado!';
        buttonElement.classList.add('copied');
        
        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

function requestFreeTest(event) {
    if (event) event.preventDefault();

    if (!selectedApp) {
        alert('Por favor, selecione um aplicativo primeiro.');
        return;
    }

    const phone = "5591993769751";
    const indicatedName = document.getElementById('indicated-name-input') ? document.getElementById('indicated-name-input').value.trim() : '';
    const indicatedPhone = document.getElementById('indicated-phone-input') ? document.getElementById('indicated-phone-input').value.trim() : '';

    let text = `Olá, gostaria de solicitar um teste grátis para o aplicativo *${selectedApp}*.`;

    // Adiciona a informação do cupom e dos dados de indicação caso tenham sido preenchidos
    if (appliedCouponCode && appliedDiscount > 0) {
        text += `\nIndiquei a pessoa *${indicatedName}* (${indicatedPhone}) e ativei o cupom: *${appliedCouponCode}* (${appliedDiscount}% OFF).`;
    }

    const message = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Cupons baseados nas metas de indicação (100 = Mês Grátis)
const validCoupons = {
    'INDICA1': { discount: 30, label: '30% de Desconto (1 Indicação)' },
    'INDICA2': { discount: 50, label: '50% de Desconto (2 Indicações)' },
    'INDICA3': { discount: 100, label: 'Mês Grátis! (3 Indicações)' }
};

let appliedDiscount = 0;
let appliedCouponCode = "";

function applyCoupon() {
    const input = document.getElementById('coupon-input');
    const message = document.getElementById('coupon-message');
    const nameInput = document.getElementById('indicated-name-input');
    const phoneInput = document.getElementById('indicated-phone-input');
    
    if (!input || !message) return;

    const couponCode = input.value.trim().toUpperCase();
    const indicatedName = nameInput ? nameInput.value.trim() : '';
    const indicatedPhone = phoneInput ? phoneInput.value.trim() : '';

    if (!indicatedName || !indicatedPhone) {
        message.style.color = '#dc3545';
        message.innerText = 'Por favor, preencha o nome e o contato da pessoa indicada.';
        return;
    }

    if (!couponCode) {
        message.style.color = '#dc3545';
        message.innerText = 'Por favor, digite um cupom.';
        return;
    }

    const sendBtn = document.getElementById('btn-send-coupon');

    if (validCoupons[couponCode]) {
        const coupon = validCoupons[couponCode];
        appliedDiscount = coupon.discount;
        appliedCouponCode = couponCode;
        
        message.style.color = '#28a745';
        if (appliedDiscount === 100) {
            message.innerText = `🎉 Parabéns! Cupom ativado: ${coupon.label}`;
        } else {
            message.innerText = `Cupom aplicado! ${coupon.label}`;
        }

                // Exibe o botão de envio ao suporte
        if (sendBtn) sendBtn.style.display = 'block';
    } else {
        appliedDiscount = 0;
        appliedCouponCode = "";
        message.style.color = '#dc3545';
        message.innerText = 'Cupom inválido ou expirado.';

        // Oculta o botão se o cupom for inválido
        if (sendBtn) sendBtn.style.display = 'none';
    }

    // Atualiza a calculadora visual de desconto
    calculateDiscount();
}

function sendCouponToWhatsApp(event) {
    if (event) event.preventDefault();

    const phone = "5591993769751";
    const appInfo = selectedApp ? ` no aplicativo *${selectedApp}*` : "";
    const indicatedName = document.getElementById('indicated-name-input') ? document.getElementById('indicated-name-input').value.trim() : '';
    const indicatedPhone = document.getElementById('indicated-phone-input') ? document.getElementById('indicated-phone-input').value.trim() : '';

    let text = `Olá, indiquei a pessoa *${indicatedName}* do número *${indicatedPhone}* e ativei o cupom *${appliedCouponCode}* (${appliedDiscount}% OFF)${appInfo}. Gostaria de receber o desconto!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

// Ajuste automático para rolar a tela e não cobrir o campo quando o teclado móbile subir
document.addEventListener('focusin', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
        setTimeout(() => {
            e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
});
function toggleMoreApps() {
    const extraContainer = document.getElementById('extra-apps-container');
    const txtToggle = document.getElementById('txt-toggle-apps');
    const arrowToggle = document.getElementById('arrow-toggle-apps');

    if (!extraContainer) return;

    const isHidden = window.getComputedStyle(extraContainer).display === 'none';

    if (isHidden) {
        extraContainer.style.display = 'block';
        if (txtToggle) txtToggle.innerText = 'Recolher';
        if (arrowToggle) arrowToggle.innerText = '▲';
    } else {
        extraContainer.style.display = 'none';
        if (txtToggle) txtToggle.innerText = 'Ver mais apps';
        if (arrowToggle) arrowToggle.innerText = '▼';
    }
}

function openPixModal() {
    if (!selectedApp) {
        alert('Por favor, selecione um aplicativo primeiro.');
        return;
    }
    const pixModal = document.getElementById('pix-modal');
    if (pixModal) {
        pixModal.style.display = 'flex';
    }
}

function closePixModal() {
    const pixModal = document.getElementById('pix-modal');
    if (pixModal) {
        pixModal.style.display = 'none';
    }
}
function calculateDiscount() {
    const priceInput = document.getElementById('plan-price-input');
    const container = document.getElementById('discount-price-container');
    const discountText = document.getElementById('discount-amount-text');
    const originalText = document.getElementById('original-price-text');
    const finalText = document.getElementById('final-price-text');

    if (!priceInput || !container) return;

    // Converte a vírgula digitada pelo usuário para ponto no cálculo interno
    const rawValue = priceInput.value.replace(',', '.');
    const originalPrice = parseFloat(rawValue);

    // Se o valor for inválido ou zero, oculta o container
    if (isNaN(originalPrice) || originalPrice <= 0) {
        container.style.display = 'none';
        return;
    }

    // Calcula o valor do desconto e o valor final
    const discountAmount = (originalPrice * appliedDiscount) / 100;
    const finalPrice = Math.max(0, originalPrice - discountAmount);

    // Atualiza a exibição na tela formatando com vírgula (padrão PT-BR)
    if (appliedDiscount > 0) {
        discountText.innerText = `Desconto (${appliedDiscount}%): R$ ${discountAmount.toFixed(2).replace('.', ',')}`;
        originalText.innerText = `R$ ${originalPrice.toFixed(2).replace('.', ',')}`;
        finalText.innerText = `R$ ${finalPrice.toFixed(2).replace('.', ',')}`;
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}
function resetCouponFields() {
    // Limpa os campos de texto
    const indicatedName = document.getElementById('indicated-name-input');
    const indicatedPhone = document.getElementById('indicated-phone-input');
    const planPrice = document.getElementById('plan-price-input');
    const couponInput = document.getElementById('coupon-input');
    const couponMessage = document.getElementById('coupon-message');
    const sendBtn = document.getElementById('btn-send-coupon');

    if (indicatedName) indicatedName.value = '';
    if (indicatedPhone) indicatedPhone.value = '';
    if (planPrice) planPrice.value = '';
    if (couponInput) couponInput.value = '';

    // Reseta as variáveis globais de desconto
    appliedDiscount = 0;
    appliedCouponCode = "";

    // Limpa mensagens e oculta botões/resumos
    if (couponMessage) couponMessage.innerText = '';
    if (sendBtn) sendBtn.style.display = 'none';

        // Recalcula a interface para esconder o resumo do preço
    calculateDiscount();
}

/* ==========================================================================
   Funções de Controle do Modal de Painéis (Restrito por PIN)
   ========================================================================== */
function openPanelModal() {
    const modal = document.getElementById("panel-modal");
    if (!modal) return;
    modal.style.display = "flex";
    const pinStep = document.getElementById("pin-step");
    const panelsStep = document.getElementById("panels-step");
    const pinInput = document.getElementById("pin-input");
    const pinError = document.getElementById("pin-error");

    if (pinStep) pinStep.style.display = "block";
    if (panelsStep) panelsStep.style.display = "none";
    if (pinInput) pinInput.value = "";
    if (pinError) pinError.style.display = "none";
}

function closePanelModal() {
    const modal = document.getElementById("panel-modal");
    if (modal) modal.style.display = "none";
}

function validatePin() {
    const pinInput = document.getElementById("pin-input");
    const pinError = document.getElementById("pin-error");
    const pinStep = document.getElementById("pin-step");
    const panelsStep = document.getElementById("panels-step");

    if (!pinInput) return;

    if (pinInput.value === "2020") {
        if (pinStep) pinStep.style.display = "none";
        if (panelsStep) panelsStep.style.display = "block";
    } else {
        if (pinError) pinError.style.display = "block";
    }
}

