<h1 align="center">Clima App — Previsão do Tempo em Tempo Real</h1>

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

O Clima App é um site moderno de previsão do tempo desenvolvido em **Next.js**, utilizando a **OpenWeatherMap API** para fornecer informações atualizadas sobre clima, previsão por hora, previsão para os próximos dias, um sistema de busca inteligente de cidades e interface totalmente responsiva.

# Funcionalidades
- **Busca inteligente de cidades**
* Autocomplete conforme o usuário digita
* Usando **OpenWeather Geocoding API**
* Sugestões com cidade, estado e país
* Pesquisa global

- **Informações exibidas**
* Cidade
* Estado
* País
* Última atualização
* Descrição do tempo
* Ícone oficial do clima
* Temperatura atual

- **Previsão detalhada**
* Previsão por hora (com ícones)
* Previsão dos próximos dias (com ícones)
* Temperaturas mínima e máxima

- **Interface adaptável**
* Tema dinâmico com base em: dia/noite e tempo limpo/nublado/chuvoso
* Cores automáticas
* 100% responsivo

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
- app/ (`globals.css`, `layout.tsx`, `page.tsx`)
- components/ (`navbar.tsx`, `main-weather.tsx`, `additional-info.tsx`, `hourly-forecast-card.tsx`, `daily-forecast-card.tsx`, `footer.tsx`)
- `.env.local`

# Instalação
- **Passo 1:** Clone o repositório
git clone https://github.com/victorsampaio18/clima-app.git
`cd weather-website`

- **Passo 2:** Instale as dependências
`npm install`

- **Passo 2.1:** Se estiver usando Mac, instale o pods no iOS
`npx pod-install`

- **Passo 3:** Execute o app
`npm run dev`

# Autor
Developed by **Victor Sampaio de Almeida**
Powered by **OpenWeatherMap API**

# Licença
Este projeto está licenciado sob a **MIT License** e é de uso livre para estudos e aprimoramento pessoal.
Distribuições comerciais devem creditar a **API OpenWeatherMap**.
