/**
 * БЕЛГРАНИТ Monument Calculator
 * Catalog-based system with cart
 */

// ═══ PRICING DATA ═══════════════════════════════════════════════════════════

// Karelia Stele prices (USD)
const KARELIA_STELE = [
  { name: 'Стела 60х40х5', size: '60х40х5', unit: 'шт', price: 57 },
  { name: 'Стела 80х40х5', size: '80х40х5', unit: 'шт', price: 77 },
  { name: 'Стела 100х50х5', size: '100х50х5', unit: 'шт', price: 120 },
  { name: 'Стела 100х60х5', size: '100х60х5', unit: 'шт', price: 144 },
  { name: 'Стела 120х60х5', size: '120х60х5', unit: 'шт', price: 173 },
  { name: 'Стела 100х50х8', size: '100х50х8', unit: 'шт', price: 150 },
  { name: 'Стела 120х60х8', size: '120х60х8', unit: 'шт', price: 216 },
];

// Karelia Gravestone prices (USD)
const KARELIA_GRAVESTONE = [
  { name: 'Надгробка 100х50х3', size: '100х50х3', unit: 'шт', price: 90 },
  { name: 'Надгробка 120х60х3', size: '120х60х3', unit: 'шт', price: 128 },
  { name: 'Надгробка 50х30х3', size: '50х30х3', unit: 'шт', price: 27 },
  { name: 'Надгробка 60х30х3', size: '60х30х3', unit: 'шт', price: 32 },
];

// Karelia Pedestal prices (USD)
const KARELIA_PEDESTAL = [
  { name: 'Подставка 40х15х15', size: '40х15х15', unit: 'шт', price: 40 },
  { name: 'Подставка 40х20х15', size: '40х20х15', unit: 'шт', price: 54 },
  { name: 'Подставка 50х20х15', size: '50х20х15', unit: 'шт', price: 65 },
  { name: 'Подставка 60х20х15', size: '60х20х15', unit: 'шт', price: 75 },
  { name: 'Подставка 70х20х15', size: '70х20х15', unit: 'шт', price: 85 },
  { name: 'Подставка 80х20х15', size: '80х20х15', unit: 'шт', price: 100 },
  { name: 'Подставка 90х20х15', size: '90х20х15', unit: 'шт', price: 120 },
  { name: 'Подставка 100х20х15', size: '100х20х15', unit: 'шт', price: 127 },
  { name: 'Подставка 115х20х15', size: '115х20х15', unit: 'шт', price: 152 },
];

// Karelia Flowerbed prices (USD)
const KARELIA_FLOWERBED = [
  { name: 'Цветник 100х8х5', size: '100х8х5', unit: 'м.п.', price: 19 },
  { name: 'Цветник 100х10х5', size: '100х10х5', unit: 'м.п.', price: 23 },
  { name: 'Цветник 100х10х8', size: '100х10х8', unit: 'м.п.', price: 33 },
  { name: 'Цветник 120х8х5', size: '120х8х5', unit: 'шт', price: 23 },
  { name: 'Цветник 120х10х5', size: '120х10х5', unit: 'шт', price: 28 },
  { name: 'Цветник 120х10х8', size: '120х10х8', unit: 'шт', price: 39 },
];

// Karelia Posts (USD)
const KARELIA_POST = [
  { name: 'Столб 100х10х10', size: '100х10х10', unit: 'м.п.', price: 58 },
  { name: 'Столб 20х10х10 с фасками', size: '20х10х10', unit: 'шт', price: 17 },
  { name: 'Столб 25х10х10 с фасками', size: '25х10х10', unit: 'шт', price: 20 },
  { name: 'Столб 30х10х10 с фасками', size: '30х10х10', unit: 'шт', price: 24 },
  { name: 'Столб 40х10х10 с фасками', size: '40х10х10', unit: 'шт', price: 32 },
  { name: 'Пролет 100х8х5', size: '100х8х5', unit: 'м.п.', price: 23 },
  { name: 'Пролет 100х10х5', size: '100х10х5', unit: 'м.п.', price: 27 },
  { name: 'Пролет 100х10х8', size: '100х10х8', unit: 'м.п.', price: 37 },
  { name: 'Пролет 100х20х3', size: '100х20х3', unit: 'м.п.', price: 44 },
  { name: 'Пролет 100х15х3', size: '100х15х3', unit: 'м.п.', price: 34 },
];

// Artistic work prices (USD) - organized by subcategories
const ART_WORK = {
  stanok: [
    { name: 'Текст', unit: 'компл', price: 13, note: 'Эпитафия до 2-х строк входит в стоимость' },
    { name: 'Портрет', unit: 'шт', price: 17 },
    { name: 'Крест', unit: 'шт', price: 3 },
    { name: 'Цветы', unit: 'компл', price: 4 },
    { name: 'Пейзаж А4', unit: 'шт', price: 7 },
    { name: 'Пейзаж А4 с фото', unit: 'шт', price: 10 },
    { name: 'Четверостишие', unit: 'компл', price: 5 },
    { name: 'Портрет и текст на стеле 120см', unit: 'компл', price: 40 },
  ],
  peskostroy_standard: [
    { name: 'Текст', unit: 'компл', price: 27, note: 'Эпитафия до 2-х строк входит в стоимость' },
    { name: 'Портрет', unit: 'шт', price: 17 },
    { name: 'Крест', unit: 'шт', price: 5 },
    { name: 'Цветы', unit: 'компл', price: 8 },
    { name: 'Четверостишие', unit: 'компл', price: 11 },
    { name: 'Портрет и текст на стеле 120см', unit: 'компл', price: 60 },
  ],
  peskostroy_deep: [
    { name: 'Текст', unit: 'компл', price: 45, note: 'Эпитафия до 2-х строк входит в стоимость' },
    { name: 'Портрет', unit: 'шт', price: 17 },
    { name: 'Крест', unit: 'шт', price: 9 },
    { name: 'Цветы', unit: 'компл', price: 14 },
    { name: 'Четверостишие', unit: 'компл', price: 17 },
    { name: 'Портрет и текст на стеле 120см', unit: 'компл', price: 85 },
  ],
  additional: []
};

// Polishing prices (USD)
const POLISHING = [
  { name: 'Торец 3см', unit: 'м.п.', price: 4 },
  { name: 'Торец 5см', unit: 'м.п.', price: 7 },
  { name: 'Торец 8см', unit: 'м.п.', price: 11 },
  { name: 'Торец 10см', unit: 'м.п.', price: 14 },
  { name: 'Волна (резка)', unit: 'шт', price: 30 },
  { name: 'Веер средней сложности (без полировки)', unit: 'шт', price: 40 },
  { name: 'Веер средней сложности (с полировкой)', unit: 'шт', price: 50 },
  { name: 'Крест стандарт с полировкой', unit: 'шт', price: 67 },
  { name: 'Плита «волна» резка + полировка', unit: 'м.п.', price: 11.5 },
];

// Granite prices (USD per m²/m³/m.p.) - from table
const GRANITE_PRICES = {
  mansurovsky: { stele_5: 308, stele_8: 406, stele_10: 490, gravestone_3: 224, gravestone_5: 301, gravestone_8: 399, pedestal: 5070, flowerbed: 25, post: 75 },
  kapustinsky: { stele_5: 336, stele_8: 434, stele_10: 518, gravestone_3: 252, gravestone_5: 329, gravestone_8: 427, pedestal: 6200, flowerbed: 28, post: 82 },
  pokostovsky: { stele_5: 416, stele_8: 546, stele_10: 598, gravestone_3: 273, gravestone_5: 409, gravestone_8: 540, pedestal: 6500, flowerbed: 35, post: 98 },
  baltikgrin: { stele_5: 637, stele_8: 800, stele_10: 962, gravestone_3: 405, gravestone_5: 631, gravestone_8: 793, pedestal: 9300, flowerbed: 56, post: 123 },
  aurora: { stele_5: 747, stele_8: 1064, stele_10: 1267, gravestone_3: 507, gravestone_5: 742, gravestone_8: 1059, pedestal: 10600, flowerbed: 66, post: 130 },
  bluepearl: { stele_5: 897, stele_8: 1368, stele_10: 1600, gravestone_3: 811, gravestone_5: 892, gravestone_8: 1363, pedestal: 14300, flowerbed: 92, post: 143 },
  gabbro: { stele_5: 310, stele_8: 420, stele_10: 504, gravestone_3: 230, gravestone_5: 330, gravestone_8: 410, pedestal: 5300, flowerbed: 24, post: 67 },
};

// Granite display info with texture images
const GRANITE_INFO = {
  mansurovsky: { 
    name: 'Мансуровский / Амфиболит / Елизовский',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImFtZmliIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzFhMWExYSIvPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIyIiBmaWxsPSIjOGIzYTNhIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTIiIHI9IjEuNSIgZmlsbD0iIzhhOGE4YSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2FtZmliKSIvPjwvc3ZnPg=='
  },
  kapustinsky: { 
    name: 'Капустинский / Уральский серый',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImthcHVzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0iIzZiNmI2YiIvPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIxIiBmaWxsPSIjOGE4YThhIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI4IiByPSIxLjUiIGZpbGw9IiM1YTVhNWEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0idXJsKCNrYXB1cykiLz48L3N2Zz4='
  },
  pokostovsky: { 
    name: 'Мрамор «Коелга» / Лабрадорит / Покостовский',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBva29zIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzJjM2U1MCIvPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIyIiBmaWxsPSIjZDRhNTc0Ii8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxMiIgcj0iMSIgZmlsbD0iIzhhYmNkZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI3Bva29zKSIvPjwvc3ZnPg=='
  },
  baltikgrin: { 
    name: 'Балтик-грин / Бармораль ред / Куру грей',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImJhbHRpayIgeD0iMCIgeT0iMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9IiMyZDUwMTYiLz48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMSIgZmlsbD0iIzRhN2EyYSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2JhbHRpaykiLz48L3N2Zz4='
  },
  aurora: { 
    name: 'Аврора / Лезник / Висконт-Уайт',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImF1cm9yYSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNlOGRjYzgiLz48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMiIgZmlsbD0iI2M5YTk2MSIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTIiIHI9IjEiIGZpbGw9IiM4YjczNTUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0idXJsKCNhdXJvcmEpIi8+PC9zdmc+'
  },
  bluepearl: { 
    name: 'Блю перл',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImJsdWUiIHg9IjAiIHk9IjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3Qgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBmaWxsPSIjMWUzYTVmIi8+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IiM4YWJjZGUiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIwLjUiIGZpbGw9IiNmZmZmZmYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0idXJsKCNibHVlKSIvPjwvc3ZnPg=='
  },
  gabbro: { 
    name: 'Габбро-диабаз',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdhYmJybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiMwYTBhMGEiLz48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMC41IiBmaWxsPSIjM2EzYTNhIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9InVybCgjZ2FiYnJvKSIvPjwvc3ZnPg=='
  }
};

