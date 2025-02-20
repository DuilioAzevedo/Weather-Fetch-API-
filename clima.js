const API_KEY = "e092f48805e6967ddbdf0f49eec0e62e"; 

export async function buscarClima(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`;

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Erro ao obter dados do clima");
        return await resposta.json();
    } catch (erro) {
        console.error("Erro na API:", erro);
        return null;
    }
}
