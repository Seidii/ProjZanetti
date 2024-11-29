


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a'); // Seleciona todos os links do menu
    const sections = document.querySelectorAll('.section'); // Seleciona todas as seções
    const summarySection = document.querySelector('.summary'); // Seleciona a seção summary

    function showSection(sectionId) {
        // Oculta todas as seções
        sections.forEach(section => {
            section.classList.remove('active'); // Remove a classe 'active'
            section.style.display = 'none'; // Oculta a seção
        });
    
        // Exibe a seção correspondente
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
            selectedSection.style.display = 'block'; 
        }
    
        if (sectionId === 'home') {
            summarySection.classList.add('active'); 
            summarySection.style.display = 'block'; 
        } else {
            summarySection.classList.remove('active'); 
            summarySection.style.display = 'none'; 
        }
    }
    
    function showSection(sectionId) {
        
        sections.forEach(section => {
            section.classList.remove('active'); 
            section.style.display = 'none'; 
        });
    
        // Exibe a seção correspondente
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
            selectedSection.style.display = 'block';
        }
    
        if (sectionId === 'home') {
            summarySection.classList.add('active'); 
            summarySection.style.display = 'block'; 
        } else {
            summarySection.classList.remove('active'); 
            summarySection.style.display = 'none';
        }
    
        
        const valoresSection = document.querySelector('.valores');
        if (valoresSection) {
            if (sectionId === 'quem-somos') {
                valoresSection.classList.add('active'); 
                valoresSection.style.display = 'block';
            } else {
                valoresSection.classList.remove('active'); 
                valoresSection.style.display = 'none'; 
            }
        }
    }
    
    

    // Adiciona evento de clique aos links do menu
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const sectionId = link.getAttribute('data-section'); 
            showSection(sectionId); 
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a'); 
    const sections = document.querySelectorAll('.section'); 
    const summarySection = document.querySelector('.summary'); 

    function showSection(sectionId) {
        // Oculta todas as seções
        sections.forEach(section => {
            section.classList.remove('active'); 
            section.style.display = 'none'; // Oculta a seção
        });
    
        // Exibe a seção correspondente
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
            selectedSection.style.display = 'block'; 
        }
    
        if (sectionId === 'home') {
            summarySection.classList.add('active'); 
            summarySection.style.display = 'block'; 
        } else {
            summarySection.classList.remove('active'); 
            summarySection.style.display = 'none'; 
        }
    }
    
    function showSection(sectionId) {
        // Oculta todas as seções
        sections.forEach(section => {
            section.classList.remove('active'); 
            section.style.display = 'none'; 
        });
    
        // Exibe a seção correspondente
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
            selectedSection.style.display = 'block'; 
        }
    
        // Exibe ou oculta a seção summary
        if (sectionId === 'home') {
            summarySection.classList.add('active'); 
            summarySection.style.display = 'block'; 
        } else {
            summarySection.classList.remove('active'); 
            summarySection.style.display = 'none'; 
        }
    
        // Exibe ou oculta a seção valores
        const valoresSection = document.querySelector('.valores');
        if (valoresSection) {
            if (sectionId === 'quem-somos') {
                valoresSection.classList.add('active'); 
                valoresSection.style.display = 'block';
            } else {
                valoresSection.classList.remove('active'); 
                valoresSection.style.display = 'none'; o
            }
        }
    }
    
    

    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const sectionId = link.getAttribute('data-section'); 
            showSection(sectionId); 
        });
    });
});