// Size-based price adjustments (from image requirements)
function applySizeAdjustment(basePrice, area, height) {
  let adjustment = 1;
  
  // Area adjustments
  if (area >= 0.7 && area < 0.9) {
    adjustment += 0.10; // +10%
  } else if (area >= 0.9) {
    adjustment += 0.20; // +20%
  }
  
  // Height adjustments
  if (height > 1.2 && height <= 1.4) {
    adjustment += 0.10; // +10%
  } else if (height > 1.4) {
    adjustment += 0.20; // +20%
  }
  
  return basePrice * adjustment;
}

// Forms data - В-1 to В-219 (single steles) and Г-1 to Г-66 (double steles)
// Real images from belgranit.by
const FORMS_V_IMAGES = {
  'В-7': 'https://i.imgur.com/monument-v7.jpg', // Пример - замените на реальный URL
};

const FORMS_V = Array.from({length: 219}, (_, i) => {
  const num = i + 1;
  const formId = `В-${num}`;
  return {
    id: formId,
    size: '100х50х5',
    price: 20 + (i * 0.5),
    // Используем реальное фото если есть, иначе placeholder
    image: FORMS_V_IMAGES[formId] || `https://via.placeholder.com/200x300/1a1a1a/c9a961?text=${formId}`
  };
});

const FORMS_G = Array.from({length: 66}, (_, i) => {
  const num = i + 1;
  const formId = `Г-${num}`;
  return {
    id: formId,
    size: '100х60х5',
    price: 25 + (i * 0.5),
    image: `https://via.placeholder.com/200x300/1a1a1a/c9a961?text=${formId}`
  };
});

// ═══ STATE ═══════════════════════════════════════════════════════════════════

let state = {
  currentMode: 'wholesale',
  currentTab: 'catalog',
  currentCategory: 'stele',
  currentArtSubcategory: 'stanok',
  exchangeRate: 3,
  cart: [],
  searchQuery: '',
  discount: 0,        // % скидка (отрицательная наценка)
  markup: 0,          // % наценка
  darkMode: true,     // тема
  savedEstimates: [], // история смет
};

// ═══ UTILITY FUNCTIONS ═══════════════════════════════════════════════════════

function getRate() {
  return parseFloat(document.getElementById('rate').value) || 3;
}

function usdToBYR(usd) {
  return usd * getRate();
}

function fmt(n) {
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n);
}

function fmtUSD(n) {
  return '$' + fmt(n);
}

function fmtBYR(n) {
  return fmt(n) + ' руб.';
}

function saveState() {
  try {
    localStorage.setItem('belgranit_cart', JSON.stringify(state.cart));
    localStorage.setItem('belgranit_markup', state.markup);
    localStorage.setItem('belgranit_discount', state.discount);
    localStorage.setItem('belgranit_theme', state.darkMode ? 'dark' : 'light');
    localStorage.setItem('belgranit_estimates', JSON.stringify(state.savedEstimates));
    localStorage.setItem('belgranit_mode', state.currentMode);
    localStorage.setItem('belgranit_tab', state.currentTab);
  } catch (e) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem('belgranit_cart');
    if (saved) state.cart = JSON.parse(saved);
    state.markup = parseFloat(localStorage.getItem('belgranit_markup')) || 0;
    state.discount = parseFloat(localStorage.getItem('belgranit_discount')) || 0;
    state.darkMode = localStorage.getItem('belgranit_theme') !== 'light';
    const savedEst = localStorage.getItem('belgranit_estimates');
    if (savedEst) state.savedEstimates = JSON.parse(savedEst);
    state.currentMode = localStorage.getItem('belgranit_mode') || 'wholesale';
    state.currentTab = localStorage.getItem('belgranit_tab') || 'catalog';

    // Загружаем цены из админки
    const adminPrices = localStorage.getItem('belgranit_prices');
    if (adminPrices) {
      const p = JSON.parse(adminPrices);
      if (p.stele)      KARELIA_STELE.splice(0, KARELIA_STELE.length, ...p.stele);
      if (p.gravestone) KARELIA_GRAVESTONE.splice(0, KARELIA_GRAVESTONE.length, ...p.gravestone);
      if (p.pedestal)   KARELIA_PEDESTAL.splice(0, KARELIA_PEDESTAL.length, ...p.pedestal);
      if (p.flowerbed)  KARELIA_FLOWERBED.splice(0, KARELIA_FLOWERBED.length, ...p.flowerbed);
      if (p.post)       KARELIA_POST.splice(0, KARELIA_POST.length, ...p.post);
      if (p.polish)     POLISHING.splice(0, POLISHING.length, ...p.polish);
      if (p.art_stanok) ART_WORK.stanok.splice(0, ART_WORK.stanok.length, ...p.art_stanok);
      if (p.art_std)    ART_WORK.peskostroy_standard.splice(0, ART_WORK.peskostroy_standard.length, ...p.art_std);
      if (p.art_deep)   ART_WORK.peskostroy_deep.splice(0, ART_WORK.peskostroy_deep.length, ...p.art_deep);
    }

    // Загружаем курс из админки
    const adminRate = localStorage.getItem('belgranit_rate');
    if (adminRate) {
      const rateEl = document.getElementById('rate');
      if (rateEl) rateEl.value = adminRate;
    }
  } catch (e) {}
}

// ═══ TAB SWITCHING ═══════════════════════════════════════════════════════════

function switchMode(mode) {
  state.currentMode = mode;
  saveState(); // Сохраняем режим
  
  document.getElementById('mode_wholesale').classList.toggle('active', mode === 'wholesale');
  document.getElementById('mode_production').classList.toggle('active', mode === 'production');
  
  // Hide/show granite calculator based on mode
  const graniteCalc = document.getElementById('granite_calculator');
  if (graniteCalc) {
    graniteCalc.classList.toggle('hidden', mode === 'production');
  }
  
  // Hide/show category tabs and form selector in production mode
  const catGrid = document.querySelector('.cat-grid-sticky');
  if (catGrid) catGrid.classList.toggle('hidden', mode === 'production');
  
  const formSelector = document.querySelector('.mb-3.text-center');
  if (formSelector) formSelector.classList.toggle('hidden', mode === 'production');
  
  // Hide/show tabs based on mode
  const tabCatalog = document.getElementById('tab_catalog');
  const tabGranit = document.getElementById('tab_granit');
  
  if (mode === 'wholesale') {
    // В оптовом режиме показываем только КАТАЛОГ и СМЕТА
    tabCatalog.textContent = '📋 КАТАЛОГ';
    tabGranit.style.display = 'none';
    // Переключаемся на каталог если были на гранит
    if (state.currentTab === 'granit') {
      switchTab('catalog');
    }
  } else {
    // В производственном режиме показываем БЛАГОУСТРОЙСТВО, ГРАНИТ и СМЕТА
    tabCatalog.textContent = '📋 БЛАГОУСТРОЙСТВО';
    tabGranit.style.display = 'block';
  }
  
  // Update UI based on mode
  if (state.currentTab === 'catalog') {
    renderItems();
  } else if (state.currentTab === 'granit') {
    renderGranitItems();
  } else if (state.currentTab === 'estimate') {
    renderCart();
  }
}

function switchTab(tab) {
  state.currentTab = tab;
  saveState(); // Сохраняем вкладку
  
  document.getElementById('tab_catalog').classList.toggle('active', tab === 'catalog');
  document.getElementById('tab_granit').classList.toggle('active', tab === 'granit');
  document.getElementById('tab_estimate').classList.toggle('active', tab === 'estimate');
  
  document.getElementById('catalog_view').classList.toggle('hidden', tab !== 'catalog');
  document.getElementById('granit_view').classList.toggle('hidden', tab !== 'granit');
  document.getElementById('estimate_view').classList.toggle('hidden', tab !== 'estimate');
  
  if (tab === 'catalog') {
    renderItems();
  } else if (tab === 'granit') {
    renderGranitItems();
  } else if (tab === 'estimate') {
    renderCart();
  }
}

// ═══ RENDER ITEMS ════════════════════════════════════════════════════════════

