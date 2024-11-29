


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
            selectedSection.style.display = 'block'; // Exibe a seção
        }
    
        if (sectionId === 'home') {
            summarySection.classList.add('active'); // Exibe a seção summary
            summarySection.style.display = 'block'; // Exibe o summary
        } else {
            summarySection.classList.remove('active'); // Oculta a seção summary
            summarySection.style.display = 'none'; // Oculta o summary
        }
    }
    
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
            selectedSection.style.display = 'block'; // Exibe a seção
        }
    
        // Exibe ou oculta a seção summary
        if (sectionId === 'home') {
            summarySection.classList.add('active'); // Exibe a seção summary
            summarySection.style.display = 'block'; // Exibe o summary
        } else {
            summarySection.classList.remove('active'); // Oculta a seção summary
            summarySection.style.display = 'none'; // Oculta o summary
        }
    
        // Exibe ou oculta a seção valores
        const valoresSection = document.querySelector('.valores');
        if (valoresSection) {
            if (sectionId === 'quem-somos') {
                valoresSection.classList.add('active'); // Exibe a seção valores
                valoresSection.style.display = 'block'; // Exibe a seção
            } else {
                valoresSection.classList.remove('active'); // Oculta a seção valores
                valoresSection.style.display = 'none'; // Oculta a seção
            }
        }
    }
    
    

    // Adiciona evento de clique aos links do menu
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            const sectionId = link.getAttribute('data-section'); // Obtém o ID da seção a ser exibida
            showSection(sectionId); // Chama a função para exibir a seção
        });
    });
});


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
            selectedSection.style.display = 'block'; // Exibe a seção
        }
    
        if (sectionId === 'home') {
            summarySection.classList.add('active'); // Exibe a seção summary
            summarySection.style.display = 'block'; // Exibe o summary
        } else {
            summarySection.classList.remove('active'); // Oculta a seção summary
            summarySection.style.display = 'none'; // Oculta o summary
        }
    }
    
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
            selectedSection.style.display = 'block'; // Exibe a seção
        }
    
        // Exibe ou oculta a seção summary
        if (sectionId === 'home') {
            summarySection.classList.add('active'); // Exibe a seção summary
            summarySection.style.display = 'block'; // Exibe o summary
        } else {
            summarySection.classList.remove('active'); // Oculta a seção summary
            summarySection.style.display = 'none'; // Oculta o summary
        }
    
        // Exibe ou oculta a seção valores
        const valoresSection = document.querySelector('.valores');
        if (valoresSection) {
            if (sectionId === 'quem-somos') {
                valoresSection.classList.add('active'); // Exibe a seção valores
                valoresSection.style.display = 'block'; // Exibe a seção
            } else {
                valoresSection.classList.remove('active'); // Oculta a seção valores
                valoresSection.style.display = 'none'; // Oculta a seção
            }
        }
    }
    
    

    // Adiciona evento de clique aos links do menu
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            const sectionId = link.getAttribute('data-section'); // Obtém o ID da seção a ser exibida
            showSection(sectionId); // Chama a função para exibir a seção
        });
    });
});

