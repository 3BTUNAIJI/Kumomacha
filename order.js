
function increaseQty() {
    let qtyInput = document.getElementById("quantity");
    qtyInput.value = parseInt(qtyInput.value) + 1;
    updateWhatsAppLink();
}

function decreaseQty() {
    let qtyInput = document.getElementById("quantity");
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
        updateWhatsAppLink();
    }
}

function updateWhatsAppLink() {
    const quantity = document.getElementById("quantity").value;
    const message = `Hello! I would like to order ${quantity}kg of Kumomacha.`;
    const phone = "971561711000";
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    document.getElementById("whatsappLink").href = link;
}

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("open");
}

// Initialize WhatsApp link on load
document.addEventListener("DOMContentLoaded", updateWhatsAppLink);
