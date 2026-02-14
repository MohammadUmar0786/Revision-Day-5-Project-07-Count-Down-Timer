const h2 = document.querySelector('h2');

setInterval(()=>{

    const currentDate = new Date()
    const independenceDate = new Date("2026-08-15");
    const finalDate = independenceDate-currentDate; // Total milliseconds
    
    // Total Days
    const days = Math.floor(finalDate/(1000*60*60*24));

    // Total hours
    const hours = Math.floor(finalDate/(1000*60*60))%24;

    // Total Minutes
    const minutes = Math.floor(finalDate/(1000*60))%60;

    // Total seconds
    const seconds = Math.floor(finalDate/(1000))%60;

    h2.innerText = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;

})

    