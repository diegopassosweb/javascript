// Date

const data1 = new Date();
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019,03,06,9,30); // começa a contar a partir do 0
data3.setFullYear(2030); // define novo ano
date3.toDateString()// converte o objeto para string
date3.toTimeString()// inclui o tempo local
date3.toISOString() // formato para transferir a informaçao do client para serv



console.log(data3);
