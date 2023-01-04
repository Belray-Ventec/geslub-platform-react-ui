import React, { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu';

interface DropDownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: string | JSX.Element;
  children: ReactNode;
  disabled?: boolean;
  width?: string;
}

export function DropDown({
  title,
  children,
  disabled = false,
  width,
}: DropDownProps): JSX.Element {
  return (
    <Menu closeOnBlur>
      <MenuButton disabled={disabled} onClick={(e) => e.stopPropagation()}>
        {title}
      </MenuButton>
      <MenuList minW={0} width={width ? width : undefined}>
        {children}
      </MenuList>
    </Menu>
  );
}