function renderItems() {
  const container = document.getElementById('items_list');

  if (state.currentMode === 'production') {
    renderBlagoustrojstvo(container);
    return;
  }

  const allGroups = [
    { key: 'stele',       label: 'Стела',                      items: KARELIA_STELE,               hasCustom: true },
    { key: 'pedestal',    label: 'Подставка',                  items: KARELIA_PEDESTAL,             hasCustom: true },
    { key: 'flowerbed',   label: 'Цветник',                    items: KARELIA_FLOWERBED,            hasCustom: true },
    { key: 'gravestone',  label: 'Надгробка',                  items: KARELIA_GRAVESTONE,           hasCustom: true },
    { key: 'post',        label: 'Столб / Пролёт',             items: KARELIA_POST,                 hasCustom: true },
    { key: 'polish',      label: 'Полировка',                  items: POLISHING,                    hasCustom: false },
    { key: 'art_stanok',  label: 'Худ. работа — Станок',       items: ART_WORK.stanok,              hasCustom: false },
    { key: 'art_std',     label: 'Пескоструй Стандарт',        items: ART_WORK.peskostroy_standard, hasCustom: false },
    { key: 'art_deep',    label: 'Пескоструй Углубленный',     items: ART_WORK.peskostroy_deep,     hasCustom: false },
  ];

  // Фильтрация при поиске
  let groups = allGroups.map(g => ({
    ...g,
    items: state.searchQuery
      ? g.items.filter(i => i.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
      : g.items
  })).filter(g => g.items.length > 0);

  // Функция рендера одной колонки-категории
  function renderGroupCol(g) {
    if (!g) return '<div></div>';
    const rows = g.items.map(item => `
      <tr class="cat-row">
        <td class="cat-row-name">${item.name.replace(g.label.split(' ')[0] + ' ', '')}</td>
        <td class="cat-row-unit">${item.unit}</td>
        <td class="cat-row-price">
          <input type="number" value="${item.price}" min="0" step="0.5"
            class="cat-price-inp"
            onchange="updateCatalogPrice('${item.name}', this.value)"
            title="Изменить цену">$
        </td>
        <td class="cat-row-byr">${(item.price * getRate()).toFixed(0)}р</td>
        <td class="cat-row-qty">
          <input type="number" min="1" value="1" id="qty_${item.name}" class="cat-qty-inp" title="Кол-во">
          ${item.unit === 'м.п.' ? `<input type="number" min="0.1" step="0.1" value="1" id="meters_${item.name}" class="cat-qty-inp" title="м.п.">` : ''}
        </td>
        <td><button class="cat-add-btn" onclick='addToCartWithQty(${JSON.stringify(item)})'>+</button></td>
      </tr>
    `).join('');

    const customRow = (g.hasCustom && !state.searchQuery) ? `
      <tr class="cat-row cat-custom-row">
        <td class="cat-row-name" style="font-style:italic;color:var(--text-light)">Нестандарт</td>
        <td class="cat-row-unit"></td>
        <td class="cat-row-price">
          <input type="number" id="custom_price_${g.key}" value="50" step="0.5" class="cat-price-inp" title="Цена $">$
        </td>
        <td></td>
        <td class="cat-row-qty" style="gap:2px">
          <input type="number" id="custom_h_${g.key}" value="100" class="cat-qty-inp" title="В">
          <input type="number" id="custom_w_${g.key}" value="50"  class="cat-qty-inp" title="Ш">
          <input type="number" id="custom_t_${g.key}" value="5"   class="cat-qty-inp" title="Т">
        </td>
        <td><button class="cat-add-btn" onclick="addCustomSizeFrom('${g.key}')">+</button></td>
      </tr>
    ` : '';

    return `
      <div class="cat-col">
        <div class="cat-col-header">${g.label}</div>
        <table class="cat-col-table">
          <tbody>${rows}${customRow}</tbody>
        </table>
      </div>
    `;
  }

  // Разбиваем на строки по 3 колонки
  let html = '<div class="cat-layout">';
  for (let i = 0; i < groups.length; i += 3) {
    html += '<div class="cat-row-3">';
    html += renderGroupCol(groups[i]);
    html += renderGroupCol(groups[i+1]);
    html += renderGroupCol(groups[i+2]);
    html += '</div>';
  }
  html += '</div>';

  container.innerHTML = html || '<div class="text-center py-6" style="color:var(--text-light)">Ничего не найдено</div>';
}

function addCustomSizeFrom(groupKey) {
  const h = document.getElementById('custom_h_' + groupKey)?.value || 100;
  const w = document.getElementById('custom_w_' + groupKey)?.value || 50;
  const t = document.getElementById('custom_t_' + groupKey)?.value || 5;
  const price = parseFloat(document.getElementById('custom_price_' + groupKey)?.value) || 0;
  const labelMap = { stele:'Стела', pedestal:'Подставка', flowerbed:'Цветник', gravestone:'Надгробка', post:'Столб/Пролёт' };
  const item = { name:`${labelMap[groupKey]||groupKey} (нестандарт) ${h}×${w}×${t}`, unit:'шт', price, id:Date.now(), qty:1, meters:1 };
  state.cart.push(item);
  updateCartCount();
  saveState();
}

function addCustomSize() {
  addCustomSizeFrom(state.currentCategory);
}

function toggleGroup(key) {}

function switchCategory(cat) {
  state.currentCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderItems();
  const map = { art:'art_stanok' };
  const key = map[cat] || cat;
  setTimeout(() => {
    const el = document.querySelector('.cat-col-header');
    const allHeaders = document.querySelectorAll('.cat-col-header');
    allHeaders.forEach(h => {
      if (h.textContent.toLowerCase().includes(key.replace('_', ' '))) {
        h.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  }, 50);
}

function updateCatalogPrice(itemName, newPrice) {
  const price = parseFloat(newPrice) || 0;
  const allArrays = [KARELIA_STELE, KARELIA_GRAVESTONE, KARELIA_PEDESTAL,
                     KARELIA_FLOWERBED, KARELIA_POST, POLISHING,
                     ...Object.values(ART_WORK)];
  for (const arr of allArrays) {
    const item = arr.find(i => i.name === itemName);
    if (item) { item.price = price; break; }
  }
}

function addToCartWithQty(item) {
  const qtyInput = document.getElementById(`qty_${item.name}`);
  const metersInput = document.getElementById(`meters_${item.name}`);
  
  const qty = qtyInput ? parseFloat(qtyInput.value) || 1 : 1;
  const meters = metersInput ? parseFloat(metersInput.value) || 1 : 1;
  
  state.cart.push({ ...item, id: Date.now(), qty, meters });
  updateCartCount();
  saveState();
  
  // Visual feedback without alert
  if (qtyInput) qtyInput.value = 1;
  if (metersInput) metersInput.value = 1;
}

function renderArtWork() {
  const container = document.getElementById('items_list');
  
  // Render subcategory tabs
  const subcatTabs = `
    <div class="art-subcategory-tabs mb-4">
      <button class="art-subcat-tab ${state.currentArtSubcategory === 'stanok' ? 'active' : ''}" onclick="switchArtSubcategory('stanok')">Станок</button>
      <button class="art-subcat-tab ${state.currentArtSubcategory === 'peskostroy_standard' ? 'active' : ''}" onclick="switchArtSubcategory('peskostroy_standard')">Пескоструй «Стандарт»</button>
      <button class="art-subcat-tab ${state.currentArtSubcategory === 'peskostroy_deep' ? 'active' : ''}" onclick="switchArtSubcategory('peskostroy_deep')">Пескоструй «Углубленный»</button>
      <button class="art-subcat-tab ${state.currentArtSubcategory === 'additional' ? 'active' : ''}" onclick="switchArtSubcategory('additional')">Доп. работы</button>
    </div>
  `;
  
  const items = ART_WORK[state.currentArtSubcategory] || [];
  
  const itemsHtml = items.map(item => `
    <div class="item-card">
      <div class="flex-1">
        <div class="item-name">${item.name}</div>
        ${item.note ? `<div class="text-xs text-gray-500 italic mt-1">${item.note}</div>` : ''}
        <div class="flex gap-3 mt-2 items-center">
          <div class="flex items-center gap-1">
            <label class="text-xs text-gray-600">Кол-во:</label>
            <input type="number" min="1" value="1" id="qty_${item.name}" class="w-16 px-2 py-1 text-xs border rounded">
            <span class="text-xs">${item.unit}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="item-price">${item.price}$</div>
        <button class="item-add-btn" onclick='addToCartWithQty(${JSON.stringify(item)})'>+</button>
      </div>
    </div>
  `).join('');
  
  container.innerHTML = subcatTabs + '<div class="space-y-2">' + itemsHtml + '</div>';
}

function switchArtSubcategory(subcat) {
  state.currentArtSubcategory = subcat;
  renderArtWork();
}

function filterItems() {
  state.searchQuery = document.getElementById('search').value;
  
  if (state.currentMode === 'production') {
    // Фильтрация для производственного каталога
    const query = state.searchQuery.toLowerCase();
    const rows = document.querySelectorAll('.blago-service-row');
    
    rows.forEach(row => {
      const name = row.dataset.name || '';
      if (query === '' || name.includes(query)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  } else {
    // Фильтрация для оптового каталога
    renderItems();
  }
}

// ═══ CART FUNCTIONS ══════════════════════════════════════════════════════════

function addToCart(item) {
  state.cart.push({ ...item, id: Date.now(), qty: 1, meters: 1 });
  updateCartCount();
  saveState();
  
  // Show notification
  alert(`✓ Добавлено: ${item.name}`);
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  updateCartCount();
  renderCart();
  saveState();
}

function clearCart() {
  if (confirm('Очистить всю смету?')) {
    state.cart = [];
    updateCartCount();
    renderCart();
    saveState();
  }
}

function updateCartCount() {
  document.getElementById('cart_count').textContent = state.cart.length;
}

function renderCart() {
  const container = document.getElementById('cart_items');
  const empty = document.getElementById('cart_empty');
  
  if (state.cart.length === 0) {
    container.innerHTML = '';
    empty.classList.remove('hidden');
    updateSummary();
    return;
  }
  
  empty.classList.add('hidden');
  
  // В производственной смете цены в BYN, в оптовой в USD
  const isProduction = state.currentMode === 'production';
  
  container.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * (item.qty || 1) * (item.unit === 'м.п.' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'м/п' || item.unit === 'у.е.' || item.unit === '1 км' ? (item.meters || 1) : 1);
    const imageHtml = item.image ? `<img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.style.display='none'">` : '';
    
    // Форматирование цены в зависимости от режима
    let priceDisplay, totalDisplay;
    if (isProduction) {
      priceDisplay = `${item.unit} × ${item.price.toFixed(0)} руб.`;
      totalDisplay = `<div class="font-bold" style="color: var(--primary);">${itemTotal.toFixed(0)} руб.</div>`;
    } else {
      priceDisplay = `${item.unit} × ${item.price}$ / ${fmtBYR(item.price * getRate())}`;
      totalDisplay = `
        <div class="font-bold" style="color: var(--primary);">${itemTotal.toFixed(2)}$</div>
        <div class="text-xs" style="color:var(--text-light)">${fmtBYR(usdToBYR(itemTotal))}</div>
      `;
    }
    
    return `
    <div class="cart-item">
      ${imageHtml}
      <div class="flex-1">
        <div class="font-medium">${item.name}</div>
        <div class="text-sm" style="color: var(--text-light);">${priceDisplay}</div>
        <div class="flex flex-wrap gap-2 mt-2">
          ${item.unit === 'м.п.' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'м/п' || item.unit === 'у.е.' || item.unit === '1 км' ? `
          <div class="flex items-center gap-1">
            <label class="text-xs" style="color:var(--text-light)">Кол-во:</label>
            <input type="number" min="0.1" step="0.1" value="${item.meters || 1}" 
              class="w-16 px-2 py-1 text-sm border rounded cart-qty-input" 
              onchange="updateCartItemQty(${item.id}, this.value, 'meters')">
            <span class="text-xs" style="color:var(--text-light)">${item.unit}</span>
          </div>
          ` : `
          <div class="flex items-center gap-1">
            <label class="text-xs" style="color:var(--text-light)">Кол-во:</label>
            <input type="number" min="1" value="${item.qty || 1}" 
              class="w-16 px-2 py-1 text-sm border rounded cart-qty-input" 
              onchange="updateCartItemQty(${item.id}, this.value, 'qty')">
            <span class="text-xs" style="color:var(--text-light)">${item.unit}</span>
          </div>
          `}
        </div>
        <input type="text" placeholder="Примечание к позиции..." value="${item.note || ''}"
          class="mt-2 w-full px-2 py-1 text-xs border rounded cart-note-input"
          onchange="updateCartItemNote(${item.id}, this.value)">
      </div>
      <div class="flex flex-col items-end gap-1">
        ${totalDisplay}
        <span class="cart-item-remove" onclick="removeFromCart(${item.id})">×</span>
      </div>
    </div>
  `}).join('');
  
  updateSummary();
}

function updateCartItemQty(id, value, field) {
  const item = state.cart.find(i => i.id === id);
  if (item) {
    item[field] = parseFloat(value) || 1;
    renderCart();
    saveState();
  }
}

function updateCartItemNote(id, value) {
  const item = state.cart.find(i => i.id === id);
  if (item) {
    item.note = value;
    saveState();
  }
}

function updateSummary() {
  const isProduction = state.currentMode === 'production';
  
  const subtotal = state.cart.reduce((sum, item) => {
    const itemTotal = item.price * (item.qty || 1) * (item.unit === 'м.п.' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'м/п' || item.unit === 'у.е.' || item.unit === '1 км' ? (item.meters || 1) : 1);
    return sum + itemTotal;
  }, 0);

  // Apply markup/discount
  const adj = 1 + (state.markup - state.discount) / 100;
  const total = subtotal * adj;

  document.getElementById('sum_count').textContent = state.cart.length;
  
  // В производственной смете цены в BYN, конвертируем в USD делением
  // В оптовой смете цены в USD, конвертируем в BYN умножением
  if (isProduction) {
    const totalUSD = total / getRate();
    document.getElementById('sum_usd').textContent = fmtUSD(totalUSD);
    document.getElementById('sum_byr').textContent = fmtBYR(total);
  } else {
    const totalBYR = total * getRate();
    document.getElementById('sum_usd').textContent = fmtUSD(total);
    document.getElementById('sum_byr').textContent = fmtBYR(totalBYR);
  }

  // Update markup/discount display
  const markupEl = document.getElementById('markup_val');
  const discountEl = document.getElementById('discount_val');
  if (markupEl) markupEl.value = state.markup;
  if (discountEl) discountEl.value = state.discount;

  // Category breakdown
  renderCategoryBreakdown(subtotal, total);
}

function renderCategoryBreakdown(subtotal, total) {
  const el = document.getElementById('category_breakdown');
  if (!el || state.cart.length === 0) {
    if (el) el.innerHTML = '';
    return;
  }

  const isProduction = state.currentMode === 'production';

  const cats = {
    'Стела': 0, 'Надгробка': 0, 'Подставка': 0, 'Цветник': 0,
    'Столб/Пролёт': 0, 'Худ. работа': 0, 'Полировка': 0,
    'Гранит': 0, 'Форма': 0, 'Прочее': 0
  };

  state.cart.forEach(item => {
    const v = item.price * (item.qty || 1) * (item.unit === 'м.п.' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'м/п' || item.unit === 'у.е.' || item.unit === '1 км' ? (item.meters || 1) : 1);
    if (item.name.startsWith('Стела')) cats['Стела'] += v;
    else if (item.name.startsWith('Надгробка')) cats['Надгробка'] += v;
    else if (item.name.startsWith('Подставка')) cats['Подставка'] += v;
    else if (item.name.startsWith('Цветник')) cats['Цветник'] += v;
    else if (item.name.startsWith('Столб') || item.name.startsWith('Пролет')) cats['Столб/Пролёт'] += v;
    else if (item.name.includes('Станок') || item.name.includes('Пескоструй') ||
             ['Текст','Портрет','Крест','Цветы','Пейзаж','Четверостишие'].some(w => item.name.startsWith(w))) cats['Худ. работа'] += v;
    else if (item.name.includes('Торец') || item.name.includes('Волна') || item.name.includes('Веер') || item.name.includes('Плита')) cats['Полировка'] += v;
    else if (item.name.includes('Мансуровский') || item.name.includes('Капустинский') || item.name.includes('Балтик') || item.name.includes('Блю') || item.name.includes('Аврора') || item.name.includes('Габбро') || item.name.includes('Мрамор')) cats['Гранит'] += v;
    else if (item.name.startsWith('Форма В') || item.name.startsWith('Форма Г')) cats['Форма'] += v;
    else cats['Прочее'] += v;
  });

  const adj = 1 + (state.markup - state.discount) / 100;
  const rows = Object.entries(cats)
    .filter(([, v]) => v > 0)
    .map(([cat, v]) => {
      const adjustedValue = v * adj;
      const priceDisplay = isProduction ? fmtBYR(adjustedValue) : fmtUSD(adjustedValue);
      return `
      <div class="flex justify-between text-sm py-1 border-b" style="border-color: var(--border);">
        <span style="color: var(--text-light);">${cat}</span>
        <span style="color: var(--text);">${priceDisplay}</span>
      </div>
    `}).join('');

  const adjLine = adj !== 1 ? `
    <div class="flex justify-between text-sm py-1" style="color: var(--text-light);">
      <span>${state.markup > 0 ? `Наценка +${state.markup}%` : `Скидка −${state.discount}%`}</span>
      <span>${isProduction ? fmtBYR(total - subtotal) : fmtUSD(total - subtotal)}</span>
    </div>` : '';

  el.innerHTML = rows + adjLine;
}

function setMarkup(val) {
  state.markup = Math.max(0, parseFloat(val) || 0);
  state.discount = 0;
  document.getElementById('discount_val').value = 0;
  updateSummary();
  saveState();
}

function setDiscount(val) {
  state.discount = Math.max(0, Math.min(100, parseFloat(val) || 0));
  state.markup = 0;
  document.getElementById('markup_val').value = 0;
  updateSummary();
  saveState();
}

function updateRate() {
  state.exchangeRate = getRate();
  if (state.currentTab === 'estimate') {
    updateSummary();
  }
  calcGranite();
}

// ═══ THEME ═══════════════════════════════════════════════════════════════════

function toggleTheme() {
  state.darkMode = !state.darkMode;
  applyTheme();
  saveState();
}

function applyTheme() {
  const root = document.documentElement;
  if (state.darkMode) {
    root.style.setProperty('--primary', '#c9a961');
    root.style.setProperty('--bg', '#0f0f0f');
    root.style.setProperty('--card-bg', '#1e1e1e');
    root.style.setProperty('--dark', '#1a1a1a');
    root.style.setProperty('--dark-light', '#2a2a2a');
    root.style.setProperty('--dark-lighter', '#3a3a3a');
    root.style.setProperty('--text', '#e8e8e8');
    root.style.setProperty('--text-light', '#a0a0a0');
    root.style.setProperty('--border', '#333333');
    root.style.setProperty('--input-bg', '#f5f5f5');
    root.style.setProperty('--input-text', '#2c2c2c');
    document.getElementById('theme_btn').textContent = '☀️';
  } else {
    root.style.setProperty('--primary', '#8b4513');
    root.style.setProperty('--bg', '#f5f5f0');
    root.style.setProperty('--card-bg', '#ffffff');
    root.style.setProperty('--dark', '#ffffff');
    root.style.setProperty('--dark-light', '#f0f0f0');
    root.style.setProperty('--dark-lighter', '#e8e8e8');
    root.style.setProperty('--text', '#2c2c2c');
    root.style.setProperty('--text-light', '#6b6b6b');
    root.style.setProperty('--border', '#d0d0d0');
    root.style.setProperty('--input-bg', '#ffffff');
    root.style.setProperty('--input-text', '#2c2c2c');
    document.getElementById('theme_btn').textContent = '🌙';
  }
  document.body.style.background = 'var(--bg)';
}

// ═══ ESTIMATE HISTORY ════════════════════════════════════════════════════════

function saveEstimate() {
  if (state.cart.length === 0) return;

  const name = document.getElementById('client_name').value || 'Без имени';
  const totalUSD = state.cart.reduce((sum, item) => {
    return sum + item.price * (item.qty || 1) * (item.unit === 'м.п.' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'м/п' || item.unit === 'у.е.' || item.unit === '1 км' ? (item.meters || 1) : 1);
  }, 0) * (1 + (state.markup - state.discount) / 100);

  const estimate = {
    id: Date.now(),
    name,
    date: new Date().toLocaleDateString('ru-RU'),
    total: totalUSD,
    cart: JSON.parse(JSON.stringify(state.cart)),
    markup: state.markup,
    discount: state.discount,
    client_name: document.getElementById('client_name').value,
    client_phone: document.getElementById('client_phone').value,
    order_date: document.getElementById('order_date').value,
    order_note: document.getElementById('order_note').value,
  };

  state.savedEstimates.unshift(estimate);
  if (state.savedEstimates.length > 20) state.savedEstimates.pop();
  saveState();
  renderHistoryModal();
}

function loadEstimate(id) {
  const est = state.savedEstimates.find(e => e.id === id);
  if (!est) return;

  state.cart = JSON.parse(JSON.stringify(est.cart));
  state.markup = est.markup || 0;
  state.discount = est.discount || 0;

  document.getElementById('client_name').value = est.client_name || '';
  document.getElementById('client_phone').value = est.client_phone || '';
  document.getElementById('order_date').value = est.order_date || '';
  document.getElementById('order_note').value = est.order_note || '';

  updateCartCount();
  switchTab('estimate');
  renderCart();
  closeHistoryModal();
}

function deleteEstimate(id) {
  state.savedEstimates = state.savedEstimates.filter(e => e.id !== id);
  saveState();
  renderHistoryModal();
}

function showHistoryModal() {
  document.getElementById('history_modal').classList.remove('hidden');
  renderHistoryModal();
}

function closeHistoryModal() {
  document.getElementById('history_modal').classList.add('hidden');
}

function renderHistoryModal() {
  const container = document.getElementById('history_list');
  if (state.savedEstimates.length === 0) {
    container.innerHTML = '<div class="text-center py-8" style="color:var(--text-light)">История смет пуста</div>';
    return;
  }
  container.innerHTML = state.savedEstimates.map(est => `
    <div class="item-card mb-2">
      <div class="flex-1">
        <div class="font-medium">${est.name}</div>
        <div class="text-xs" style="color:var(--text-light)">${est.date} · ${est.cart.length} поз. · ${fmtUSD(est.total)}</div>
      </div>
      <div class="flex gap-2">
        <button class="item-add-btn text-xs px-3" onclick="loadEstimate(${est.id})">Загрузить</button>
        <button class="cart-item-remove text-base" onclick="deleteEstimate(${est.id})">×</button>
      </div>
    </div>
  `).join('');
}

// ═══ GRANITE CALCULATOR ══════════════════════════════════════════════════════

function calcGranite() {
  const type = document.getElementById('granite_type').value;
  const product = document.getElementById('granite_product').value;
  const h = parseFloat(document.getElementById('granite_h').value) || 0;
  const w = parseFloat(document.getElementById('granite_w').value) || 0;
  const t = parseFloat(document.getElementById('granite_t').value) || 0;
  
  const basePricePerUnit = GRANITE_PRICES[type]?.[product] || 0;
  
  let quantity = 0;
  let area = 0;
  let heightM = h / 100;
  
  if (product.includes('stele') || product.includes('gravestone')) {
    quantity = (h / 100) * (w / 100); // m²
    area = quantity;
  } else if (product === 'pedestal') {
    quantity = (h / 100) * (w / 100) * (t / 100); // m³
    area = (h / 100) * (w / 100);
  } else {
    quantity = h / 100; // m.p.
    area = 0;
  }
  
  // Apply size adjustments
  const adjustedPrice = applySizeAdjustment(basePricePerUnit, area, heightM);
  const totalUSD = quantity * adjustedPrice;
  
  document.getElementById('granite_unit_price').textContent = adjustedPrice.toFixed(2) + '$/ед';
  document.getElementById('granite_total').textContent = totalUSD.toFixed(2) + '$';
  
  // Update color swatches
  updateGraniteColors(type);
}

function updateGraniteColors(type) {
  const info = GRANITE_INFO[type];
  const container = document.getElementById('granite_colors');
  
  if (!info) return;
  
  container.innerHTML = `<img src="${info.image}" alt="${info.name}" class="granite-texture" title="${info.name}">`;
}

function addGraniteToCart() {
  const type = document.getElementById('granite_type').value;
  const product = document.getElementById('granite_product').value;
  const h = parseFloat(document.getElementById('granite_h').value) || 0;
  const w = parseFloat(document.getElementById('granite_w').value) || 0;
  const t = parseFloat(document.getElementById('granite_t').value) || 0;
  const qty = parseFloat(document.getElementById('granite_qty').value) || 1;
  
  const totalUSD = parseFloat(document.getElementById('granite_total').textContent.replace('$', ''));
  const info = GRANITE_INFO[type];
  
  const item = {
    name: `${info.name} — ${product.replace('_', ' ')} ${h}×${w}×${t}`,
    unit: 'шт',
    price: totalUSD,
    qty: qty,
    meters: 1,
    id: Date.now()
  };
  
  state.cart.push(item);
  updateCartCount();
  saveState();
}

// ═══ FORMS MODAL ═════════════════════════════════════════════════════════════

function showFormSelector() {
  console.log('showFormSelector called');
  const modal = document.getElementById('form_modal');
  console.log('Modal element:', modal);
  modal.classList.remove('hidden');
  renderForms();
  console.log('Forms rendered');
}

function closeFormModal() {
  document.getElementById('form_modal').classList.add('hidden');
}

function renderForms() {
  console.log('renderForms called');
  const container = document.getElementById('forms_list');
  console.log('Container element:', container);
  
  const allForms = [...FORMS_V, ...FORMS_G];
  console.log('Total forms to render:', allForms.length);
  console.log('First form:', allForms[0]);
  console.log('Last form:', allForms[allForms.length - 1]);
  
  const html = allForms.map((form, index) => `
    <div class="item-card form-item" style="cursor: pointer;" data-form-index="${index}">
      <div class="flex items-center gap-3">
        <img src="${form.image}" alt="${form.id}" class="form-preview" onerror="this.src='https://via.placeholder.com/60x80/1a1a1a/c9a961?text=${form.id}'">
        <div>
          <div class="item-name">${form.id}</div>
          <div class="text-xs" style="color: var(--text-light);">${form.size}</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="item-price">${form.price}$</div>
        <button class="item-add-btn form-add-btn" data-form-index="${index}">+</button>
      </div>
    </div>
  `).join('');
  
  console.log('HTML length:', html.length);
  container.innerHTML = html;
  console.log('HTML set to container');
  
  // Добавляем обработчики событий после рендеринга
  setTimeout(() => {
    const formItems = document.querySelectorAll('.form-item');
    console.log('Form items found:', formItems.length);
    
    formItems.forEach(item => {
      item.addEventListener('click', function(e) {
        if (!e.target.classList.contains('form-add-btn')) {
          const index = parseInt(this.getAttribute('data-form-index'));
          console.log('Form item clicked, index:', index);
          addFormToCartByIndex(index);
        }
      });
    });
    
    const formBtns = document.querySelectorAll('.form-add-btn');
    console.log('Form buttons found:', formBtns.length);
    
    formBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const index = parseInt(this.getAttribute('data-form-index'));
        console.log('Form button clicked, index:', index);
        addFormToCartByIndex(index);
      });
    });
    
    console.log('Event listeners attached');
  }, 0);
}

function addFormToCartByIndex(index) {
  console.log('addFormToCartByIndex called with index:', index);
  const allForms = [...FORMS_V, ...FORMS_G];
  console.log('Total forms:', allForms.length);
  const form = allForms[index];
  console.log('Selected form:', form);
  if (!form) {
    console.error('Form not found at index:', index);
    return;
  }
  
  const item = {
    name: `Форма ${form.id} (${form.size})`,
    unit: 'шт',
    price: form.price,
    id: Date.now(),
    qty: 1
  };
  console.log('Adding item to cart:', item);
  state.cart.push(item);
  updateCartCount();
  saveState();
  renderCart();
  closeFormModal();
  console.log('Form added successfully');
}

function addFormToCart(form) {
  const item = {
    name: `Форма ${form.id} (${form.size})`,
    unit: 'шт',
    price: form.price,
    id: Date.now(),
    qty: 1
  };
  state.cart.push(item);
  updateCartCount();
  saveState();
  renderCart();
  closeFormModal();
}

function filterForms() {
  const query = document.getElementById('form_search').value.toLowerCase();
  const allForms = [...FORMS_V, ...FORMS_G];
  const filteredForms = allForms.filter(f => 
    f.id.toLowerCase().includes(query)
  );
  
  const container = document.getElementById('forms_list');
  container.innerHTML = filteredForms.map(form => {
    const originalIndex = allForms.indexOf(form);
    return `
    <div class="item-card form-item" style="cursor: pointer;" data-form-index="${originalIndex}">
      <div class="flex items-center gap-3">
        <img src="${form.image}" alt="${form.id}" class="form-preview" onerror="this.src='https://via.placeholder.com/60x80/1a1a1a/c9a961?text=${form.id}'">
        <div>
          <div class="item-name">${form.id}</div>
          <div class="text-xs" style="color: var(--text-light);">${form.size}</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="item-price">${form.price}$</div>
        <button class="item-add-btn form-add-btn" data-form-index="${originalIndex}">+</button>
      </div>
    </div>
  `}).join('');
  
  // Добавляем обработчики событий после рендеринга
  setTimeout(() => {
    document.querySelectorAll('.form-item').forEach(item => {
      item.addEventListener('click', function(e) {
        if (!e.target.classList.contains('form-add-btn')) {
          const index = parseInt(this.getAttribute('data-form-index'));
          addFormToCartByIndex(index);
        }
      });
    });
    
    document.querySelectorAll('.form-add-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const index = parseInt(this.getAttribute('data-form-index'));
        addFormToCartByIndex(index);
      });
    });
  }, 0);
}

