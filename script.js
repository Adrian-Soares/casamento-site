// ============================================
// � Controle de Música com Fade In Suave
// ============================================


// Configuração de fade in
const FADE_IN_DURATION = 3000; // 3 segundos
const FADE_OUT_DURATION = 1000; // 1 segundo
const TARGET_VOLUME = 0.3; // 30% de volume (suave)

let isFadingIn = false;
let isFadingOut = false;

let backgroundMusic;
let musicToggle;

// Inicializar quando o DOM estiver pronto
function initMusic() {
  backgroundMusic = document.getElementById("background-music");
  musicToggle = document.getElementById("music-toggle");

  if (!backgroundMusic || !musicToggle) {
    console.log("Elementos de música não encontrados");
    return;
  }

  // Iniciar autoplay imediatamente
  setTimeout(() => {
    fadeInAudio();
  }, 800);

  // Adicionar event listeners
  musicToggle.addEventListener("click", toggleMusic);
  backgroundMusic.addEventListener("play", () => {
    musicToggle.classList.add("playing");
    musicToggle.setAttribute("aria-label", "Pausar música");
  });
  backgroundMusic.addEventListener("pause", () => {
    musicToggle.classList.remove("playing");
    musicToggle.setAttribute("aria-label", "Reproduzir música");
  });
}

function toggleMusic() {
  if (backgroundMusic.paused) {
    fadeInAudio();
  } else {
    fadeOutAudio();
  }
}
function fadeInAudio() {
  if (isFadingIn || isFadingOut) return;

  isFadingIn = true;
  backgroundMusic.volume = 0;
  backgroundMusic.play().catch(() => {
    console.log("Autoplay bloqueado pelo navegador. Usuário pode clicar no botão para reproduzir.");
  });

  const startTime = Date.now();
  const startVolume = 0;

  function updateVolume() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / FADE_IN_DURATION, 1);

    // Easing suave (ease-in-out)
    const easeProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
    backgroundMusic.volume = startVolume + (TARGET_VOLUME - startVolume) * easeProgress;

    if (progress < 1) {
      requestAnimationFrame(updateVolume);
    } else {
      backgroundMusic.volume = TARGET_VOLUME;
      isFadingIn = false;
    }
  }

  requestAnimationFrame(updateVolume);
}

function fadeOutAudio() {
  if (isFadingIn || isFadingOut) return;

  isFadingOut = true;
  const startTime = Date.now();
  const startVolume = backgroundMusic.volume;

  function updateVolume() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / FADE_OUT_DURATION, 1);

    // Easing suave
    const easeProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
    backgroundMusic.volume = startVolume * (1 - easeProgress);

    if (progress < 1) {
      requestAnimationFrame(updateVolume);
    } else {
      backgroundMusic.volume = 0;
      backgroundMusic.pause();
      isFadingOut = false;
    }
  }

  requestAnimationFrame(updateVolume);
}

// Event listener do botão de música
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMusic);
} else {
  initMusic();
}

// Sincronizar estado do botão com o áudio (já feito em initMusic)

// ============================================
// �🎬 Animação Cinematográfica de Entrada
// ============================================
// Dispara a animação de entrada elegante (zoom + textos em sequência)
// Usa sessionStorage para garantir que rode apenas na primeira carga
if (!sessionStorage.getItem("animationPlayed")) {
  // Aguarda o DOM estar pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", triggerEntryAnimation);
  } else {
    // DOM já está pronto (documento já foi parseado)
    triggerEntryAnimation();
  }
  
  // Marca que a animação foi reproduzida
  sessionStorage.setItem("animationPlayed", "true");
}

function triggerEntryAnimation() {
  // Aguarda um pequeno delay para garantir que o navegador esteja pronto
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
}

// ============================================

const pixData = {
  key: "11506612407",
  owner: "N",
  city: "C",
  txid: "Adrian",
};

const modal = document.querySelector("[data-modal]");
const modalQr = document.querySelector(".modal-qr");
const pixPayloadElement = document.querySelector("[data-pix-payload]");
const selectedGift = document.querySelector("[data-selected-gift]");
const toast = document.querySelector("[data-toast]");
const countdown = document.querySelector("[data-countdown]");
const contributionButton = document.querySelector("[data-register-contribution]");
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

let toastTimer;
let activeGiftCard = null;
let activeContribution = 0;
let activePixPayload = pixData.key;

