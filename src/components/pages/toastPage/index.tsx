import React from 'react';
import { useToast } from '../../../hooks/useToast';
import { Button } from '../../atoms/button';

export function ToastPage() {
  const addToast = useToast();
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <Button
        primary
        onClick={() =>
          addToast({
            title: 'Nuevo titulo',
            description: 'descripcion toast 2',
            status: 'error',
            position: 'top-right',
            isClosable: true,
          })
        }
      >
        Top-left
      </Button>
      <Button
        primary
        onClick={() =>
          addToast({
            title: 'Titulo toast 2',
            description: 'descripcion toast 2',
            status: 'warning',
            position: 'top',
          })
        }
      >
        Top
      </Button>
      <Button
        primary
        onClick={() =>
          addToast({
            title: 'Titulo toast 2',
            description: 'descripcion toast 2',
            status: 'info',
            position: 'top-right',
          })
        }
      >
        Top-right
      </Button>
      <Button
        primary
        onClick={() =>
          addToast({
            title: 'Titulo toast 2',
            description: 'descripcion toast 2',
            status: 'error',
            position: 'bottom-left',
          })
        }
      >
        Bottom-left
      </Button>
      <Button
        primary
        onClick={() =>
          addToast({
            title: 'Titulo toast 2',
            description: 'descripcion toast 2',
            status: 'warning',
            position: 'bottom',
          })
        }
      >
        Bottom
      </Button>
      <Button
        primary
        onClick={() =>
          addToast({
            title: 'Titulo toast 2',
            description: 'descripcion toast 2',
            status: 'info',
            position: 'bottom-right',
          })
        }
      >
        Bottom-right
      </Button>
    </div>
  );
}
