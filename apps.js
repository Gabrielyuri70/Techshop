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
    ]
};

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
    const systemSelect = document.getElementById("system-select");
    const resultsSection = document.getElementById("results-section");
    const appsContainer = document.getElementById("apps-container");

    const selectedSystem = systemSelect.value;
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
        card.innerHTML = `
            <div>
                ${app.recommended ? '<div class="badge-recommended">⭐ INDICADO</div>' : ''}
                <h3>${app.name}</h3>
            </div>
            <span class="app-desc">${app.desc}</span>
        `;
        appsContainer.appendChild(card);
    });

    resultsSection.style.display = "block";
}
