import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Avatar } from '.';

describe('Testing Avatar', () => {
  const setup = (size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
    render(<Avatar title="avatar" size={size} />);
  };

  it('Debe renderizar el avatar con la propiedad title avatar', () => {
    setup('md');
    const avatar = screen.getByTitle('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
