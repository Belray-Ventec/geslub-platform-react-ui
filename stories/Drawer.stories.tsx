import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer, DrawerItem, DrawerSubItem } from '../src/components/drawer';
import { Icon } from '../src/components/icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Drawer',
  component: Drawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeColor: { control: 'color' },
    title: { control: 'text' },
  },
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => (
  <>
    <Drawer {...args}>
      {SUB_MENU.map((item) =>
        !item.sub ? (
          <DrawerItem
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            isOpen={args.isOpen!}
            key={item.label}
            icon={item.icon}
          >
            {item.label}
          </DrawerItem>
        ) : (
          <DrawerSubItem
            title={item.label}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            isOpen={args.isOpen!}
            key={item.label}
            icon={item.icon}
          >
            {item.sub.map((subItem) => (
              <DrawerItem
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                isOpen={args.isOpen!}
                key={subItem.label}
                icon={subItem.icon}
              >
                {subItem.label}
              </DrawerItem>
            ))}
          </DrawerSubItem>
        )
      )}
    </Drawer>
    <div style={{ padding: '20px' }}>
      <h2>Title</h2>
      <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </div>
    </div>
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  title: 'Menu',
  isOpen: true,
  close: () => {
    console.log('close');
  },
};

const SUB_MENU = [
  {
    label: 'Administración',
    icon: <Icon icon="Home" size={25} color="#fff" />,
    sub: [
      {
        label: 'Noticias',
        icon: <Icon icon="Document" size={25} color="#fff" />,
        to: '/noticias',
      },
      {
        label: 'Equipos',
        to: '/equipos',
      },
      {
        label: 'Marcas',
        to: '/marcas',
      },
      {
        label: 'Compañias',
        to: '/companias',
      },
      {
        label: 'Comentarios',
        to: '/comentarios',
      },
      {
        label: 'Tipo de Equipo',
        to: '/tipo-equipo',
      },
      {
        label: 'Peligros',
        to: '/peligros',
      },
    ],
  },
  {
    label: 'Lubricantes Especiales',
    icon: <Icon icon="Document" size={25} color="#fff" />,
    sub: [
      {
        label: 'Información técnica',
        to: '/informacion-tecnica',
      },
      {
        label: 'Certificados',
        to: '/certificados',
      },
      {
        label: 'Marketing',
        to: '/marketing',
      },
      {
        label: 'Testimoniales',
        to: '/testimoniales',
      },
      {
        label: 'OEM',
        to: '/oem',
      },
    ],
  },
  {
    label: 'Mantenimiento Industrial',
    icon: <Icon icon="BookOpen" size={25} color="#fff" />,
    sub: [
      { label: 'Webinars', to: '/webinars' },
      {
        label: 'Información técnica',
        to: '/',
      },
      {
        label: 'Certificados',
        to: '/certificados',
      },
      {
        label: 'Marketing',
        to: '/marketing',
      },
    ],
  },
  {
    label: 'Departamento Técnico',
    icon: <Icon icon="BullHorn" size={25} color="#fff" />,
    sub: [
      { label: 'Normas', to: 'normas' },
      {
        label: 'Pruebas y normas',
        to: '/pruebas-normas',
      },
      {
        label: 'Ensamblado de Equipo',
        to: '/ensamblado-equipo',
      },
      {
        label: 'Sustitución de Producto ',
        to: '/sustitucion-producto',
      },
      {
        label: 'Departamento Técnico ',
        to: '/departamento-tecnico',
      },
      {
        label: 'Articulo ',
        to: '/articulo',
      },
      {
        label: 'Revistas Técnicas ',
        to: '/revistas-tecnicas',
      },
    ],
  },
  {
    label: 'Audiovisuales',
    icon: <Icon icon="User" size={25} color="#fff" />,
    sub: [
      { label: 'Canal Youtube', to: '/' },
      {
        label: 'Capacitaciones',
        to: '/capacitaciones',
      },
      {
        label: 'Webinars',
        to: '/webinars',
      },
    ],
  },
  {
    label: 'Diccionario',
    icon: <Icon icon="Video" size={25} color="#fff" />,
    sub: [
      { label: 'Diccionario', to: '/diccionario' },
      {
        label: 'Diccionario de Sigla',
        to: '/diccionario-siglas',
      },
      {
        label: 'Diccionario de Ingles-Español',
        to: '/diccionario-ingles-espanol',
      },
    ],
  },
  {
    label: 'Calculadores',
    sub: [
      {
        label:
          'Cálculo de viscosidad para rodamientos en falla o extremadamente solicitado',
        to: '/calculadores/viscosidad-rodamientos',
      },
      {
        label: 'Dosificación de lubricante para cadena',
        to: '/dosificacion-lubricante-cadena',
      },
      {
        label: 'Calculo de Viscosidad Lubricacion',
        to: '/calculadora-viscosidad',
      },
      {
        label: 'Calculo de Indice de Viscosidad',
        to: '/calculadora-viscosidad',
      },
      {
        label: 'Cálculo de lubricación de engranajes abiertos',
        to: '/calculadora-lubricacion-engranajes-abiertos',
      },
      {
        label: 'Conversor de medidas',
        to: '/',
      },
    ],
  },
  {
    label: 'Guía de Compatibilidad',
    sub: [
      {
        label: 'Guía de Compatibilidad Química de Guías Comprimidas',
        to: '/guia-compatibilidad-quimica',
      },
      {
        label: 'Guía de Compatibilidad PTFE',
        to: '/guia-compatibilidad-ptfe',
      },
    ],
  },
  {
    label: 'Perifericos Perifericos Perifericos',
    to: '/',
  },
];
