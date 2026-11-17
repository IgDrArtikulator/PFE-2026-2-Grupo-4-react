# PFE-2026-2-Grupo-4-react

Integrantes: Arthur Alves, Matheus Borges, Guilherme Buttignol, Igor Santos, Lucas Cunha e Caio Santos.

## Link Vercel

https://pfe-2026-2-grupo-4-react-qyqb.vercel.app/

## Executar localmente

```bash
npm ci
npm run dev
```

## Gerar a versão de produção

```bash
npm run build
npm run preview
```

Os arquivos de publicação são gerados na pasta `dist`.

## Publicar na Vercel

1. Envie as alterações, incluindo `vercel.json`, ao repositório no GitHub.
2. Importe o repositório como um novo projeto na Vercel.
3. Selecione a pasta que contém este `package.json` como Root Directory.
4. Confira Framework Preset: **Vite**, Build Command: `npm run build` e Output Directory: `dist`.
5. Execute o deploy pelo painel da Vercel.

O `vercel.json` configura o build e encaminha as rotas para `index.html`, mantendo o BrowserRouter.

Após publicar, abra diretamente e recarregue as rotas `/`, `/pkz`, `/one-to-one` e `/fisioterapia`. Confira também imagens, menu e agendamento. O agendamento usa armazenamento local do navegador; a publicação não adiciona um servidor de reservas.

Se forem necessárias variáveis de ambiente, cadastre-as no painel da Vercel. Arquivos `.env` e a pasta `.vercel` não são versionados.
