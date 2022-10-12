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

| Propiedad         | Tipo                                                          | Requerida |
| ----------------- | ------------------------------------------------------------- | --------- |
| data              | `T[]`                                                         | si        |
| columns           | `{ label: string; getValue: (item: T) => React.ReactNode }[]` | si        |
| getRowKey         | `(d: T) => string number`                                     | si        |
| onDelete          | `(d: T[]) => void`                                            | no        |
| itemsPerPage      | `number`                                                      | no        |
| actions           | `label: string; callback: (d: T) => void }[]`                 | no        |
| themeColor        | `string`                                                      | no        |
| showPages         | `boolean`                                                     | no        |
| showHeaderButtons | `boolean`                                                     | no        |
| showAdminOptions  | `boolean`                                                     | no        |
| showInfo          | `boolean`                                                     | no        |
| showShare         | `boolean`                                                     | no        |
| showDownload      | `boolean`                                                     | no        |
| showSee           | `boolean`                                                     | no        |
| caption           | `string`                                                      | no        |
| add               | `() => void`                                                  | no        |
| share             | `() => void`                                                  | no        |
| onEdit            | `(d: T) => void`                                              | no        |
| onDeleteItem      | `(d: T) => void`                                              | no        |
| onSee             | `(d: T) => void`                                              | no        |
| onDownload        | `(d: T) => void`                                              | no        |
| onInfo            | `(d: T) => void`                                              | no        |
| onShare           | `(d: T) => void`                                              | no        |

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

| Propiedad    | Tipo                       | Requerida |
| ------------ | -------------------------- | --------- |
| handleSearch | `(search: string) => void` | si        |
| timeDebounce | `number`                   | no        |

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

| Propiedad       | Tipo                     | Requerida |
| --------------- | ------------------------ | --------- |
| color           | `string`                 | no        |
| backgroundColor | `number`                 | no        |
| onClick         | `(text: string) => void` | no        |

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

| Propiedad       | Tipo                      | Requerida |
| --------------- | ------------------------- | --------- |
| data            | `T[]`                     | si        |
| getRowKey       | `(d: T) => string number` | si        |
| getValue        | `(d: T) => string number` | si        |
| backgroundColor | `number`                  | no        |
| color           | `string`                  | no        |
| onClick         | `(item: string) => void`  | no        |
| rounded         | `boolean`                 | no        |
| align           | `'left' 'center' 'right'` | no        |

### Drawer

```Javascript
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Drawer, DrawerItem, DrawerSubItem } from 'geslub-platform-react-ui';

export default function Component(): {

  const [isOpen, setIsOpen] = useState(false);

  const SUB_MENU = [{
                      label: 'Home',
                      icon: <Icon icon="Home" size={25} color='#fff' /> ,
                      to: '/'
                    },
                    {
                      label: "Lubricantes Especiales",
                      icon: <Icon icon='Document' size={25} color='#fff'/>,
                      sub: [
                        { label: "Información técnica", to: '/informacion-tecnica' },
                        { label: "Certificados", to: '/certificados' },
                        { label: "Marketing", to: '/marketing' },
                        { label: "Testimoniales", to: '/testimoniales' },
                        { label: "OEM", to: '/oem' },
                        ],
                      }]

	return (
                <Drawer
                    title="Geslub Platform"
                    isOpen={isOpen}

                    onStateChange={() => setIsOpen(!isOpen)}
                />

                {SUB_MENU.map((listItem) =>
                  listItem.sub ? (
                    <DrawerSubItem
                      title={listItem.label}
                      isOpen={isOpen}
                      onStateChange={() => setIsOpen(!isOpen)}
                      key={listItem.label}
                      icon={listItem.icon}
                    >
                    {listItem.sub.map((subItem) => (
                      <Link to={subItem.to}>
                          <DrawerItem
                            isOpen={isOpen}
                            key={subItem.label}
                            icon={subItem.icon}
                          >
                            {subItem.label}
                          </DrawerItem>
                      </Link>
                    ))}
                    </DrawerSubItem>
                  ) : (
                    <Link to={listItem.to}>
                        <DrawerItem
                          isOpen={isOpen}
                          key={listItem.label}
                          icon={listItem.icon}
                          isActive={listItem.isActive}
                        >
                          {listItem.label}
                        </DrawerItem>
                    </Link>
                  )

                </Drawer>
				<App />
	)

}
```

| Propiedad     | Tipo         | Descripcion                                                                        | Requerida |
| ------------- | ------------ | ---------------------------------------------------------------------------------- | --------- |
| isOpen        | `boolean`    |                                                                                    | si        |
| onStateChange | `() => void` | Maneja el estado del Drawer (setState(!state))                                     | si        |
| title         | `ReactNode`  |                                                                                    | no        |
| logo          | `string`     |                                                                                    | no        |
| themeColor    | `string`     |                                                                                    | no        |
| children      | `ReactNode`  | Contenido del Drawer se suguiere utilizar el componente DrawerItem o DrawerSubItem | si        |

#### DrawerItem

| Propiedad | Tipo        | Descripcion                                    | Requerida |
| --------- | ----------- | ---------------------------------------------- | --------- |
| isOpen    | `boolean`   |                                                | si        |
| icon      | `ReactNode` | Maneja el estado del Drawer (setState(!state)) | no        |
| isActive  | `boolean`   | Establece de color el item activo              | no        |
| children  | `string`    | Titulo                                         | no        |

### Heading

```Javascript
import { Heading } from 'geslub-platform-react-ui';

export default function Component(): {


	return (
      <Heading isNoWrap as="h2" size="4xs" color="#000">
        AJUSTES PERSONALES
      </Heading>
	)

}
```

