// DOM Elements
const backBtn = document.getElementById('back-btn');
const menuOptions = document.querySelectorAll('.menu-option');

// Back button navigation
if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.location.href = 'perfil.html';
    });
}

// Menu options click handlers
menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        const action = option.dataset.action;
        
        const actionMessages = {
            'compras': 'Minhas compras',
            'vendas': 'Minhas vendas',
            'historico': 'Histórico de login',
            'trocar': 'Trocar conta',
            'excluir': 'Excluir conta',
            'sair': 'Sair'
        };
        
        const message = actionMessages[action] || 'Opção';
        console.log(`Clicou em: ${message}`);
        
        // Special handling for logout
        if (action === 'sair') {
            if (confirm('Deseja realmente sair da sua conta?')) {
                showNotification('Saindo...');
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 1500);
            }
            return;
        }
        
        // Special handling for delete account
        if (action === 'excluir') {
            if (confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
                showNotification('Solicitação de exclusão enviada');
            }
            return;
        }
        
        // Show notification for other options
        showNotification(`${message} - Em desenvolvimento`);
    });
});

// Show Notification
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

// Add CSS animations for toast
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
`;
document.head.appendChild(style);
