// DOM Elements
const backBtn = document.getElementById('back-btn');
const settingItems = document.querySelectorAll('.setting-item');

// Back button navigation
if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.location.href = 'perfil.html';
    });
}

// Settings data
const settingsInfo = {
    notificacoes: 'Notificações',
    sons: 'Sons e vibrações',
    jogos: 'Preferência de Jogos',
    privacidade: 'Privacidade',
    ajuda: 'Central de ajuda',
    termos: 'Termos e políticas',
    feedbacks: 'Feedbacks',
    email: 'Alterar e-mail',
    senha: 'Alterar senha',
    tradelink: 'Trade Link'
};

// Setting items click handlers
settingItems.forEach((item) => {
    item.addEventListener('click', () => {
        const settingKey = item.dataset.setting;
        const settingName = settingsInfo[settingKey];
        
        console.log(`Configuração selecionada: ${settingName}`);
        
        // Show notification
        showNotification(`${settingName} - Em desenvolvimento`);
        
        // Future: Navigate to specific setting page
        // window.location.href = `configuracao-${settingKey}.html`;
    });

    // Add hover effect sound (optional)
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(4px)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// Show Notification Toast
function showNotification(message) {
    console.log(message);
    
    // Create toast notification
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background-color: #10355b;
        color: white;
        padding: 16px 24px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-family: 'Poppins', 'Arial', sans-serif;
        max-width: 90%;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 2000);
}

// Add CSS animations for toast and hover effects
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .setting-item {
        transition: transform 0.2s ease, background-color 0.2s ease;
    }
`;
document.head.appendChild(style);
