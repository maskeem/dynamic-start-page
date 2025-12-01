voir https://chatgpt.com/c/68e019e8-7bf8-8328-a52f-bb54de7e7399

## Fait après première init :
* projet changé en workspace (création de pnpm-workspace.yaml)
* créé dossiers de chaque package (backend, frontend, extension, mobile, shared)
* installé prisma et prisma/client, fait `pnpm prisma init` mais pas `migrate`
* pour utiliser une méthode ou un type depuis shared : `pnpm add @dynamic/shared -F backend`

## À faire :
* finir config TS (tsconfig.json à la racine + un dans chaque dossier avec `extends`)
