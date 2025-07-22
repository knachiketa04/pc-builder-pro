// PC Component Database
const componentData = {
    cpu: [
        {
            id: 'amd-7950x',
            name: 'AMD Ryzen 9 7950X',
            brand: 'AMD',
            price: 699,
            specs: {
                cores: 16,
                threads: 32,
                baseClock: '4.5 GHz',
                boostClock: '5.7 GHz',
                tdp: '170W',
                socket: 'AM5'
            },
            useCase: ['AI/ML', 'Video Editing', 'Gaming'],
            performance: 95
        },
        {
            id: 'intel-14700k',
            name: 'Intel Core i7-14700K',
            brand: 'Intel',
            price: 409,
            specs: {
                cores: 20,
                threads: 28,
                baseClock: '3.4 GHz',
                boostClock: '5.6 GHz',
                tdp: '125W',
                socket: 'LGA1700'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 88
        },
        {
            id: 'amd-7900x',
            name: 'AMD Ryzen 9 7900X',
            brand: 'AMD',
            price: 549,
            specs: {
                cores: 12,
                threads: 24,
                baseClock: '4.7 GHz',
                boostClock: '5.6 GHz',
                tdp: '170W',
                socket: 'AM5'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 90
        },
        {
            id: 'intel-13900k',
            name: 'Intel Core i9-13900K',
            brand: 'Intel',
            price: 589,
            specs: {
                cores: 24,
                threads: 32,
                baseClock: '3.0 GHz',
                boostClock: '5.8 GHz',
                tdp: '125W',
                socket: 'LGA1700'
            },
            useCase: ['AI/ML', 'Gaming', 'Video Editing'],
            performance: 92
        }
    ],
    gpu: [
        {
            id: 'rtx-4090',
            name: 'NVIDIA RTX 4090',
            brand: 'NVIDIA',
            price: 1599,
            specs: {
                vram: '24GB GDDR6X',
                baseClock: '2230 MHz',
                boostClock: '2520 MHz',
                memoryBus: '384-bit',
                tdp: '450W'
            },
            useCase: ['AI/ML', 'Gaming', 'Video Editing'],
            performance: 100
        },
        {
            id: 'rtx-4080-super',
            name: 'NVIDIA RTX 4080 Super',
            brand: 'NVIDIA',
            price: 999,
            specs: {
                vram: '16GB GDDR6X',
                baseClock: '2295 MHz',
                boostClock: '2550 MHz',
                memoryBus: '256-bit',
                tdp: '320W'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 85
        },
        {
            id: 'rtx-4070-ti-super',
            name: 'NVIDIA RTX 4070 Ti Super',
            brand: 'NVIDIA',
            price: 799,
            specs: {
                vram: '16GB GDDR6X',
                baseClock: '2340 MHz',
                boostClock: '2610 MHz',
                memoryBus: '256-bit',
                tdp: '285W'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 78
        },
        {
            id: 'rx-7900-xtx',
            name: 'AMD Radeon RX 7900 XTX',
            brand: 'AMD',
            price: 899,
            specs: {
                vram: '24GB GDDR6',
                baseClock: '1855 MHz',
                boostClock: '2500 MHz',
                memoryBus: '384-bit',
                tdp: '355W'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 82
        }
    ],
    ram: [
        {
            id: 'corsair-64gb-ddr5',
            name: 'Corsair Vengeance 64GB DDR5-5600',
            brand: 'Corsair',
            price: 299,
            specs: {
                capacity: '64GB',
                speed: 'DDR5-5600',
                modules: '2x32GB',
                latency: 'CL36',
                voltage: '1.25V'
            },
            useCase: ['AI/ML', 'Video Editing'],
            performance: 90
        },
        {
            id: 'gskill-32gb-ddr5',
            name: 'G.Skill Trident Z5 32GB DDR5-6000',
            brand: 'G.Skill',
            price: 179,
            specs: {
                capacity: '32GB',
                speed: 'DDR5-6000',
                modules: '2x16GB',
                latency: 'CL30',
                voltage: '1.35V'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 95
        },
        {
            id: 'corsair-32gb-ddr5',
            name: 'Corsair Dominator 32GB DDR5-5200',
            brand: 'Corsair',
            price: 199,
            specs: {
                capacity: '32GB',
                speed: 'DDR5-5200',
                modules: '2x16GB',
                latency: 'CL40',
                voltage: '1.25V'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 85
        },
        {
            id: 'kingston-128gb-ddr5',
            name: 'Kingston Fury Beast 128GB DDR5-4800',
            brand: 'Kingston',
            price: 599,
            specs: {
                capacity: '128GB',
                speed: 'DDR5-4800',
                modules: '4x32GB',
                latency: 'CL40',
                voltage: '1.1V'
            },
            useCase: ['AI/ML', 'Video Editing'],
            performance: 80
        }
    ],
    storage: [
        {
            id: 'samsung-2tb-980pro',
            name: 'Samsung 980 PRO 2TB NVMe SSD',
            brand: 'Samsung',
            price: 199,
            specs: {
                capacity: '2TB',
                interface: 'PCIe 4.0 x4',
                readSpeed: '7,000 MB/s',
                writeSpeed: '6,900 MB/s',
                formFactor: 'M.2 2280'
            },
            useCase: ['AI/ML', 'Gaming', 'Video Editing'],
            performance: 95
        },
        {
            id: 'wd-1tb-sn850x',
            name: 'WD Black SN850X 1TB NVMe SSD',
            brand: 'Western Digital',
            price: 99,
            specs: {
                capacity: '1TB',
                interface: 'PCIe 4.0 x4',
                readSpeed: '7,300 MB/s',
                writeSpeed: '6,300 MB/s',
                formFactor: 'M.2 2280'
            },
            useCase: ['Gaming', 'Video Editing'],
            performance: 92
        },
        {
            id: 'crucial-4tb-p3plus',
            name: 'Crucial P3 Plus 4TB NVMe SSD',
            brand: 'Crucial',
            price: 299,
            specs: {
                capacity: '4TB',
                interface: 'PCIe 4.0 x4',
                readSpeed: '5,000 MB/s',
                writeSpeed: '4,200 MB/s',
                formFactor: 'M.2 2280'
            },
            useCase: ['Video Editing', 'AI/ML'],
            performance: 85
        },
        {
            id: 'seagate-8tb-hdd',
            name: 'Seagate BarraCuda 8TB HDD',
            brand: 'Seagate',
            price: 149,
            specs: {
                capacity: '8TB',
                interface: 'SATA 6Gb/s',
                readSpeed: '190 MB/s',
                writeSpeed: '190 MB/s',
                formFactor: '3.5" HDD'
            },
            useCase: ['Video Editing', 'Storage'],
            performance: 60
        }
    ]
};

// Pre-built configurations
const prebuiltConfigs = {
    llm: {
        name: 'Optimal LLM Build',
        cpu: 'amd-7950x',
        gpu: 'rtx-4090',
        ram: 'corsair-64gb-ddr5',
        storage: 'samsung-2tb-980pro',
        totalPrice: 4299,
        description: 'Optimized for running Large Language Models locally'
    },
    gaming: {
        name: 'Ultimate Gaming Build',
        cpu: 'intel-14700k',
        gpu: 'rtx-4080-super',
        ram: 'gskill-32gb-ddr5',
        storage: 'wd-1tb-sn850x',
        totalPrice: 2899,
        description: 'High-end gaming with 4K performance'
    },
    video: {
        name: 'Video Editing Build',
        cpu: 'amd-7900x',
        gpu: 'rtx-4070-ti-super',
        ram: 'corsair-32gb-ddr5',
        storage: 'crucial-4tb-p3plus',
        totalPrice: 3199,
        description: 'Professional video editing and rendering'
    }
};

