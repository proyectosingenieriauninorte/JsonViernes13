function generateInteger() {
    return Math.floor(Math.random() * 100);
}

function generateDouble() {
    return (Math.random() * 100).toFixed(2);
}

function generateFullName() {
    const names = [
        "Alice Smith", "Bob Johnson", "Carol Davis",
        "David Martinez", "Emma Garcia", "Frank Brown",
        "Grace Lee", "Henry Wilson", "Isabel Miller",
        "Jack Taylor", "Karen Anderson", "Luis Hernandez",
        "Mia Robinson", "Noah Harris", "Olivia Clark",
        "Peter Lewis", "Quinn Walker", "Rachel Young",
        "Steven King", "Tina Wright", "Uma Adams",
        "Victor Nelson", "Wendy Hill", "Xavier Moore",
        "Yolanda Scott", "Zachary Green"
    ];
    return names[Math.floor(Math.random() * names.length)];
}

function generateIP() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

function generateOccupation() {
    const occupations = [
        "Ingeniero", "Doctor", "Profesor",
        "Arquitecto", "Enfermero", "Dentista",
        "Carpintero", "Chef", "Disenador Grafico",
        "Programador", "Mecanico", "Electricista",
        "Contador", "Abogado", "Periodista",
        "Farmaceutico", "Veterinario", "Cientifico",
        "Psicologo", "Escritor", "Artista",
        "Actor", "Musico", "Fotografo",
        "Director de Cine", "Biologo", "Astronomo"
    ];
    return occupations[Math.floor(Math.random() * occupations.length)];
}

function generateAddress() {
    const addresses = [
        "123 Main St", "456 Elm St", "789 Oak St",
        "101 Maple Ave", "202 Pine Ln", "303 Birch Blvd",
        "404 Cedar Rd", "505 Aspen Ct", "606 Walnut Way",
        "707 Cherry Dr", "808 Magnolia Path", "909 Redwood Circle",
        "1010 Spruce Terrace", "1111 Hawthorn Heights", "1212 Sycamore Square",
        "1313 Willow Walk", "1414 Juniper Junction", "1515 Poplar Place",
        "1616 Alder Alley", "1717 Sequoia St", "1818 Fir Fork",
        "1919 Larch Lane", "2020 Dogwood Drive", "2121 Hemlock Hill",
        "2222 Yew Yard", "2323 Cypress Crescent", "2424 Olive Outlook"
    ];
    
    
    return addresses[Math.floor(Math.random() * addresses.length)];
}

function generateRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();
    const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
    return randomDate.toISOString().split('T')[0];
}

function generateDate() {
    // Define el rango de fechas, por ejemplo, entre 2000 y 2023
    const start = new Date(2000, 0, 1); // 1 de enero de 2000
    const end = new Date(2023, 11, 31); // 31 de diciembre de 2023
    return generateRandomDate(start, end);
}

function generateFirstName() {
    const firstNames = [
        "Alice", "Bob", "Carol", "David", "Emma", "Frank", "Grace", "Henry",
        "Isabel", "Jack", "Karen", "Luis", "Mia", "Noah", "Olivia", "Peter",
        "Quinn", "Rachel", "Steven", "Tina", "Uma", "Victor", "Wendy", "Xavier",
        "Yolanda", "Zachary", "Amelia", "Brian", "Claire", "Daniel",
        "Evelyn", "Felix", "Gloria", "Hugo", "Ivy", "Jason", "Katie", "Leon",
        "Monica", "Nathan", "Oscar", "Paula", "Ray", "Sara", "Tim", "Ursula",
        "Vincent", "Wanda", "Xenia", "Yuri", "Zoe"
    ];
    
    return firstNames[Math.floor(Math.random() * firstNames.length)];
}

function generateLastName() {
    const lastNames = [
        "Smith", "Johnson", "Davis", "Martinez", "Garcia", "Brown", "Lee", "Wilson",
        "Taylor", "Anderson", "Hernandez", "Robinson", "Harris", "Clark", "Lewis", "Walker",
        "Young", "King", "Wright", "Adams", "Nelson", "Hill", "Moore", "Scott",
        "Green", "Baker", "Mitchell", "Carter", "Roberts", "Turner", "Phillips", "Campbell",
        "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers",
        "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper"
    ];
    
    return lastNames[Math.floor(Math.random() * lastNames.length)];
}

function generatePhoneNumber() {
    const prefix = "+57"; // Prefijo para Colombia
    const number = Math.floor(3000000000 + Math.random() * 999999999).toString();
    return prefix + number;
}

function generateCompanyName() {
    const companyNames = [
        "TechCorp", "Innovate Ltd", "FutureSolutions", "EcoSystems", "BrightMind LLC",
        "QuantumWorks", "SkyNet Solutions", "NextGen Innovators", "PioneerTech", "AlphaBuilds",
        "BlueOcean Enterprises", "GreenField Technologies", "Sunrise Systems", "CrestWave LLC",
        "StarEdge Corporation", "Moonlight Industries", "RiverFlow Co.", "MountainPeak Inc.",
        "UrbanVista Ltd", "SeaBreeze Technologies", "ForestTrail Networks", "SkyHigh Aviation",
        "DeepSea Fisheries", "GoldenHorizon Ventures", "SilverLining Co.", "RainbowDesigns LLC",
        "CloudNine Innovations", "Starlight Media", "Sunset Dynamics", "RapidStream Solutions",
        "OceanView Tech", "Windmill Energy", "Firefly Electronics", "Thunderbolt Security",
        "IcyPeak Systems", "SolarFlare Energy", "MysticValley Water", "EmeraldGreen AgriTech"
    ];
    return companyNames[Math.floor(Math.random() * companyNames.length)];
}

function generateCreditCard() {
    let cardNumber = "";
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10).toString();
    }
    return cardNumber;
}

function generateCVV() {
    return Math.floor(100 + Math.random() * 900).toString(); // CVV de tres dígitos
}

function generateIMEI() {
    let imei = "";
    for (let i = 0; i < 15; i++) {
        imei += Math.floor(Math.random() * 10).toString();
    }
    return imei;
}



