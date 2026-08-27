const LINK_MERCADO_PAGO = "https://link.mercadopago.com.br/techshop";

let selectedApp = null;

function selectApp(appName, element) {
    selectedApp = appName;
    
    document.querySelectorAll('.app-card').forEach(card => card.classList.remove('selected'));
    if (element) {
        element.classList.add('selected');
    }

    // Ativa o botão de pagamento visualmente
    const payBtn = document.getElementById('btn-mercadopago');
    if (payBtn) {
        payBtn.classList.remove('disabled');
        payBtn.removeAttribute('aria-disabled');
    }

    const tutorialSection = document.getElementById('tutorial-section');
    const tutorialContent = document.getElementById('tutorial-content');

    tutorialSection.style.display = 'block';
    
    // Rolagem suave para a seção do tutorial
    tutorialSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (appName === 'UniTV') {
        tutorialContent.innerHTML = `
            <p><strong>Passo a passo para ${appName}:</strong></p>
            <ol style="margin-left: 18px; margin-top: 6px;">
                <li>Abra o aplicativo <strong>Downloader</strong> no seu Android TV / TV Box.</li>
                <li>Digite o código <strong>9335318</strong> na barra de pesquisa e clique em Go.</li>
                <li>Após baixar e instalar, conclua a assinatura e faça o login.</li>
            </ol>
        `;
    } else {
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

function redirectPayment(event) {
    if (event) event.preventDefault();

    if (!selectedApp) {
        alert('Por favor, selecione qual aplicativo deseja antes de pagar.');
        return;
    }
    
    if (!LINK_MERCADO_PAGO) {
        alert('O link de pagamento não está configurado.');
        return;
    }

    window.location.href = LINK_MERCADO_PAGO;
}
