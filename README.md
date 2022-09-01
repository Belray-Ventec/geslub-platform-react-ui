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
			<Table  
			data={[{id: 1, name: 'ProductName', price. 21},
			{id: 2, name: 	'ProductName2', price. 50}
			]}
			columns={[{label: 'name', getValue: (item) => item.name}, {label: 'price', getValue: (item) => item.price}]}
			getRowKey={(item) => item.id}
			onDelete={(items) = {console.log(items)}}
			/>
	)

}
```

| Propiedad    | Tipo                                                                             | Requerida |
| ------------ | -------------------------------------------------------------------------------- | --------- |
| data	       | `T[]`                                                                            | si        |
| columns      | `{ label: string; getValue: (item: T) => React.ReactNode }[]`                    | si        |
| getRowKey    | `(d: T) => string  number`                                               | si        |
| onDelete     | `(d: T[]) => void`                                                      | no       |
| itemsPerPage | `number`                                                                         | no        |
| actions      | `label: string; callback: (d: T) => void }[]`                                    | no        |
| themeColor   | `string`                                                                         | no        |
| showPages    | `boolean`                                                                        | no        |
| showHeaderButtons    | `boolean`                                                                | no        |
| showAdminOptions      | `boolean`                                                                | no        |
| showInfo     | `boolean`                                                                        | no        |
| showShare    | `boolean`                                                                        | no        |
| showDownload | `boolean`                                                                        | no        |
| showSee      | `boolean`                                                                        | no        |
| caption      | `string`                                                                         | no        |
| add          | `() => void`                                                            | no        |
| share        | `() => void`                                                            | no        |
| onEdit       | `(d: T) => void`                                                        | no        |
| onDeleteItem | `(d: T) => void`                                                        | no        |
| onSee        | `(d: T) => void`                                                        | no        |
| onDownload   | `(d: T) => void`                                                        | no        |
| onInfo       | `(d: T) => void`                                                        | no        |
| onShare      | `(d: T) => void`                                                        | no        |


### Search

```Javascript
import { Search } from 'geslub-platform-react-ui';

export default function Component(): {

	const onSearchFn = (search: string) => { console.log(search) }

	return (
            <Search
                handleSearch={(search: string) => onSearchFn(search)}
                timeDebounce={500}
            />
	)

}
```

| Propiedad    | Tipo                                                                             | Requerida |
| ------------ | -------------------------------------------------------------------------------- | --------- |
| handleSearch | `(search: string) => void`                                              | si        |
| timeDebounce | `number`                                                                         | no        |



### Tag

```Javascript
import { Tag } from 'geslub-platform-react-ui';

export default function Component(): {

	const onClickFn = () => {}

	return (
            <Tag color='#fff' backgroundColor='#00a65a' onClick={() => onClickFn()}>Editar</Tag>
	)

}
```

| Propiedad       | Tipo                                                                             | Requerida |
| --------------- | -------------------------------------------------------------------------------- | --------- |
| color           | `string`                                                                         | no        |
| backgroundColor | `number`                                                                         | no        |
| onClick         | `(text: string) => void`                                                | no        |



### TagList

```Javascript
import { TagList } from 'geslub-platform-react-ui';

export default function Component(): {

	const tags = [{id:1, name: 'Tag 1'}, {id:1, name: 'Tag 2'}]

	return (
            <TagList 
			data={tags}
			getRowKey={(tag) => tag.id}
		    getValue={(tag) => tag.name}
			align='left' 
			rounded 
			 />
	)

}
```

| Propiedad       | Tipo                                                                             | Requerida |
| --------------- | -------------------------------------------------------------------------------- | --------- |
| data	          | `T[]`                                                                            | si        |
| getRowKey       | `(d: T) => string  number`                                             | si        |
| getValue        | `(d: T) => string  number`                                             | si        |
| backgroundColor | `number`                                                                         | no        |
| color           | `string`                                                                         | no        |
| onClick         | `(item: string) => void`                                                | no        |
| rounded         | `boolean`                                                                        | no        |
| align           | `'left'  'center'  'right'`                                                    | no        |


