/* Counting Sundays */


const current_year = 2021
let months = []
const DAYS = ['mon','tue','wed','thurs','fri','sat','sun'];
let totalSundays = 0;

let new_month_start = 4

for(let year = 1901 ;year < 2000; year++){
    if(year%4)
        days = [31,28,31,30,31,30,31,31,30,31,30,31]
    else
        days = [31,29,31,30,31,30,31,31,30,31,30,31]
    

    for(let month = 0; month < 12; month++){

            // console.log(DAYS[new_month_start])
            if(new_month_start == 6)
                ++totalSundays

            if(days[month] == 31)
                new_month_start = (new_month_start + 3)%7

            if(days[month] == 30)
                new_month_start = (new_month_start + 2)%7

            if(days[month] == 28)
                new_month_start = new_month_start 
            if(days[month] == 29)
                new_month_start = (new_month_start + 1) % 7 

        }

}

console.log(totalSundays)
    