document.querySelectorAll("[data-pix-key]").forEach((element) => {
  element.textContent = pixData.key;
});

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-gift]");
    const giftName = card?.dataset.gift || "presente";
    const amountInput = card.querySelector("[data-card-amount]");
    const requestedContribution = Number(amountInput.value);
    const remaining = getGiftRemaining(card);

    if (!Number.isFinite(requestedContribution) || requestedContribution <= 0) {
      showToast("Informe o valor no card.");
      amountInput.focus();
      return;
    }

    if (remaining <= 0) {
      showToast("Essa meta ja foi completa.");
      return;
    }

    activeGiftCard = card;
    activeContribution = Math.min(requestedContribution, remaining);
    activePixPayload = createPixPayload({
      amount: activeContribution,
      description: giftName,
    });

    selectedGift.textContent = `Você escolheu contribuir com ${formatCurrency(activeContribution)} para "${giftName}". Escaneie o QR Code ou copie o Pix copia e cola.`;
    pixPayloadElement.textContent = activePixPayload;
    modalQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(activePixPayload)}`;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

document.querySelectorAll("[data-copy-pix]").forEach((button) => {
  button.addEventListener("click", async () => {
    const isModalPix = modal.classList.contains("is-open");
    const textToCopy = isModalPix ? activePixPayload : pixData.key;

    try {
      await navigator.clipboard.writeText(textToCopy);
      showToast(isModalPix ? "Pix copiado!" : "Chave Pix copiada!");
    } catch {
      fallbackCopyPix(textToCopy, isModalPix);
    }
  });
});

contributionButton.addEventListener("click", registerGiftContribution);

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeGiftCard = null;
  activeContribution = 0;
  activePixPayload = pixData.key;
}

function fallbackCopyPix(textToCopy, isModalPix) {
  const input = document.createElement("input");
  input.value = textToCopy;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
  showToast(isModalPix ? "Pix copiado!" : "Chave Pix copiada!");
}

function renderGiftProgress() {
  document.querySelectorAll("[data-gift]").forEach((card) => {
    const giftId = getGiftId(card);
    const goal = Number(card.dataset.goal) || 0;
    const initialReceived = Number(card.dataset.received) || 0;
    const savedReceived = getStoredReceived(giftId);
    const received = savedReceived ?? initialReceived;
    const remaining = Math.max(goal - received, 0);
    const progress = goal > 0 ? Math.min((received / goal) * 100, 100) : 0;
    const amountInput = card.querySelector("[data-card-amount]");

    card.dataset.currentReceived = String(received);
    card.querySelector("[data-goal-label]").textContent = formatCurrency(goal);
    card.querySelector("[data-remaining-label]").textContent =
      remaining > 0 ? formatCurrency(remaining) : "Meta completa";
    card.querySelector("[data-progress-fill]").style.width = `${progress}%`;

    if (amountInput) {
      amountInput.max = String(remaining);
      amountInput.placeholder = remaining > 0 ? String(Math.min(150, remaining)) : "Completa";
      amountInput.disabled = remaining <= 0;
    }
  });
}

function registerGiftContribution() {
  if (!activeGiftCard || activeContribution <= 0) return;

  const giftId = getGiftId(activeGiftCard);
  const goal = Number(activeGiftCard.dataset.goal) || 0;
  const currentReceived = Number(activeGiftCard.dataset.currentReceived) || 0;
  const appliedContribution = Math.min(
    activeContribution,
    Math.max(goal - currentReceived, 0),
  );
  const nextReceived = Math.min(currentReceived + appliedContribution, goal);

  localStorage.setItem(giftId, String(nextReceived));
  activeGiftCard.querySelector("[data-card-amount]").value = "";
  renderGiftProgress();

  const remaining = getGiftRemaining(activeGiftCard);
  selectedGift.textContent =
    remaining > 0
      ? `Obrigado! Registramos ${formatCurrency(appliedContribution)} nesta meta. Agora faltam ${formatCurrency(remaining)}.`
      : "Obrigado! Essa meta foi completada por aqui com muito carinho.";
  showToast("Meta atualizada!");
}

function getGiftRemaining(card) {
  if (!card) return 0;

  const goal = Number(card.dataset.goal) || 0;
  const storedReceived = getStoredReceived(getGiftId(card));
  const currentReceived = Number(card.dataset.currentReceived);
  const initialReceived = Number(card.dataset.received) || 0;
  const received = Number.isFinite(currentReceived)
    ? currentReceived
    : storedReceived ?? initialReceived;

  return Math.max(goal - received, 0);
}

function getGiftId(card) {
  return `gift-progress-v2-${card.dataset.gift}`;
}

function getStoredReceived(giftId) {
  const storedValue = localStorage.getItem(giftId);

  if (storedValue === null) return null;

  const received = Number(storedValue);
  return Number.isFinite(received) ? received : null;
}

function createPixPayload({ amount, description }) {
  const merchantAccount = emv("00", "BR.GOV.BCB.PIX") + emv("01", pixData.key);
  const transactionAmount = amount.toFixed(2);
  const txid = pixData.txid
    ? pixData.txid.slice(0, 25)
    : normalizeText(description).replace(/[^A-Z0-9]/g, "").slice(0, 20) || "***";
  const payloadWithoutCrc =
    emv("00", "01") +
    emv("26", merchantAccount) +
    emv("52", "0000") +
    emv("53", "986") +
    emv("54", transactionAmount) +
    emv("58", "BR") +
    emv("59", normalizeText(pixData.owner).slice(0, 25)) +
    emv("60", normalizeText(pixData.city).slice(0, 15)) +
    emv("62", emv("05", txid)) +
    "6304";

  return `${payloadWithoutCrc}${crc16(payloadWithoutCrc)}`;
}

function emv(id, value) {
  return `${id}${String(value.length).padStart(2, "0")}${value}`;
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9 .-]/g, "")
    .trim();
}

function crc16(payload) {
  let crc = 0xffff;

  for (let index = 0; index < payload.length; index += 1) {
    crc ^= payload.charCodeAt(index) << 8;

    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function formatCurrency(value) {
  return currencyFormatter.format(value);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function updateCountdown() {
  if (!countdown) return;

  const targetDate = new Date(countdown.dataset.countdown);
  const now = new Date();
  const difference = Math.max(targetDate - now, 0);
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.querySelector("[data-days]").textContent = Math.floor(difference / day);
  document.querySelector("[data-hours]").textContent = Math.floor(
    (difference % day) / hour,
  );
  document.querySelector("[data-minutes]").textContent = Math.floor(
    (difference % hour) / minute,
  );
  document.querySelector("[data-seconds]").textContent = Math.floor(
    (difference % minute) / 1000,
  );
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

renderGiftProgress();
updateCountdown();
setInterval(updateCountdown, 1000);
