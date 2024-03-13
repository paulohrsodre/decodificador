const checkbox = document.getElementById('tema-escuro');
const logo = document.getElementById('logo');
const info = document.getElementById('info');
const imagem = document.getElementById('resultado_imagem')
const body = document.body;
const root = document.documentElement;

const lightLogo = './assets/Logo.svg'; // Path to your light mode logo
const darkLogo = './assets/Logo-dm.svg'; // Path to your dark mode logo

const lightInfo = './assets/info.svg';
const darkInfo = './assets/info-dm.svg';

const lightImagem = './assets/character.svg';
const darkImagem = './assets/character-dm.svg';

const lightMode = {
  '--cor-principal': '#0A3871', // Main color (light mode)
  '--cor-secundaria': '#F3F5FC', // Background color (light mode)
  '--cor-terciaria': '#495057', // Text color (light mode)
  '--cor-quaternaria': '#FFF', // White (light mode)
  '--cor-quintenaria': '#D8DFE8',
  '--preto': '#000', // Black (light mode)
};

const darkMode = {
  '--cor-principal': '#FF8E2B', // Main color (dark mode)
  '--cor-secundaria': '#0D2137', // Background color (dark mode)
  '--cor-terciaria': '#E0EAF5', // Text color (dark mode)
  '--cor-quaternaria': '#183C57', // Black (dark mode)
  '--cor-quintenaria': '#183C57',
  '--preto': '#E0EAF5', // White (dark mode)
};

checkbox.addEventListener('change', () => {
  const currentTheme = checkbox.checked ? darkMode : lightMode;
  for (const [key, value] of Object.entries(currentTheme)) {
    root.style.setProperty(key, value);
  }
  body.classList.toggle('tema-escuro');
  logo.src = currentTheme === darkMode ? darkLogo : lightLogo;
  info.src = currentTheme === darkMode ? darkInfo : lightInfo;
  imagem.src = currentTheme === darkMode ? darkImagem : lightImagem;
});