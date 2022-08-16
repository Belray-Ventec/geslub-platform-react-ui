# geslub-platform-react-ui

### Instalar libreria

```terminal
npm i git+https://github.com/Belray-Ventec/geslub-platform-react-ui.git
```


## Instalación

Instalar dependencias

```powershell
cd geslub-platform-react-ui  // si no te encuentras dentro del repositorio
npm install
```

## Iniciar Storybook

```
npm run storybook
```

## Modo de uso

### Table

```Javascript
import { Table } from 'geslub-platform-react-ui';

export default function Component(): {

		return (
				<Table  />
		)

}
```

| Propiedad    | Tipo                                                                             | Requerida |
| ------------ | -------------------------------------------------------------------------------- | --------- |
| initialData  | `T[]`                                                                            | si        |
| columns      | `{ label: string; getValue: (item: T) => React.ReactNode }[]` | si        |
| getRowKey    | Function `(d: T) => string`                                                      | si        |
| itemsPerPage | `number`                                                                         | si        |
| actions      | `label: string; callback: (d: T) => void }[]`                                    | si        |
| themeColor   | `string`                                                                         | no        |
| showPages    | `boolean`                                                                        | no        |
| showInfo     | `boolean`                                                                        | no        |
| showShare    | `boolean`                                                                        | no        |
| showDownload | `boolean`                                                                        | no        |
| showSee      | `boolean`                                                                        | no        |
| caption      | `string`                                                                         | no        |
