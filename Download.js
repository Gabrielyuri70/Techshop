const brandSystems = {
    samsung: [
        { value: "tizen", label: "Tizen OS (Samsung)" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    lg: [
        { value: "webos", label: "webOS (LG)" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    tcl: [
        { value: "android", label: "Android TV / Google TV" },
        { value: "roku", label: "Roku OS" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    aoc: [
        { value: "roku", label: "Roku OS" },
        { value: "android", label: "Android TV" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    aiwa: [
        { value: "android", label: "Android TV / Google TV" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    philco: [
        { value: "android", label: "Android TV" },
        { value: "roku", label: "Roku OS" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    semp: [
        { value: "android", label: "Android TV / Google TV" },
        { value: "roku", label: "Roku OS" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    hisense: [
        { value: "android", label: "Android TV / Google TV" },
        { value: "roku", label: "Roku OS" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    multilaser: [
        { value: "android", label: "Android TV" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    britania: [
        { value: "android", label: "Android TV" },
        { value: "roku", label: "Roku OS" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ],
    outro: [
        { value: "android", label: "Android TV / Google TV" },
        { value: "roku", label: "Roku OS" },
        { value: "tizen", label: "Tizen OS" },
        { value: "webos", label: "webOS" },
        { value: "unknown", label: "❓ Não sei qual é o sistema" }
    ]
};

const appsData = {
    tizen: [
        { name: "Bob Player", desc: "Otimizado para Smart TV Samsung", recommended: true },
        { name: "XCloud", desc: "Compatível com Tizen OS", recommended: false },
        { name: "Blessed Player", desc: "Compatível com Tizen OS", recommended: false },
        { name: "Kplay", desc: "Compatível com Tizen OS", recommended: false },
        { name: "Fun Player", desc: "Compatível com Tizen OS", recommended: false },
        { name: "Lazer Player", desc: "Compatível com Tizen OS", recommended: false },
        { name: "Vega Player", desc: "Compatível com Tizen OS", recommended: false }
    ],
    webos: [
        { name: "Bob Player", desc: "Desenvolvido para Smart TV LG", recommended: true },
        { name: "Spark Player", desc: "Alta performance no webOS", recommended: true },
        { name: "XCloud", desc: "Compatível com webOS", recommended: false },
        { name: "Blessed Player", desc: "Compatível com webOS", recommended: false },
        { name: "Kplay", desc: "Compatível com webOS", recommended: false },
        { name: "Fun Player", desc: "Compatível com webOS", recommended: false },
        { name: "Lazer Player", desc: "Compatível com webOS", recommended: false },
        { name: "Vega Player", desc: "Compatível com webOS", recommended: false }
    ],
    roku: [
        { name: "Ibo Player Pro", desc: "Leitor recomendado para Roku OS", recommended: true },
        { name: "Ibo Pro", desc: "Leitor recomendado para Roku OS", recommended: true },
        { name: "XCloud", desc: "Compatível com Roku OS", recommended: false },
        { name: "Blessed Player", desc: "Compatível com Roku OS", recommended: false },
        { name: "Kplay", desc: "Compatível com Roku OS", recommended: false },
        { name: "Fun Player", desc: "Compatível com Roku OS", recommended: false },
        { name: "Lazer Player", desc: "Compatível com Roku OS", recommended: false },
        { name: "Vega Player", desc: "Compatível com Roku OS", recommended: false }
    ],
    android: [
        { name: "UniTV", desc: "Código Downloader: 9335318", recommended: true },
        { name: "Uniplay", desc: "Código Downloader: 5897118", recommended: false },
        { name: "WPlay", desc: "Código Downloader: 2943496", recommended: false },
        { name: "Spark Player", desc: "Código Downloader: 2340800", recommended: false }
    ],
    mobile_android: [
        { name: "UniTV", desc: "Aplicativo completo com canais e filmes", recommended: true, downloadUrl: "https://mkdw.qrdldunitvss.com/download" },
        { name: "Spark Player", desc: "Player leve e de alta performance", recommended: false, downloadUrl: "http://aftv.news/2340800" },
        { name: "Wplay", desc: "Excelente reprodutor para Android", recommended: false, downloadUrl: "https://loja.kravilon.link/" },
        { name: "Uniplay", desc: "Opção prática para celulares Android", recommended: false, downloadUrl: "https://5664.in/zm2n45bp" },
        { name: "Fast Pro", desc: "Player rápido e otimizado", recommended: false, downloadUrl: "http://aftv.news/5279242" }
    ],
    mobile_ios: [
        { name: "ARC Player", desc: "Player completo para iOS", recommended: false, downloadUrl: "https://apps.apple.com/br/app/arc-player/id6449966365" },
        { name: "Ibo Pro Player", desc: "Excelente reprodutor para iPhone e iPad", recommended: true, downloadUrl: "https://apps.apple.com/br/app/ibo-pro-player/id6449647925" },
        { name: "Wplay", desc: "Versão mobile oficial do Wplay", recommended: false, downloadUrl: "https://apps.apple.com/br/app/wplay-mobile/id6471241842" },
        { name: "Blessed Player", desc: "Reprodutor de mídia para iOS", recommended: false, downloadUrl: "https://apps.apple.com/br/app/blessed-player-oficial/id6743084241" },
        { name: "Smarters Player", desc: "Smarters Player Lite na App Store", recommended: false, downloadUrl: "https://apps.apple.com/br/app/smarters-player-lite/id1628995509" }
    ],
    web: [
        { 
            name: "UniTV Web", 
            desc: "Assista direto pelo navegador. Funciona em qualquer dispositivo!", 
            recommended: true, 
            downloadUrl: "https://www.unitvwebs.net/",
            buttonText: "Acessar UniTV Web",
            notice: "⚠️ Se o link parar de funcionar, solicite o novo link com o suporte."
        }
    ]
};

function toggleDeviceType() {
    const deviceTypeSelect = document.getElementById("device-type-select");
    if (!deviceTypeSelect) return;

    // Limpa o campo de busca quando alternar a opção dos seletores
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";

    const deviceType = deviceTypeSelect.value;
    const tvFields = document.getElementById("tv-fields");
    const mobileFields = document.getElementById("mobile-fields");
    const resultsSection = document.getElementById("results-section");

    if (resultsSection) resultsSection.style.display = "none";

    if (deviceType === "mobile") {
        if (tvFields) tvFields.style.display = "none";
        if (mobileFields) mobileFields.style.display = "block";
        const mobileSelect = document.getElementById("mobile-os-select");
        if (mobileSelect) mobileSelect.value = "";
    } else if (deviceType === "web") {
        if (tvFields) tvFields.style.display = "none";
        if (mobileFields) mobileFields.style.display = "none";
        filterApps();
    } else {
        if (tvFields) tvFields.style.display = "block";
        if (mobileFields) mobileFields.style.display = "none";
        const brandSelect = document.getElementById("brand-select");
        const systemSelect = document.getElementById("system-select");
        if (brandSelect) brandSelect.value = "";
        if (systemSelect) {
            systemSelect.innerHTML = '<option value="">-- Escolha a marca primeiro --</option>';
            systemSelect.value = "";
            systemSelect.disabled = true;
        }
    }
}

function updateSystems() {
    const brandSelect = document.getElementById("brand-select");
    const systemSelect = document.getElementById("system-select");
    const resultsSection = document.getElementById("results-section");

    if (!brandSelect || !systemSelect) return;

    const selectedBrand = brandSelect.value;
    systemSelect.innerHTML = '<option value="">-- Selecione o Sistema --</option>';
    
    if (resultsSection) {
        resultsSection.style.display = "none";
    }

    if (selectedBrand && brandSystems[selectedBrand]) {
        brandSystems[selectedBrand].forEach(system => {
            const option = document.createElement("option");
            option.value = system.value;
            option.textContent = system.label;
            systemSelect.appendChild(option);
        });
        systemSelect.disabled = false;
    } else {
        systemSelect.innerHTML = '<option value="">-- Escolha a marca primeiro --</option>';
        systemSelect.disabled = true;
    }
}

function filterApps() {
    const deviceTypeSelect = document.getElementById("device-type-select");
    const resultsSection = document.getElementById("results-section");
    const appsContainer = document.getElementById("apps-container");

    if (!deviceTypeSelect || !resultsSection || !appsContainer) return;

    const deviceType = deviceTypeSelect.value;
    let selectedSystem = "";

    if (deviceType === "mobile") {
        const mobileSelect = document.getElementById("mobile-os-select");
        selectedSystem = mobileSelect ? mobileSelect.value : "";
    } else if (deviceType === "web") {
        selectedSystem = "web";
    } else {
        const systemSelect = document.getElementById("system-select");
        selectedSystem = systemSelect ? systemSelect.value : "";
    }

    appsContainer.innerHTML = "";

    if (!selectedSystem) {
        resultsSection.style.display = "none";
        return;
    }

    let listToRender = [];

    if (selectedSystem === "unknown") {
        const allApps = [
            ...appsData.tizen,
            ...appsData.webos,
            ...appsData.android,
            ...appsData.roku
        ];
        listToRender = Array.from(new Set(allApps.map(a => a.name)))
            .map(name => allApps.find(a => a.name === name));
    } else if (appsData[selectedSystem]) {
        listToRender = appsData[selectedSystem];
    }

    listToRender.forEach(app => {
        const card = document.createElement("div");
        card.className = "app-card";
        
        const btnText = app.buttonText || "Baixar Aplicativo";
        const downloadButtonHtml = app.downloadUrl 
            ? `<a href="${app.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-pay" style="margin-top: 10px;">${btnText}</a>`
            : '';

        const noticeHtml = app.notice
            ? `<div class="alert-box" style="margin-top: 10px;"><p>${app.notice}</p></div>`
            : '';

        let descHtml = app.desc;
        if (app.desc.includes("Código Downloader:")) {
            const code = app.desc.replace("Código Downloader:", "").trim();
            descHtml = `Código Downloader: 
                <div class="copy-code-container">
                    <strong>${code}</strong>
                    <button type="button" class="btn-copy" onclick="copyToClipboard('${code}', this)">Copiar</button>
                </div>`;
        }

        card.innerHTML = `
            <div>
                ${app.recommended ? '<div class="badge-recommended" title="Recomendado">👍🏻</div>' : ''}
                <h3>${app.name}</h3>
                <span class="app-desc">${descHtml}</span>
            </div>
            ${noticeHtml}
            ${downloadButtonHtml}
        `;

        appsContainer.appendChild(card);
    });

    resultsSection.style.display = "block";
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

function searchApps() {
    const searchInput = document.getElementById("search-input");
    const resultsSection = document.getElementById("results-section");
    const appsContainer = document.getElementById("apps-container");

    if (!searchInput || !resultsSection || !appsContainer) return;

    const query = searchInput.value.toLowerCase().trim();

    if (query === "") {
        resultsSection.style.display = "none";
        appsContainer.innerHTML = "";
        return;
    }

    // Reseta os seletores ao digitar no campo de busca para evitar conflitos
    const brandSelect = document.getElementById("brand-select");
    const systemSelect = document.getElementById("system-select");
    const mobileSelect = document.getElementById("mobile-os-select");
    if (brandSelect) brandSelect.value = "";
    if (systemSelect) {
        systemSelect.value = "";
        systemSelect.disabled = true;
    }
    if (mobileSelect) mobileSelect.value = "";

    // Mapeia marcas cadastradas em brandSystems (ex: TCL, Samsung, LG, Philco...)
    let targetSystems = new Set();
    Object.keys(brandSystems).forEach(brandKey => {
        if (brandKey.includes(query) || query.includes(brandKey)) {
            brandSystems[brandKey].forEach(sys => {
                if (sys.value !== "unknown") {
                    targetSystems.add(sys.value);
                }
            });
        }
    });

        // Mapeamentos diretos de sistemas e atalhos comuns (incluindo termos genéricos)
    if (query.includes("samsung") || query.includes("tizen")) targetSystems.add("tizen");
    if (query.includes("lg") || query.includes("webos")) targetSystems.add("webos");
    if (query.includes("roku")) targetSystems.add("roku");
    if (query.includes("android") || query.includes("firestick") || query.includes("tvbox") || query.includes("box") || query.includes("xiaomi") || query.includes("mi stick")) {
        targetSystems.add("android");
        targetSystems.add("mobile_android");
    }
    if (query.includes("ios") || query.includes("iphone") || query.includes("ipad") || query.includes("apple")) targetSystems.add("mobile_ios");

    // Termos genéricos de busca que devem exibir os apps de TV/Mobile principais
    const genericTerms = ["iptv", "canais", "filmes", "series", "séries", "tv", "smart", "plataforma", "player", "stream"];
    if (genericTerms.some(term => query.includes(term))) {
        targetSystems.add("android");
        targetSystems.add("tizen");
        targetSystems.add("webos");
        targetSystems.add("roku");
        targetSystems.add("mobile_android");
        targetSystems.add("mobile_ios");
    }

    const filteredApps = [];
    const seenNames = new Set();

    // 1. Busca apps EXCLUSIVAMENTE nos sistemas mapeados pela marca/sistema digitado
    targetSystems.forEach(sysKey => {
        if (appsData[sysKey]) {
            appsData[sysKey].forEach(app => {
                if (!seenNames.has(app.name)) {
                    seenNames.add(app.name);
                    filteredApps.push(app);
                }
            });
        }
    });

    // 2. Busca por nome do app ou descrição APENAS se nenhuma marca/sistema foi identificada
    if (targetSystems.size === 0) {
        Object.values(appsData).flat().forEach(app => {
            const nameMatch = app.name.toLowerCase().includes(query);
            const descMatch = app.desc.toLowerCase().includes(query);

            if ((nameMatch || descMatch) && !seenNames.has(app.name)) {
                seenNames.add(app.name);
                filteredApps.push(app);
            }
        });
    }

    appsContainer.innerHTML = "";

    if (filteredApps.length === 0) {
        appsContainer.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-secondary); grid-column: 1/-1;">Nenhum aplicativo encontrado para "${searchInput.value}".</p>`;
    } else {
        filteredApps.forEach(app => {
            let descHtml = app.desc;
            if (app.desc.includes("Código Downloader:")) {
                const code = app.desc.replace("Código Downloader:", "").trim();
                descHtml = `Código Downloader: 
                    <div class="copy-code-container">
                        <strong>${code}</strong>
                        <button type="button" class="btn-copy" onclick="copyToClipboard('${code}', this)">Copiar</button>
                    </div>`;
            }

            const card = document.createElement("div");
            card.className = "app-card";
            
            const btnText = app.buttonText || "Baixar Aplicativo";
            const downloadButtonHtml = app.downloadUrl 
                ? `<a href="${app.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn-pay" style="margin-top: 10px;">${btnText}</a>`
                : '';

            const noticeHtml = app.notice
                ? `<div class="alert-box" style="margin-top: 10px;"><p>${app.notice}</p></div>`
                : '';

            card.innerHTML = `
                <div>
                    ${app.recommended ? '<div class="badge-recommended" title="Recomendado">👍🏻</div>' : ''}
                    <h3>${app.name}</h3>
                    <span class="app-desc">${descHtml}</span>
                </div>
                ${noticeHtml}
                ${downloadButtonHtml}
            `;

            appsContainer.appendChild(card);
        });
    }

    resultsSection.style.display = "block";
}

// Configura evento no input e ajuste de tela no celular
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", searchApps);
        searchInput.addEventListener("focus", () => {
            setTimeout(() => {
                searchInput.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        });
    }

    // Inicializa os seletores limpos ao carregar a página
    toggleDeviceType();
});

