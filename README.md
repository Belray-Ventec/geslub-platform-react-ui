# geslub-platform-react-ui

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

## Configuración para usar libreria
Generar dist

```
npm run build
```

Crear package.json

```
cd dist
npm init
```

### Instalar libreria de forma local

1. en tu proyecto ejecutar **_(importante remplazar directorio por el de tu carpeta dist)_**

```
npm install D:\Documentos\React\geslub-platform-react-ui\dist
```

### Instalar libreria a traves de github

1. Subir directorio **dist** a un repositorio de github
2. en tu proyecto ejecutar **(importante remplazar la url por la de tu repositorio)**

```terminal
npm install https://github.com/username/your-repository.git
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
