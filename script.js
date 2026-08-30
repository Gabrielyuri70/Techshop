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

        // Remove o destaque do card
        if (element) element.classList.remove('selected');

        // Desativa os botões de ação
        if (payBtn) payBtn.classList.add('disabled');
        if (pixBtn) pixBtn.classList.add('disabled');
        if (testBtn) testBtn.classList.add('disabled');

        // Esconde o tutorial e reseta o indicador de passos
        if (tutorialSection) tutorialSection.style.display = 'none';
        if (stepNode2) stepNode2.classList.remove('active');
        if (stepNode3) stepNode3.classList.remove('active');

        return; // Interrompe a execução aqui
    }

    // Se for a primeira seleção ou um app diferente -> SELECIONA NORMALMENTE
    selectedApp = appName;
    
    document.querySelectorAll('.app-card').forEach(card => card.classList.remove('selected'));
    if (element) {
        element.classList.add('selected');
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
    let text = `Olá, gostaria de solicitar um teste grátis para o aplicativo ${selectedApp}.`;

    // Adiciona a informação do cupom se tiver algum aplicado
    if (appliedCouponCode && appliedDiscount > 0) {
        text += `\nPossuo o cupom de indicação: ${appliedCouponCode} (${appliedDiscount}% off).`;
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
    
    if (!input || !message) return;

    const couponCode = input.value.trim().toUpperCase();

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
}

function sendCouponToWhatsApp(event) {
    if (event) event.preventDefault();

    const phone = "5591993769751";
    const appInfo = selectedApp ? ` no aplicativo ${selectedApp}` : "";
    const text = `Olá! Ativei o cupom *${appliedCouponCode}* (${appliedDiscount}% OFF)${appInfo} no site e gostaria de receber o link de pagamento com o desconto aplicado.`;

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

