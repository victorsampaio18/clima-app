<h1 align="center">Clima App — Previsão do Tempo em Tempo Real</h1>

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

O Clima App é um site moderno de previsão do tempo desenvolvido em **Next.js**, utilizando a **OpenWeatherMap API** para fornecer informações atualizadas sobre clima, previsão por hora, previsão para os próximos dias, um sistema de busca inteligente de cidades e interface totalmente responsiva.

# Funcionalidades
- **Busca inteligente de cidades** <br>
Autocomplete conforme o usuário digita <br>
Usando **OpenWeather Geocoding API** <br>
Sugestões com cidade, estado e país <br>
Pesquisa global

- **Informações exibidas** <br>
Cidade <br>
Estado <br>
País <br>
Última atualização <br>
Descrição do tempo <br>
Ícone oficial do clima <br>
Temperatura atual

- **Previsão detalhada** <br>
Previsão por hora (com ícones) <br>
Previsão dos próximos dias (com ícones) <br>
Temperaturas mínima e máxima

- **Interface adaptável** <br>
Tema dinâmico com base em: dia/noite e tempo limpo/nublado/chuvoso <br>
Cores automáticas <br>
100% responsivo

# Tecnologias Utilizadas
- **Next.js 14**
- **React**
- **TypeScript**
- **TailwindCSS**
- **OpenWeatherMap API**
- **App Router**

# Configurando API
- Criar uma conta na [OpenWeatherMap](https://openweathermap.org/)
- Criar um arquivo `.env.local`
- Adicionar esse código:
```ts
NEXT_PUBLIC_OPENWEATHER_API_KEY=SUA_API_KEY
```

# Estrutura do Projeto (src)
- **app/** <br>
`globals.css` <br>
`layout.tsx` <br>
`page.tsx`
- **components/** <br>
`navbar.tsx` <br>
`main-weather.tsx` <br>
`additional-info.tsx` <br>
`hourly-forecast-card.tsx` <br>
`daily-forecast-card.tsx` <br>
`footer.tsx`
- .env.local

# Instalação
- **Passo 1:** Clone o repositório
git clone https://github.com/victorsampaio18/clima-app.git <br>
`cd weather-website`

- **Passo 2:** Instale as dependências <br>
`npm install`

- **Passo 2.1:** Se estiver usando Mac <br>
`npx pod-install`

- **Passo 3:** Execute o app <br>
`npm run dev`

# Autor
Developed by **Victor Sampaio de Almeida** <br>
Powered by **OpenWeatherMap API**

# Licença
Este projeto está licenciado sob a **MIT License** e é de uso livre para estudos e aprimoramento pessoal. <br>
Distribuições comerciais devem creditar a **API OpenWeatherMap**.
