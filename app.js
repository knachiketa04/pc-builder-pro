// Global variables
let selectedComponents = [];
let currentBuild = {
    cpu: null,
    gpu: null,
    ram: null,
    storage: null
};

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Initialize section-specific content
    if (sectionId === 'compare') {
        showComponents('cpu');
    } else if (sectionId === 'configurator') {
        initializeBuildConfigurator();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Component comparison functions
function showComponents(type) {
    const componentList = document.getElementById('component-list');
    const components = componentData[type];
    
    componentList.innerHTML = '';
    
    components.forEach(component => {
        const isSelected = selectedComponents.some(c => c.id === component.id);
        const card = document.createElement('div');
        card.className = `component-card p-6 rounded-xl cursor-pointer ${isSelected ? 'selected' : ''}`;
        card.onclick = () => toggleComponentSelection(component, type);
        
        const useCaseBadges = component.useCase.map(use => {
            const colors = {
                'AI/ML': 'bg-blue-600',
                'Gaming': 'bg-green-600',
                'Video Editing': 'bg-purple-600'
            };
            return `<span class="${colors[use]} px-2 py-1 rounded text-xs">${use}</span>`;
        }).join(' ');
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <h3 class="font-semibold text-lg">${component.name}</h3>
                <span class="text-green-400 font-semibold">$${component.price}</span>
            </div>
            <div class="space-y-2 text-sm text-gray-300 mb-4">
                ${Object.entries(component.specs).map(([key, value]) => 
                    `<div class="flex justify-between">
                        <span class="text-gray-400">${formatSpecKey(key)}:</span>
                        <span>${value}</span>
                    </div>`
                ).join('')}
            </div>
            <div class="flex justify-between items-center">
                <div class="space-x-2">${useCaseBadges}</div>
                <div class="text-yellow-400">
                    ${'★'.repeat(Math.floor(component.performance / 20))}${'☆'.repeat(5 - Math.floor(component.performance / 20))}
                </div>
            </div>
            ${isSelected ? '<div class="mt-4 text-center text-blue-400"><i class="fas fa-check-circle"></i> Selected for Comparison</div>' : ''}
        `;
        
        componentList.appendChild(card);
    });
}

function toggleComponentSelection(component, type) {
    const existingIndex = selectedComponents.findIndex(c => c.id === component.id);
    
    if (existingIndex > -1) {
        selectedComponents.splice(existingIndex, 1);
    } else {
        if (selectedComponents.length < 4) {
            selectedComponents.push({...component, type});
        } else {
            alert('You can compare up to 4 components at once.');
            return;
        }
    }
    
    showComponents(type);
    updateComparisonTable();
}

function updateComparisonTable() {
    const comparisonSection = document.getElementById('comparison-section');
    const comparisonTable = document.getElementById('comparison-table');
    
    if (selectedComponents.length < 2) {
        comparisonSection.style.display = 'none';
        return;
    }
    
    comparisonSection.style.display = 'block';
    
    // Create comparison table
    let tableHTML = `
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b border-gray-600">
                    <th class="text-left py-3 px-4">Specification</th>
                    ${selectedComponents.map(c => `<th class="text-left py-3 px-4">${c.name}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-3 px-4 font-semibold">Price</td>
                    ${selectedComponents.map(c => `<td class="py-3 px-4 text-green-400">$${c.price}</td>`).join('')}
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-3 px-4 font-semibold">Performance</td>
                    ${selectedComponents.map(c => `<td class="py-3 px-4">${'★'.repeat(Math.floor(c.performance / 20))}${'☆'.repeat(5 - Math.floor(c.performance / 20))}</td>`).join('')}
                </tr>
    `;
    
    // Add spec rows
    const allSpecs = new Set();
    selectedComponents.forEach(c => Object.keys(c.specs).forEach(spec => allSpecs.add(spec)));
    
    allSpecs.forEach(spec => {
        tableHTML += `
            <tr class="border-b border-gray-700">
                <td class="py-3 px-4 font-semibold">${formatSpecKey(spec)}</td>
                ${selectedComponents.map(c => `<td class="py-3 px-4">${c.specs[spec] || 'N/A'}</td>`).join('')}
            </tr>
        `;
    });
    
    tableHTML += '</tbody></table>';
    comparisonTable.innerHTML = tableHTML;
}

function clearComparison() {
    selectedComponents = [];
    document.getElementById('comparison-section').style.display = 'none';
    // Refresh current component view
    const activeButton = document.querySelector('.component-type-btn');
    if (activeButton) {
        const type = activeButton.textContent.toLowerCase().includes('cpu') ? 'cpu' :
                    activeButton.textContent.toLowerCase().includes('gpu') ? 'gpu' :
                    activeButton.textContent.toLowerCase().includes('ram') ? 'ram' : 'storage';
        showComponents(type);
    }
}

// Build configurator functions
function initializeBuildConfigurator() {
    populateComponentSelections();
    updateBuildSummary();
}

function populateComponentSelections() {
    // Populate CPU selection
    const cpuSelection = document.getElementById('cpu-selection');
    cpuSelection.innerHTML = '';
    componentData.cpu.forEach(cpu => {
        const card = createBuildComponentCard(cpu, 'cpu');
        cpuSelection.appendChild(card);
    });
    
    // Populate GPU selection
    const gpuSelection = document.getElementById('gpu-selection');
    gpuSelection.innerHTML = '';
    componentData.gpu.forEach(gpu => {
        const card = createBuildComponentCard(gpu, 'gpu');
        gpuSelection.appendChild(card);
    });
    
    // Populate RAM selection
    const ramSelection = document.getElementById('ram-selection');
    ramSelection.innerHTML = '';
    componentData.ram.forEach(ram => {
        const card = createBuildComponentCard(ram, 'ram');
        ramSelection.appendChild(card);
    });
    
    // Populate Storage selection
    const storageSelection = document.getElementById('storage-selection');
    storageSelection.innerHTML = '';
    componentData.storage.forEach(storage => {
        const card = createBuildComponentCard(storage, 'storage');
        storageSelection.appendChild(card);
    });
}

function createBuildComponentCard(component, type) {
    const isSelected = currentBuild[type] && currentBuild[type].id === component.id;
    const card = document.createElement('div');
    card.className = `component-card p-4 rounded-lg cursor-pointer ${isSelected ? 'selected' : ''}`;
    card.onclick = () => selectBuildComponent(component, type);
    
    const useCaseBadges = component.useCase.map(use => {
        const colors = {
            'AI/ML': 'bg-blue-600',
            'Gaming': 'bg-green-600',
            'Video Editing': 'bg-purple-600'
        };
        return `<span class="${colors[use]} px-2 py-1 rounded text-xs">${use}</span>`;
    }).join(' ');
    
    card.innerHTML = `
        <div class="flex justify-between items-start mb-3">
            <h4 class="font-semibold">${component.name}</h4>
            <span class="text-green-400 font-semibold">$${component.price}</span>
        </div>
        <div class="space-x-2 mb-3">${useCaseBadges}</div>
        <div class="text-yellow-400 text-sm">
            ${'★'.repeat(Math.floor(component.performance / 20))}${'☆'.repeat(5 - Math.floor(component.performance / 20))}
        </div>
        ${isSelected ? '<div class="mt-3 text-center text-blue-400"><i class="fas fa-check-circle"></i> Selected</div>' : ''}
    `;
    
    return card;
}

function selectBuildComponent(component, type) {
    currentBuild[type] = component;
    populateComponentSelections();
    updateBuildSummary();
}

function updateBuildSummary() {
    document.getElementById('selected-cpu').textContent = currentBuild.cpu ? currentBuild.cpu.name : 'Not selected';
    document.getElementById('selected-gpu').textContent = currentBuild.gpu ? currentBuild.gpu.name : 'Not selected';
    document.getElementById('selected-ram').textContent = currentBuild.ram ? currentBuild.ram.name : 'Not selected';
    document.getElementById('selected-storage').textContent = currentBuild.storage ? currentBuild.storage.name : 'Not selected';
    
    const totalPrice = Object.values(currentBuild).reduce((sum, component) => {
        return sum + (component ? component.price : 0);
    }, 0);
    
    document.getElementById('total-price').textContent = `$${totalPrice}`;
}

function clearBuild() {
    currentBuild = {
        cpu: null,
        gpu: null,
        ram: null,
        storage: null
    };
    populateComponentSelections();
    updateBuildSummary();
}

function saveBuild() {
    const buildData = {
        ...currentBuild,
        timestamp: new Date().toISOString(),
        totalPrice: Object.values(currentBuild).reduce((sum, component) => {
            return sum + (component ? component.price : 0);
        }, 0)
    };
    
    localStorage.setItem('savedBuild', JSON.stringify(buildData));
    alert('Build saved successfully!');
}

// Pre-built configuration functions
function loadPrebuiltConfig(configType) {
    const config = prebuiltConfigs[configType];
    if (!config) return;
    
    currentBuild = {
        cpu: componentData.cpu.find(c => c.id === config.cpu),
        gpu: componentData.gpu.find(c => c.id === config.gpu),
        ram: componentData.ram.find(c => c.id === config.ram),
        storage: componentData.storage.find(c => c.id === config.storage)
    };
    
    showSection('configurator');
    alert(`${config.name} loaded successfully!`);
}

// Utility functions
function formatSpecKey(key) {
    const keyMap = {
        cores: 'Cores',
        threads: 'Threads',
        baseClock: 'Base Clock',
        boostClock: 'Boost Clock',
        tdp: 'TDP',
        socket: 'Socket',
        vram: 'VRAM',
        memoryBus: 'Memory Bus',
        capacity: 'Capacity',
        speed: 'Speed',
        modules: 'Modules',
        latency: 'Latency',
        voltage: 'Voltage',
        interface: 'Interface',
        readSpeed: 'Read Speed',
        writeSpeed: 'Write Speed',
        formFactor: 'Form Factor'
    };
    return keyMap[key] || key;
}

function filterComponents(type) {
    showSection('compare');
    showComponents(type);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Load saved build if exists
    const savedBuild = localStorage.getItem('savedBuild');
    if (savedBuild) {
        try {
            const buildData = JSON.parse(savedBuild);
            if (buildData.cpu) currentBuild.cpu = buildData.cpu;
            if (buildData.gpu) currentBuild.gpu = buildData.gpu;
            if (buildData.ram) currentBuild.ram = buildData.ram;
            if (buildData.storage) currentBuild.storage = buildData.storage;
        } catch (e) {
            console.log('Error loading saved build:', e);
        }
    }
});

