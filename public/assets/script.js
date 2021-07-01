const spinner = document.querySelector("#spinner");
const rates = document.querySelector(".rates");
const ratesTable = document.querySelector(".rates-table");
const ratesInfo = document.querySelector(".rates-info");
const dateDOM = document.querySelector(".date");

fetch("http://localhost:5000/rates",  {mode: 'cors'})
    .then(res => res.text())
    .then(body => {
        // setTimeout(() => {
            const data = JSON.parse(body);
            console.log(data)
            spinner.setAttribute("hidden", "hidden");
            rates.removeAttribute("hidden");
            
            let date = new Date(data[0].Date);

            dateDOM.innerHTML = `${date.getDate() < 10?("0"+date.getDate()):(date.getDate())}.${date.getMonth() < 10?("0"+date.getMonth()):(date.getMonth())}.${date.getFullYear()}`;
            dateDOM.setAttribute("datetime", date);
            data.forEach(d => {
                ratesInfo.innerHTML += `<tr>
                                            <td>${d.Cur_Name}</td>
                                            <td>${d.Cur_Scale} ${d.Cur_Abbreviation}</td>
                                            <td>${d.Cur_OfficialRate}</td>
                                        </tr>`
            })
            
        // }, 1000)
    })
    .catch((err) => {
        console.log("Данные не получены...");
        console.error(err);
    })