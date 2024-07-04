import { parseURL } from "../constants";

async function fetchData() {
//   const array = ["2024-07-01", "2024-06-30", "2024-06-29"];

//   for (let index = 0; index < 3; index++) {
//     const API_URL = parseURL("Buenos Aires", array[index]);

//     const res = await fetch(API_URL);
//     const body = await res.json();

//     const { maxtemp_c, mintemp_c } = body.forecast.forecastday[0].day;

//     console.log(`día ${index+1} `,maxtemp_c, mintemp_c);
//   }

    const date = "2024-07-03"
    
    let day = parseInt(date.split("-")[2])
    let month = parseInt(date.split("-")[1])

    for (let index = 0; index < 3; index++) {
      if(day >= 1) {
          day -= 1      
        }

      if(day <1) {
            month -= 1
            day = 30
        }

        const fullDate = `2024-${month}-${day}`
    
    const API_URL = parseURL("Buenos Aires", fullDate);

    const res = await fetch(API_URL);
    const body = await res.json();

    const { maxtemp_c, mintemp_c } = body.forecast.forecastday[0].day;

    console.log(`día ${index+1} `,maxtemp_c, mintemp_c);
  }

}

fetchData();