// ═══ EXPORT FUNCTIONS ════════════════════════════════════════════════════════

function buildEstimateText() {
  const clientName = document.getElementById('client_name').value || '—';
  const clientPhone = document.getElementById('client_phone').value || '—';
  const orderDate = document.getElementById('order_date').value || new Date().toLocaleDateString('ru-RU');
  const orderNote = document.getElementById('order_note').value || '';
  
  const totalUSD = state.cart.reduce((sum, item) => {
    const itemTotal = item.price * (item.qty || 1) * (item.unit === 'м.п.' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'м/п' || item.unit === 'у.е.' || item.unit === '1 км' ? (item.meters || 1) : 1);
    return sum + itemTotal;
  }, 0);
  const totalBYR = usdToBYR(totalUSD);
  
  let text = `
═══════════════════════════════════════════════════════
           БЕЛГРАНИТ - СМЕТА НА ПАМЯТНИК
═══════════════════════════════════════════════════════

Заказчик: ${clientName}
Телефон: ${clientPhone}
Дата: ${orderDate}
Курс доллара: ${getRate()} BYR

───────────────────────────────────────────────────────
ПОЗИЦИИ:
───────────────────────────────────────────────────────

${state.cart.map((item, i) => {
  const qty = item.qty || 1;
  const isMetric = item.unit === 'м.п.' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'м/п' || item.unit === 'у.е.' || item.unit === '1 км';
  const meters = isMetric ? (item.meters || 1) : 1;
  const itemTotal = item.price * qty * meters;
  const qtyStr = !isMetric && qty > 1 ? ` × ${qty} ${item.unit}` : '';
  const metersStr = isMetric && meters > 1 ? ` × ${meters} ${item.unit}` : '';
  return `${i+1}. ${item.name}${qtyStr}${metersStr} — ${itemTotal.toFixed(2)}$`;
}).join('\n')}

───────────────────────────────────────────────────────
ИТОГО: ${fmtUSD(totalUSD)} / ${fmtBYR(totalBYR)}
═══════════════════════════════════════════════════════
`;

  if (orderNote) text += `\nПримечание: ${orderNote}\n`;
  text += `\n© 2024 БЕЛГРАНИТ\n`;
  
  return text.trim();
}

