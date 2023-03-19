import Notiflix from 'notiflix';

const form = document.querySelector('.form')
const inputDelayEl = document.querySelector("input[name=delay]");
const inputStepEl = document.querySelector("input[name=step]");
const inputAmountEl = document.querySelector("input[name=amount]");

inputDelayEl.addEventListener('input', handleDelay);
inputStepEl.addEventListener('input', handleStep);
inputAmountEl.addEventListener('input', handleAmount);
form.addEventListener('submit', handleBtnCreate);

function handleDelay() {
    const delayValue = inputDelayEl.value;
    const delayLs = localStorage.setItem("delay", delayValue);
}
function handleStep() {
    const stepValue = inputStepEl.value;
    const stepLs = localStorage.setItem("step", stepValue);
}
function handleAmount() {
    const amountValue = inputAmountEl.value;
    const amountLs = localStorage.setItem("amount", amountValue);
}

function createPromise(position, delay) {
    
    return promise = new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });
            } reject({ position, delay });
        }, delay);
    })
}

function handleBtnCreate(event) {
    event.preventDefault();
    
    const delayLsGet = localStorage.getItem("delay");
    const stepLsGet = localStorage.getItem("step");
    const amountLsGet = localStorage.getItem("amount");
    const amount = JSON.parse(amountLsGet); 
    const step = JSON.parse(stepLsGet);
    let delay = JSON.parse(delayLsGet);
    
    for (let position = 1; position <= amount; position += 1){
            
           createPromise(position, delay)
                .then(({ position, delay }) => {
                   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
                })
                .catch(({ position, delay }) => {
                    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
                });
        delay +=  step;
    }
    
}


