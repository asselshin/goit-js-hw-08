import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

recordedText();
form.addEventListener('input', throttle(()=>{savedLocalStorage()},500));

form.addEventListener('submit', evt => {
  evt.preventDefault();
  recordedText();
  form.reset();
  localStorage.clear();
});

function savedLocalStorage() {
  try {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (email !== '' || message !=='') {
      const formText = {
        email,
        message,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formText));          
    }
  } catch (error) {
    console.log('Set state error: ', error.message);
  }
};

function recordedText() {
  try {
    const savedFormText = localStorage.getItem('feedback-form-state');
    if (savedFormText !== null) {
      const parsedSavedFormText = JSON.parse(savedFormText);
      form.email.value = parsedSavedFormText.email;
      form.message.value = parsedSavedFormText.message;
      if (form.email.value !== '' && form.message.value !== '') {
        console.log(parsedSavedFormText);        
      } 
    }
  } catch (error) {
    console.log('Get state error: ', error.message);
  }
};