function copyEstimate() {
  const text = buildEstimateText();
  navigator.clipboard.writeText(text).then(() => {
    alert('✓ Смета скопирована!');
  }).catch(() => {
    alert('Не удалось скопировать');
  });
}

function printEstimate() {
  if (!document.getElementById('client_name').value) {
    if (!confirm('ФИО заказчика не заполнено. Распечатать всё равно?')) return;
  }

  // Вставляем примечания как видимые span перед печатью
  document.querySelectorAll('.cart-item').forEach(el => {
    const noteInput = el.querySelector('.cart-note-input');
    if (noteInput && noteInput.value.trim()) {
      let printNote = el.querySelector('.cart-item-note-print');
      if (!printNote) {
        printNote = document.createElement('span');
        printNote.className = 'cart-item-note-print';
        const nameEl = el.querySelector('.font-medium');
        if (nameEl) nameEl.after(printNote);
      }
      printNote.textContent = '↳ ' + noteInput.value.trim();
    }
  });

  window.print();
}

function shareViber() {
  const text = buildEstimateText();
  window.open(`viber://forward?text=${encodeURIComponent(text.substring(0,400))}`, '_blank');
}

function shareTG() {
  const text = buildEstimateText();
  window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text.substring(0,400))}`, '_blank');
}

function shareWA() {
  const text = buildEstimateText();
  window.open(`https://wa.me/?text=${encodeURIComponent(text.substring(0,400))}`, '_blank');
}

