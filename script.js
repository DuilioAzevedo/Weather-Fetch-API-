import { buscarClima } from "./clima.js";

function obterLocalizacao() {
    if (!navigator.geolocation) {
        alert("Geolocalização não suportada pelo seu navegador.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (posicao) => {
        const { latitude, longitude } = posicao.coords;

        document.getElementById("localizacao").textContent = `Localização: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;

        const dadosClima = await buscarClima(latitude, longitude);
        if (dadosClima) {
            document.getElementById("temperatura").textContent = dadosClima.main.temp;
            document.getElementById("condicao").textContent = dadosClima.weather[0].description;
            document.getElementById("umidade").textContent = dadosClima.main.humidity;
        }
    }, (erro) => {
        console.error("Erro ao obter localização:", erro);
        alert("Não foi possível obter sua localização.");
    });
}

obterLocalizacao();

