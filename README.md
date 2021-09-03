### Next.js install
```
npx create-next-app .
```
- ディレクトリ編集
src/pages, src/styles, src/components  


### tailwind install
```
npm i tailwindcss@latest postcss@latest autoprefixer@latest
```
```
npx tailwindcss init -p
```
- tailwind.config.js編集
```
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```
- globals.css編集
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### TS install
```
npm i -D typescript @types/react @types/node
```

- tsconfig.json作成&各ファイルを.tsxに変更
```
touch tsconfig.json

npm run dev
```
### module　install
```
npm i @apollo/client graphql @apollo/react-hooks 
```

### GraphQL codegen install
```
npm i -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/introspection @graphql-codegen/typescript-react-apollo
```

### Lint系 install
```
npm i -D eslint @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @typescript-eslint/parser eslint-config-prettier prettier
```

---

Hasura cloudでproject作成
console移動して,DataからHerokuDB作成
table作成

Auth0からapp作成
以後ココ　https://hasura.io/learn/graphql/hasura/authentication/1-create-auth0-app/

```
npm i @auth0/auth0-react
```