// ═══ БЛАГОУСТРОЙСТВО DATA (PRODUCTION MODE) ═════════════════════════════════

const BLAGO_SERVICES = {
  montazh: [
    { name: 'Монтаж одинарного памятника', price: 150, unit: 'шт' },
    { name: 'Монтаж одинарного памятника на фундаментный блок', price: 190, unit: 'шт' },
    { name: 'Монтаж одинарного памятника на фунд. блок "косичка"', price: 250, unit: 'шт' },
    { name: 'Монтаж гранитного памятника 110*55*8 и более', price: 200, unit: 'шт', note: 'от 200' },
    { name: 'Монтаж двойного памятника', price: 200, unit: 'шт' },
    { name: 'Монтаж двойного памятника на фундаментный блок', price: 250, unit: 'шт' },
    { name: 'Монтаж блока фундаментного', price: 100, unit: 'шт' },
    { name: 'Монтаж плиты бетонной 190*60*5 - 1 шт', price: 200, unit: 'шт' },
    { name: 'Монтаж цветника', price: 60, unit: 'шт' },
    { name: 'Монтаж плиты мозаичной цветочницы', price: 60, unit: 'шт' },
    { name: 'Монтаж стола', price: 25, unit: 'шт' },
    { name: 'Монтаж скамьи', price: 25, unit: 'шт' },
    { name: 'Монтаж стола гранитного', price: 60, unit: 'шт' },
    { name: 'Монтаж скамьи гранитной', price: 60, unit: 'шт' },
    { name: 'Монтаж ограды в землю', price: 15, unit: 'м/п' },
    { name: 'Монтаж ограды в борозду (гранит)', price: 15, unit: 'м/п' },
    { name: 'Монтаж ура розанного', price: 30, unit: 'шт' },
    { name: 'Монтаж гранитной ограды', price: 35, unit: 'м/п' },
    { name: 'Монтаж креста металлического', price: 20, unit: 'шт' },
    { name: 'Монтаж гранитной плиты толщиной 2 см С МАТЕРИАЛОМ (китай) на армированную плиту 20 см', price: 450, unit: 'м2' },
    { name: 'Облицовка гранитной плитой 2 см С МАТЕРИАЛОМ (китай)', price: 680, unit: 'м2' },
    { name: 'Монтаж гранитной плиты', price: 30, unit: 'шт' },
    { name: 'Монтаж плиты надгробной', price: 30, unit: 'шт' },
    { name: 'Монтаж медальона', price: 50, unit: 'шт' },
    { name: 'Монтаж колышка', price: 20, unit: 'шт' },
    { name: 'Монтаж вазы', price: 10, unit: 'шт' },
    { name: 'Монтаж лампад', price: 10, unit: 'шт' },
  ],
  demontazh: [
    { name: 'Демонтаж одинарного памятника гранитного', price: 80, unit: 'шт' },
    { name: 'Демонтаж одинарного памятника бетонного', price: 100, unit: 'шт' },
    { name: 'Демонтаж двойного памятника с двумя цветниками', price: 100, unit: 'шт' },
    { name: 'Демонтаж цветника', price: 40, unit: 'шт' },
    { name: 'Демонтаж старой ограды', price: 5, unit: 'м/п' },
    { name: 'Демонтаж стола', price: 15, unit: 'шт' },
    { name: 'Демонтаж старой плитки', price: 40, unit: 'м/п' },
    { name: 'Демонтаж борозура', price: 10, unit: 'м/п' },
    { name: 'Демонтаж крепа', price: 15, unit: 'шт' },
    { name: 'Демонтаж скамьи', price: 15, unit: 'шт' },
  ],
  blago: [
    { name: 'Покраска борозура розанного', price: 10, unit: 'м/п' },
    { name: 'Стяжка', price: 60, unit: 'м2' },
    { name: 'Стяжка армированная 5-6 см', price: 100, unit: 'м2' },
    { name: 'Плитка бетонная 30 см', price: 150, unit: 'м2' },
    { name: 'Плитка бетонная 30*30 с укладкой на армированную стяжку', price: 220, unit: 'м2' },
    { name: 'Плитка бетонная МОЗАИЧНАЯ цветная 30*30 с укладкой на армированную стяжку', price: 250, unit: 'м2' },
    { name: 'Плитка керамогранитная с укладкой на армированную стяжку', price: 320, unit: 'м2' },
    { name: 'Плитка керамогранитная плиточной', price: 230, unit: 'м2' },
    { name: 'Облицовка цера', price: 85, unit: 'м/п' },
    { name: 'Бессерный блок с установкой плиточной', price: 128, unit: 'м/п' },
    { name: 'Бессерный блок с установкой', price: 50, unit: 'м/п' },
    { name: 'Борзур бетонный с монтажом', price: 60, unit: 'м/п' },
    { name: 'Борзур бетонный цветной с монтажом', price: 180, unit: 'м/п' },
    { name: 'Армированный поясок 40 см', price: 96, unit: 'м/п' },
    { name: 'Армированный поясок 20 см', price: 45, unit: 'м/п' },
    { name: 'Армированный поясок в землю', price: 45, unit: 'дог.' },
    { name: 'Сварочные работы', price: 20, unit: 'м/п', note: 'от 20' },
    { name: 'Покраска ограды в 2 слоя', price: 30, unit: 'дог.' },
    { name: 'Перевозка материалов более 30м', price: 30, unit: 'дог.' },
    { name: 'Выборка грунта', price: 30, unit: 'м2' },
    { name: 'Доставка изделия на район', price: 1.5, unit: '1 км' },
    { name: 'Переколпировка на гранитной стандарт', price: 60, unit: 'шт' },
    { name: 'Плита бетонна 190*60*5', price: 130, unit: 'шт' },
    { name: 'Укладка плитки керамогранитной ЗАКАЭЧИКА на арм.стяжку', price: 220, unit: 'м2' },
    { name: 'Песок, засыпка одного свободного места', price: 100, unit: 'шт' },
    { name: 'Блок фундаментный', price: 85, unit: '1 шт' },
    { name: 'Блок фундаментный "косичка"', price: 140, unit: '1 шт' },
    { name: 'Засыпка щебнем цветника -1 мешок', price: 30, unit: '1 меш.' },
    { name: 'Засыпка щебнем цветника, белым мрамором -1 мешок', price: 40, unit: '1 меш.' },
    { name: 'Щебень цветной', price: 15, unit: '1 меш.' },
    { name: 'Щебень цветной, белый мрамор', price: 20, unit: '1 меш.' },
    { name: 'Плита бетонная мозаичная 2,3*1,5 м благоустройства с монтажом', price: 850, unit: '1 шт' },
    { name: 'Ковер (трава)', price: 110, unit: 'м2' },
  ],
  granit_izdeliya: [
    // Стелы
    { name: 'Стела 2 см', price: 624, unit: 'м2', granite: 'Габбро Мансур' },
    { name: 'Стела 3 см', price: 960, unit: 'м2', granite: 'Габбро Мансур' },
    { name: 'Стела 5 см', price: 1344, unit: 'м2', granite: 'Габбро Мансур' },
    { name: 'Стела 8 см', price: 1824, unit: 'м2', granite: 'Габбро Мансур' },
    { name: 'Стела 10 см', price: 2016, unit: 'м2', granite: 'Габбро Мансур' },
    // Подставка
    { name: 'Подставка', price: 24960, unit: 'м3', granite: 'Габбро Мансур' },
    // Бордюр
    { name: 'Бордюр 8*5', price: 129, unit: 'м.п.', granite: 'Габбро Мансур' },
    { name: 'Бордюр 8*8', price: 199, unit: 'м.п.', granite: 'Габбро Мансур' },
    // Столбики
    { name: 'Столбики 10*10', price: 418, unit: 'м.п.', granite: 'Габбро Мансур' },
    { name: 'Столбики 15*15', price: 726, unit: 'м.п.', granite: 'Габбро Мансур' },
    // Цветник
    { name: 'Цветник 8*5', price: 110, unit: 'м.п.', granite: 'Габбро Мансур' },
    { name: 'Цветник 9*8', price: 180, unit: 'м.п.', granite: 'Габбро Мансур' },
    { name: 'Цветник 10*5', price: 160, unit: 'м.п.', granite: 'Габбро Мансур' },
    { name: 'Цветник 12*12', price: 0, unit: 'м.п.', granite: 'Габбро Мансур', note: 'договорная' },
    { name: 'Цветник 15*15', price: 0, unit: 'м.п.', granite: 'Габбро Мансур', note: 'договорная' },
    // Ваза
    { name: 'Ваза 20*12*12', price: 162, unit: 'шт', granite: 'Габбро Мансур' },
    { name: 'Ваза 25*12*12', price: 216, unit: 'шт', granite: 'Габбро Мансур' },
    { name: 'Ваза 30*15*15', price: 297, unit: 'шт', granite: 'Габбро Мансур' },
    // Шар с юбкой
    { name: 'Шар с юбкой', price: 97, unit: 'шт', granite: 'Габбро Мансур' },
    // Плита роль
    { name: 'Плита роль 50*30*3', price: 170, unit: 'шт', granite: 'Габбро Мансур' },
    { name: 'Плита роль 50*20*2', price: 120, unit: 'шт', granite: 'Габбро Мансур' },
    { name: 'Плита роль 60*30*3', price: 230, unit: 'шт', granite: 'Габбро Мансур' },
  ],
  hudozh_raboty: [
    { name: 'Портрет станок Ф А4', price: 90, unit: 'шт', note: 'Резка обычной формы 100*50*5' },
    { name: 'Портрет резка Ф А4 Ф А3', price: 200, unit: 'шт', note: 'Резка обычной формы 120*60*8' },
    { name: 'Портрет полуторс станок', price: 170, unit: 'шт', note: 'Резка формы 100*50*8' },
    { name: 'Портрет полуторс резка', price: 330, unit: 'шт', note: 'Резка врыв' },
    { name: 'Текст стандарт', price: 70, unit: 'шт', note: 'Резка креста 100*50*5' },
    { name: 'Текст углубленный', price: 180, unit: 'шт', note: 'Резка креста 100*50*8', note2: 'от 180' },
    { name: 'Текст углубл. на плите 120 и выше', price: 120, unit: 'шт', note: 'Резка креста 120*60*8', note2: 'от 200' },
    { name: 'Худ. работа мелкие цветы гравир', price: 40, unit: 'шт', note: 'Врезка медальона в нишу', note2: 'от 40' },
    { name: 'Пейзаж 1 Ф А4', price: 50, unit: 'шт', note: 'Рез плитка 5-10 см, м.п.', note2: 'от 350' },
    { name: 'Полировка торца 5см+фаска', price: 25, unit: 'шт', note: 'Рез плитка 2-3 см, м.п.' },
    { name: 'Полировка торца 8см+фаска', price: 35, unit: 'шт', note: 'Труба нержавейка 32 см, м.п.' },
    { name: 'Полировка фаски на комплект', price: 50, unit: 'шт', note: 'Сетчик дополнительная' },
    { name: 'Полировка фаски на комплект', price: 15, unit: 'шт', note: 'Сборка комплекса на производстве' },
    { name: 'Буквы CAGGIATI шрифт CIRILLICO', price: 0, unit: 'шт', note: 'Нанесение несмываемого покрытия' },
    { name: 'Буквы CAGGIATI шрифт MUNDIAL', price: 0, unit: 'шт' },
  ],
  bukvy_razmery: [
    { name: 'Буквы 5 см', price: 6, unit: 'у.е.' },
    { name: 'Буквы 3 см', price: 4, unit: 'у.е.' },
    { name: 'Буквы знак любой', price: 3.5, unit: 'у.е.' },
    { name: 'Монтаж любой буквы и знака', price: 1, unit: 'у.е.' },
    { name: 'При длине материала 1,2 м или 0,7 м2 +10%', price: 0, unit: 'у.е.' },
    { name: 'При длине материала 1,4 м или 0,9 м2 +20%', price: 0, unit: 'у.е.' },
  ]
};

