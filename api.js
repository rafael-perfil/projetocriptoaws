console.log('Usando Fetch');
function selectCoin(idCoin){
    const stringIdCoin = idCoin.toString();

    console.log(stringIdCoin);
    fetch(`https://www.mercadobitcoin.net/api/${stringIdCoin}/ticker/`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
            var valorCoinLast = JSON.parse(data.ticker.last)
            var valorCoinHigh = JSON.parse(data.ticker.high)
            var valorCoinLow = JSON.parse(data.ticker.low)
            var volumeCoin = JSON.parse(data.ticker.vol)
            var dataCoin = JSON.parse(data.ticker.date)

            var valorCoinLast = valorCoinLast.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            var valorCoinHigh = valorCoinHigh.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            var valorCoinLow = valorCoinLow.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            var volumeCoin = volumeCoin

            var timestamp = dataCoin 
            var date = new Date(timestamp * 1000);

            console.log(valorCoinLast);
            console.log(valorCoinHigh);
            console.log(valorCoinLow);
            document.getElementById("valorLastExibir").innerText = "Preço unitário da última negociação:" + valorCoinLast; 
            document.getElementById("valorHighExibir").innerText = "Maior preço unitário de negociação das últimas 24 horas: " + valorCoinHigh; 
            document.getElementById("valorLowExibir").innerText = "Menor preço unitário de negociação das últimas 24 horas: " + valorCoinLow; 
            document.getElementById("volumeExibir").innerText = "Quantidade negociada nas últimas 24 horas: " + volumeCoin; 
            document.getElementById("idDataCoin").innerText = "Data da consulta: " +date.getDate()+
                                                                 "/"+(date.getMonth()+1)+
                                                                "/"+date.getFullYear()+
                                                                 " "+date.getHours()+
                                                                  ":"+date.getMinutes()+
                                                                  ":"+date.getSeconds()
            document.getElementById("iconCoin").src = "img/" + [stringIdCoin] + ".png"
            document.getElementById("iconCoin").style.border = "7px double"
            document.getElementById("iconCoin").style.background = "#92989b"
          
            google.charts.load('current', {'packages':['bar']});
            google.charts.setOnLoadCallback(drawChart);
      
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
                ['Cotações das últimas 24 horas', 'Última negociação mais baixa','Última negociação','Última negociação mais alta', 
                'Volume negociado'],
                [stringIdCoin,valorCoinLow, valorCoinLast, valorCoinHigh, volumeCoin ],
                
              ]);
      
              var options = {
                width: 815,
                heigth: 500,
                chart: {
                  title: 'Informações em Gráfico:',
                  subtitle: '',
               
                }
              };
      
              var chart = new google.charts.Bar(document.getElementById('graficoBarra'));
             
              chart.draw(data, google.charts.Bar.convertOptions(options));
            }

     
        
                 
    } )}


    