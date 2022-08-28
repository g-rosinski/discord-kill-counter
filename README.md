# discord-kill-counter
Bot de discord para contar muertes en juegos

## Estructura del proyecto Project
Estructura básica del proyecto:

```
├── src    -> short, feature-specific sample apps
│   ├── commands    -> slash command payloads
│   ├   ├── index.ts    -> indice con los comandos disponibles
│   ├   ├── ping.ts     -> ejemplo de comando
│   ├── events      -> eventos del cliente de Discord
│   ├   ├── index.ts    -> indice con los eventos disponibles
│   ├── handlers    -> manejadores de eventos y datos 
│   ├── scripts
│   ├── types       -> archivos de tipados e interfaces
│   ├── utils       -> formatters + helpers
│   ├── app.ts      -> logica principal de la app
├── .env.sample -> sample .env file
├── package.json
├── tsconfig.json
├── LICENSE
├── README.md
└── .gitignore
```

## Levantar app local

Requerimiento: Es necesario [crear una aplicacion de Discord](https://discord.com/developers/applications) y asignalres loes permisos:
- `applications.commands`
- `bot` (con Send Messages habilitado)

Documentacion de Discord -> [acá](https://discord.com/developers/docs/getting-started).
### Setup

```
git clone https://github.com/g-rosinski/discord-kill-counter.git
cd discord-example-app
npm install
```
### Credenciales

Obtener las credenciales de la configuración de la app y setearlas en el archivo `.env` (revisar el ejemplo `.env.sample`). Será necesarioapp ID (`APP_ID`), server ID (`GUILD_ID`), bot token (`BOT_TOKEN`), and public key (`PUBLIC_KEY`).

Cualquier cosa revisar el tutorial en la [documentación de Discord](https://discord.com/developers/docs/tutorials/hosting-on-cloudflare-workers#creating-an-app-on-discord).

> 🔑 Variables de ambiente serán agregados en el archivo `.env` .

### Start

Una vez seteado las variables de ambiente, estaría listo para iniciar la app:

```
npm run start
```

## Link utiles
- **[Documentación](https://discord.com/developers/docs/intro)**.
- **[Servidor de desarrolladores de Discord](https://discord.gg/discord-developers)**.
- **[Recursos de la comunidad](https://discord.com/developers/docs/topics/community-resources#community-resources)**.