const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://es.investing.com/currencies/streaming-forex-rates-majors'

let i=0;
axios(url)
.then(response =>{
const html = response.data;
const $ = cheerio.load(html);
console.log('CURRENCY  BID      ASK');
console.log('EUR/USD:$ %s $ %s',$('.pid-1-bid').text(),$('.pid-1-ask').text())
console.log('USD/GBP:$ %s $ %s',$('.pid-2-bid').text(),$('.pid-2-ask').text())
console.log('USD/JPY:$ %s $ %s',$('.pid-3-bid').text(),$('.pid-3-ask').text())
console.log('USD/CHF:$ %s $ %s',$('.pid-4-bid').text(),$('.pid-4-ask').text())
console.log('ETH/USD:$ %s $ %s',$('.pid-1058142-bid').text(),$('.pid-1058142-ask').text())
console.log('BTC/USD:$ %s $ %s',$('.pid-945629-bid').text(),$('.pid-945629-ask').text())
})
.catch(console.error);


