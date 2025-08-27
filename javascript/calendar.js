console.log(process.argv);

const today = new Date;

if (process.argv.length === 2){
    year = today.getFullYear();
    month = today.getMonth() + 1;
} else if (process.argv.length === 4 && process.argv[2] === "-m") {
    year = today.getFullYear();
    const inputMonth = process.argv[3];
    const monthNum = parseInt(inputMonth);
    if (isNaN(monthNum)){
        console.log("数字で入力してください");
        process.exit(1);
    } else if (monthNum < 1 || monthNum > 12){
        console.log("1~12の数字を入力してください");
        process.exit(1);
    } 
    month = monthNum;
}

const header = `日 月 火 水 木 金 土`;

const dateInMonth = new Date(year, month, 0).getDate();

const firstDay = new Date(year, month -1, 1);
const startDay = firstDay.getDay();

 let calendarText = " ";
 for (let i = 0; i < 42; i++) {
    if(i < startDay){
        calendarText += " ".padStart(2, " ");
    }else if(i < startDay + dateInMonth){
        const currentDay = i - startDay + 1;
        calendarText += String(currentDay).padStart(2, " ");
    }else{
        calendarText += " ".padStart(2, " ");
    }

    if((i + 1) % 7 === 0){
        calendarText += "\n";
    } else{
        calendarText += " ";
    }
 }

 const calendarDisplay = `    ${year}年${month}月
${header}
${calendarText}`;

console.log(calendarDisplay);