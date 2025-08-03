document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-list a');
    const savedCounts = JSON.parse(localStorage.getItem('linkCounts')) || {};

    // Função para atualizar o texto do contador na nova div
    const updateCounterDisplay = (linkId, count) => {
        const counterElement = document.getElementById(`count-${linkId}`);
        if (counterElement) {
            counterElement.textContent = count;
        }
    };

    links.forEach(link => {
        const linkId = link.getAttribute('id');
        
        // Carrega e exibe o valor inicial do contador
        const initialCount = savedCounts[linkId] || 0;
        updateCounterDisplay(linkId, initialCount);

        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            // Pega o valor atual, incrementa e atualiza o texto
            let count = savedCounts[linkId] || 0;
            count++;
            
            // Salva o novo valor no objeto e no localStorage
            savedCounts[linkId] = count;
            localStorage.setItem('linkCounts', JSON.stringify(savedCounts));
            
            // Atualiza o contador na nova div
            updateCounterDisplay(linkId, count);
        });
    });
});