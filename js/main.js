// Functions for radio inputs
const formRadios = document.querySelectorAll('input[type="radio"]');

function saveFormRadios() {
  formRadios.forEach((input) => {
    let inputName = input.name;
    let inputValue = input.value;
    if (input.checked) {
      localStorage.setItem(inputName, inputValue);
    }
  });
}

function loadFormRadios() {
  formRadios.forEach((input) => {
    let inputName = input.name;
    let storedValue = localStorage.getItem(inputName);
    if (storedValue && input.value === storedValue) {
      input.checked = true;
    }
  });
}

formRadios.forEach((input) => {
  input.addEventListener('change', saveFormRadios);
});

loadFormRadios();

// Functions for normal inputs
const formInputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea, input[type="week"]',
);

const saveInput = () => {
  formInputs.forEach((input) => {
    const inputName = input.name;
    const inputValue = input.value;
    localStorage.setItem(inputName, inputValue);
  });
};

const loadInput = () => {
  formInputs.forEach((input) => {
    const inputName = input.name;
    let storedValue = localStorage.getItem(inputName);
    if (storedValue) {
      input.value = storedValue;
    }
  });
};

formInputs.forEach((input) => {
  input.addEventListener('input', saveInput);
});

loadInput();