// ═══ БЛАГОУСТРОЙСТВО (PRODUCTION MODE) ═══════════════════════════════════════

function renderBlagoustrojstvo(container) {
  // Render floating calculator at the top
  const calculator = `
    <div class="card mb-4" id="blago_calculator" style="position: sticky; top: 80px; z-index: 10; transition: opacity 0.3s;">
      <div class="card-body">
        <div class="grid grid-cols-4 gap-3">
          <div>
            <label class="label text-xs">Длина (м)</label>
            <input type="number" id="blago_length" value="0" step="0.1" min="0" class="input-field text-sm" oninput="calcBlagoMetrics()">
          </div>
          <div>
            <label class="label text-xs">Ширина (м)</label>
            <input type="number" id="blago_width" value="0" step="0.1" min="0" class="input-field text-sm" oninput="calcBlagoMetrics()">
          </div>
          <div class="text-center p-2 rounded" style="background: var(--dark-light);">
            <div class="text-xs" style="color: var(--text-light);">Площадь</div>
            <div class="text-xl font-bold" style="color: var(--primary);" id="blago_area">0.00</div>
            <div class="text-xs" style="color: var(--text-light);">м²</div>
          </div>
          <div class="text-center p-2 rounded" style="background: var(--dark-light);">
            <div class="text-xs" style="color: var(--text-light);">Периметр</div>
            <div class="text-xl font-bold" style="color: var(--primary);" id="blago_perimeter">0.00</div>
            <div class="text-xs" style="color: var(--text-light);">м/п</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render all services in compact 3-column table format
  const renderServiceGroup = (title, services) => {
    const rows = services.map(item => {
      // Определяем какое поле показывать
      let qtyField = '';
      if (item.unit === 'м/п' || item.unit === 'м2' || item.unit === '1 км') {
        qtyField = `<input type="number" min="0.1" step="0.1" value="1" id="qty_${item.name}" class="cat-qty-inp" style="width: 50px; font-size: 11px; padding: 2px;" title="${item.unit}" placeholder="${item.unit}">`;
      } else {
        qtyField = `<input type="number" min="1" value="1" id="qty_${item.name}" class="cat-qty-inp" style="width: 50px; font-size: 11px; padding: 2px;" title="Кол-во" placeholder="шт">`;
      }
      
      // Цены в производственной смете уже в BYN
      const priceBYN = item.price;
      
      return `
      <tr class="cat-row blago-service-row" data-name="${item.name.toLowerCase()}">
        <td class="cat-row-name" style="font-size: 12px; padding: 4px 6px;">${item.name}</td>
        <td class="cat-row-unit" style="font-size: 11px; padding: 4px 4px;">${item.unit}</td>
        <td class="cat-row-price" style="padding: 4px 4px;">
          <input type="number" value="${priceBYN}" min="0" step="1"
            class="cat-price-inp" style="width: 60px; font-size: 11px; padding: 2px 4px;"
            onchange="updateBlagoPriceBYN('${item.name}', this.value)"
            title="Изменить цену">${item.note ? `<br><span style="font-size:9px;color:var(--text-light)">${item.note}</span>` : ''}
        </td>
        <td class="cat-row-qty" style="padding: 4px 4px;">
          ${qtyField}
        </td>
        <td style="padding: 4px;"><button class="cat-add-btn" style="font-size: 14px; padding: 2px 8px;" onclick='addBlagoToCart(${JSON.stringify(item)})'>+</button></td>
      </tr>
    `}).join('');
    
    return `
      <div class="cat-col">
        <div class="cat-col-header" style="font-size: 13px; padding: 6px 8px;">${title}</div>
        <table class="cat-col-table" style="font-size: 12px;">
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  };

  container.innerHTML = calculator + `
    <div class="cat-layout">
      <div class="cat-row-3">
        ${renderServiceGroup('МОНТАЖ', BLAGO_SERVICES.montazh)}
        ${renderServiceGroup('ДЕМОНТАЖ', BLAGO_SERVICES.demontazh)}
        ${renderServiceGroup('ПРОЧИЕ РАБОТЫ', BLAGO_SERVICES.blago)}
      </div>
    </div>
  `;
  
  // Initialize calculator
  setTimeout(() => {
    calcBlagoMetrics();
    setupBlagoScrollOpacity();
  }, 100);
}