| Propiedad | Tipo                                             | Requerida |
| --------- | ------------------------------------------------ | --------- |
| as        | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' `  | no        |
| size      | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' ` | no        |
| isBold    | `boolean `                                       | no        |
| isItalic  | `boolean `                                       | no        |
| color     | `string `                                        | no        |
| children  | `ReactNode`                                      | si        |

### Avatar

```Javascript
import { Avatar } from 'geslub-platform-react-ui';

export default function Component(): {


	return (
        <Avatar
          size="2xl"
          src="https://i.imgur.com/TutKhdx.jpg"
          title="Developer"
        />
	)

}
```

| Propiedad | Tipo                                                      | Requerida |
| --------- | --------------------------------------------------------- | --------- |
| title     | `string`                                                  | no        |
| size      | `'xs' \| 'sm' \| 'md' \| 'lg' \| '2xs' \| 'xl' \| '2xl' ` | no        |
| src       | `string`                                                  | no        |

### Paragraph

```Javascript
import { Paragraph } from 'geslub-platform-react-ui';

export default function Component(): {


	return (
        <Paragraph as='p' size='sm' >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        </Paragraph>
	)

}
```

| Propiedad | Tipo                                         | Requerida |
| --------- | -------------------------------------------- | --------- |
| as        | `'p' \| 'span' \| 'div' `                    | no        |
| size      | `'xs' \| 'sm' \| 'md' \| 'lg'`               | no        |
| isBold    | `boolean `                                   | no        |
| isItalic  | `boolean `                                   | no        |
| isStriked | `boolean `                                   | no        |
| align     | `'right' \| 'center' \| 'left' \| 'justify'` | no        |
| color     | `string `                                    | no        |
| children  | `ReactNode`                                  | si        |

### AvatarDropDown

```Javascript
import { AvatarDropDown } from 'geslub-platform-react-ui';

export default function Component(): {


	return (
            <AvatarDropDown
              avatarTitle="Brian Cifuentes"
              badgeColor="green"
              color="#000"
              right
              size="md"
              src="https://i.imgur.com/Tlk89Es.jpg"
            >
              <Heading
                as="h2"
                color="#000"
                isNoWrap
                size="4xs"
              >
                Ajustes Personales
              </Heading>
              <hr />
              <Paragraph
                as="span"
                size="sm"
              >
                Brian Cifuentes
              </Paragraph>
              <Paragraph
                as="span"
                size="sm"
              >
                Administrador
              </Paragraph>
              <Button
                fullWidth
                primary
              >
                Salir
              </Button>
            </AvatarDropDown>
	)

}
```

| Propiedad   | Tipo                                                     | Requerida |
| ----------- | -------------------------------------------------------- | --------- |
| avatarTitle | `string`                                                 | no        |
| badgeColor  | `string`                                                 | no        |
| title       | `string`                                                 | no        |
| color       | `string`                                                 | no        |
| right       | `boolean`                                                | no        |
| size        | `'xs' \| 'sm' \| 'md' \| 'lg' \| '2xs' \| 'xl' \| '2xl'` | no        |
| children    | `ReactNode`                                              | si        |

### Header

```Javascript
import { AvatarDropDown, Heading, Divider, Paragraph, Button, Header } from 'geslub-platform-react-ui';

export default function Component(): {


	return (
  <Header title='Documentos Técnicos' titleSize='3xs'>
    <AvatarDropDown
      src="https://i.imgur.com/Tlk89Es.jpg"
      avatarTitle="Brian Cifuentes"
    >
      <Heading isNoWrap as="h2" size="4xs" color="#000">
        AJUSTES PERSONALES
      </Heading>
      <Divider />
      <Paragraph as="span" size="sm">
        Brian Cifuentes
      </Paragraph>
      <Paragraph as="span" size="xs">
        Administrador
      </Paragraph>
      <Button fullWidth primary>
        Salir
      </Button>
    </AvatarDropDown>
  </Header>
	)

}
```

| Propiedad | Tipo                                                              | Requerida |
| --------- | ----------------------------------------------------------------- | --------- |
| title     | `string`                                                          | si        |
| titleSize | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs' \| '2xs' \| '3xs' \| '4xs'` | no        |
| children  | `ReactNode`                                                       | no        |

### Modal

```Javascript
import React, { useState } from 'react';
import { Modal } from 'geslub-platform-react-ui';

export default function Component(): {

	const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
    setIsModalOpen(false);
  };

	return (
                <div>
      <button
      onClick={() => setIsModalOpen(true)}
      />
      <Modal
        title={'Modal Title'}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        position={'top'}
        size={'medium'}
        show
        okText={'Guardar'}
        cancelText={'Cancelar'}
        onOk={() => console.log('ok')}
        onCancel={() => console.log('cancel')}
      >
        <h2>Modal Title H2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa,
          odio doloribus ratione sed soluta explicabo id nam ea quas cumque. Odio
          non accusamus dignissimos praesentium deleniti nulla, perferendis illum.
          Aut consequatur culpa sequi odio sunt voluptatem explicabo, labore
        </p>
      </Modal>
    </div>

```

| Propiedad      | Tipo                                                | Requerida |
| -------------- | --------------------------------------------------- | --------- |
| isOpen         | `boolean`                                           | si        |
| onRequestClose | `() => void`                                        | si        |
| title          | `string`                                            | si        |
| position       | `'top'\|'center'\|'bottom'`                         | no        |
| size           | `'small'\|'medium'\|'large'\|'extra_large'\|'full'` | no        |
| okText         | `string`                                            | no        |
| cancelText     | `string`                                            | no        |
| onOk           | `() => void`                                        | no        |
| showOk         | `boolean`                                           | no        |
| onCancel       | `() => void`                                        | no        |
| themeColor     | `string`                                            | no        |
| children       | `ReactNode`                                         | no        |
