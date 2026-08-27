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

                                card.innerHTML = `
            <div>
                ${app.recommended ? '<div class="badge-recommended" title="Recomendado">👍🏻</div>' : ''}
                <h3>${app.name}</h3>
                <span class="app-desc">${app.desc}</span>
            </div>
            ${noticeHtml}
            ${downloadButtonHtml}
        `;

        appsContainer.appendChild(card);
    });

    resultsSection.style.display = "block";
}