function addBlagoToCart(item) {
  const qtyInput = document.getElementById(`qty_${item.name}`);
  const qty = qtyInput ? parseFloat(qtyInput.value) || 1 : 1;
  
  // Для м/п, м2, км используем qty как meters, для остальных как штуки
  let meters = 1;
  let finalQty = 1;
  
  if (item.unit === 'м/п' || item.unit === 'м2' || item.unit === '1 км') {
    meters = qty;
    finalQty = 1;
  } else {
    finalQty = qty;
    meters = 1;
  }
  
  state.cart.push({ ...item, id: Date.now(), qty: finalQty, meters });
  updateCartCount();
  saveState();
  
  if (qtyInput) qtyInput.value = 1;
}

function updateBlagoPriceBYN(itemName, newPriceBYN) {
  const priceBYN = parseFloat(newPriceBYN) || 0;
  
  for (const category in BLAGO_SERVICES) {
    const item = BLAGO_SERVICES[category].find(i => i.name === itemName);
    if (item) {
      item.price = priceBYN;
      break;
    }
  }
}

function setupBlagoScrollOpacity() {
  const calc = document.getElementById('blago_calculator');
  if (!calc) return;
  
  let lastScroll = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      calc.style.opacity = '0.7';
    } else {
      // Scrolling up or at top
      calc.style.opacity = '1';
    }
    
    lastScroll = currentScroll;
  });
  
  // Reset opacity on hover
  calc.addEventListener('mouseenter', () => {
    calc.style.opacity = '1';
  });
}

function calcBlagoMetrics() {
  const length = parseFloat(document.getElementById('blago_length')?.value) || 0;
  const width = parseFloat(document.getElementById('blago_width')?.value) || 0;
  
  const area = length * width;
  const perimeter = 2 * (length + width);
  
  const areaEl = document.getElementById('blago_area');
  const perimeterEl = document.getElementById('blago_perimeter');
  
  if (areaEl) areaEl.textContent = area.toFixed(2);
  if (perimeterEl) perimeterEl.textContent = perimeter.toFixed(2);
}

function updateBlagoPrice(itemName, newPrice) {
  const price = parseFloat(newPrice) || 0;
  for (const category in BLAGO_SERVICES) {
    const item = BLAGO_SERVICES[category].find(i => i.name === itemName);
    if (item) {
      item.price = price;
      break;
    }
  }
}

// ═══ GRANIT TAB FUNCTIONS ═══════════════════════════════════════════════════

function renderGranitItems() {
  const container = document.getElementById('granit_items_list');
  
  // Render floating calculator at the top
  const calculator = `
    <div class="card mb-4" id="granit_calculator" style="position: sticky; top: 80px; z-index: 10; transition: opacity 0.3s;">
      <div class="card-body">
        <div class="grid grid-cols-4 gap-3">
          <div>
            <label class="label text-xs">Длина (м)</label>
            <input type="number" id="granit_length" value="0" step="0.1" min="0" class="input-field text-sm" oninput="calcGranitMetrics()">
          </div>
          <div>
            <label class="label text-xs">Ширина (м)</label>
            <input type="number" id="granit_width" value="0" step="0.1" min="0" class="input-field text-sm" oninput="calcGranitMetrics()">
          </div>
          <div class="text-center p-2 rounded" style="background: var(--dark-light);">
            <div class="text-xs" style="color: var(--text-light);">Площадь</div>
            <div class="text-xl font-bold" style="color: var(--primary);" id="granit_area">0.00</div>
            <div class="text-xs" style="color: var(--text-light);">м²</div>
          </div>
          <div class="text-center p-2 rounded" style="background: var(--dark-light);">
            <div class="text-xs" style="color: var(--text-light);">Периметр</div>
            <div class="text-xl font-bold" style="color: var(--primary);" id="granit_perimeter">0.00</div>
            <div class="text-xs" style="color: var(--text-light);">м/п</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render all granit services in compact 3-column table format
  const renderServiceGroup = (title, services) => {
    const rows = services.map(item => {
      // Определяем какое поле показывать
      let qtyField = '';
      if (item.unit === 'м/п' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'у.е.') {
        qtyField = `<input type="number" min="0.1" step="0.1" value="1" id="qty_${item.name}" class="cat-qty-inp" style="width: 50px; font-size: 11px; padding: 2px;" title="${item.unit}" placeholder="${item.unit}">`;
      } else {
        qtyField = `<input type="number" min="1" value="1" id="qty_${item.name}" class="cat-qty-inp" style="width: 50px; font-size: 11px; padding: 2px;" title="Кол-во" placeholder="шт">`;
      }
      
      // Цены в производственной смете уже в BYN
      const priceBYN = item.price;
      
      return `
      <tr class="cat-row granit-service-row" data-name="${item.name.toLowerCase()}">
        <td class="cat-row-name" style="font-size: 12px; padding: 4px 6px;">${item.name}</td>
        <td class="cat-row-unit" style="font-size: 11px; padding: 4px 4px;">${item.unit}</td>
        <td class="cat-row-price" style="padding: 4px 4px;">
          <input type="number" value="${priceBYN}" min="0" step="1"
            class="cat-price-inp" style="width: 60px; font-size: 11px; padding: 2px 4px;"
            onchange="updateGranitPriceBYN('${item.name}', this.value)"
            title="Изменить цену">${item.note ? `<br><span style="font-size:9px;color:var(--text-light)">${item.note}</span>` : ''}
        </td>
        <td class="cat-row-qty" style="padding: 4px 4px;">
          ${qtyField}
        </td>
        <td style="padding: 4px;"><button class="cat-add-btn" style="font-size: 14px; padding: 2px 8px;" onclick='addGranitToCart(${JSON.stringify(item)})'>+</button></td>
      </tr>
    `}).join('');
    
    return `
      <div class="cat-col">
        <div class="cat-col-header" style="font-size: 13px; padding: 6px 8px;">${title}</div>
        <table class="cat-col-table" style="font-size: 12px;">
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  };

  container.innerHTML = calculator + `
    <div class="cat-layout">
      <div class="cat-row-3">
        ${renderServiceGroup('ГРАНИТНЫЕ ИЗДЕЛИЯ', BLAGO_SERVICES.granit_izdeliya)}
        ${renderServiceGroup('ХУДОЖЕСТВЕННЫЕ РАБОТЫ', BLAGO_SERVICES.hudozh_raboty)}
        ${renderServiceGroup('БУКВЫ И РАЗМЕРЫ', BLAGO_SERVICES.bukvy_razmery)}
      </div>
    </div>
  `;
  
  // Initialize calculator
  setTimeout(() => {
    calcGranitMetrics();
    setupGranitScrollOpacity();
  }, 100);
}

function setupGranitScrollOpacity() {
  const calc = document.getElementById('granit_calculator');
  if (!calc) return;
  
  let lastScroll = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      calc.style.opacity = '0.7';
    } else {
      // Scrolling up or at top
      calc.style.opacity = '1';
    }
    
    lastScroll = currentScroll;
  });
  
  // Reset opacity on hover
  calc.addEventListener('mouseenter', () => {
    calc.style.opacity = '1';
  });
}

function calcGranitMetrics() {
  const length = parseFloat(document.getElementById('granit_length')?.value) || 0;
  const width = parseFloat(document.getElementById('granit_width')?.value) || 0;
  
  const area = length * width;
  const perimeter = 2 * (length + width);
  
  const areaEl = document.getElementById('granit_area');
  const perimeterEl = document.getElementById('granit_perimeter');
  
  if (areaEl) areaEl.textContent = area.toFixed(2);
  if (perimeterEl) perimeterEl.textContent = perimeter.toFixed(2);
}

function updateGranitPrice(itemName, newPrice) {
  const price = parseFloat(newPrice) || 0;
  for (const category in BLAGO_SERVICES) {
    const item = BLAGO_SERVICES[category].find(i => i.name === itemName);
    if (item) {
      item.price = price;
      break;
    }
  }
}

function addGranitToCart(item) {
  const qtyInput = document.getElementById(`qty_${item.name}`);
  const qty = qtyInput ? parseFloat(qtyInput.value) || 1 : 1;
  
  // Для м/п, м2, м3 используем qty как meters, для остальных как штуки
  let meters = 1;
  let finalQty = 1;
  
  if (item.unit === 'м/п' || item.unit === 'м2' || item.unit === 'м3' || item.unit === 'у.е.') {
    meters = qty;
    finalQty = 1;
  } else {
    finalQty = qty;
    meters = 1;
  }
  
  state.cart.push({ ...item, id: Date.now(), qty: finalQty, meters });
  updateCartCount();
  saveState();
  
  if (qtyInput) qtyInput.value = 1;
}

function updateGranitPriceBYN(itemName, newPriceBYN) {
  const priceBYN = parseFloat(newPriceBYN) || 0;
  
  for (const category in BLAGO_SERVICES) {
    const item = BLAGO_SERVICES[category].find(i => i.name === itemName);
    if (item) {
      item.price = priceBYN;
      break;
    }
  }
}

function filterGranitItems() {
  const query = document.getElementById('granit_search').value.toLowerCase();
  const rows = document.querySelectorAll('.granit-service-row');
  
  rows.forEach(row => {
    const name = row.dataset.name || '';
    if (query === '' || name.includes(query)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// ═══ INITIALIZATION ══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateCartCount();
  switchMode(state.currentMode); // Восстанавливаем режим
  switchTab(state.currentTab); // Восстанавливаем вкладку
  calcGranite();
  updateGraniteColors('mansurovsky');
  applyTheme();
  
  // Set today's date
  document.getElementById('order_date').value = new Date().toISOString().split('T')[0];
});
