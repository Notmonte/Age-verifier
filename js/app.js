
const today = new Date();

const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate();

const checkbox = document.getElementById('checkbox')

const dateInput = document.getElementById('dateInput');
console.log(checkbox)

const message = document.getElementById('message');
let messageText = "";



// console.log(dateInput);

const validate =()=> {
    const isChecked = checkbox.checked;
    
    
    let messageText;
    if (!isChecked) {
        messageText = 'Please check the box to verify your age';
        message.innerHTML = `
        ${messageText};
        `
    } else {
        messageText = "";
        getDOB();
    }
}


const getDOB =()=> {
    const userDate = new Date(dateInput.value);
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    verifyAge(userYear, userMonth, userDay);
};


const verifyAge = (year, month, day)=> {
    const userYear = year;
    const userMonth = month;
    const userDay = day;


    if(validYear >= userYear) {
        if (userMonth >= validMonth) {
            if (userDay >= validDay) {
                messageText = "day is valid";
                message.innerHTML = `
                ${messageText};
                `
            } else {
            messageText = "Acess is Denied";
            message.innerHTML = `
                ${messageText};
                `
            } 
        } else {
        messageText = "Acess Denied";
        message.innerHTML = `
                ${messageText};
                `
        } 
        } else {
            messageText = 'access denied';
            message.innerHTML = `
                ${messageText};
                `
        }

};
