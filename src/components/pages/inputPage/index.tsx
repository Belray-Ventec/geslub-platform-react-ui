import React, { useState } from 'react';
import { Input } from '../../atoms/input';

export function InputPage() {
  const [text, setText] = useState('');
  return (
    <Input
      placeholder="Enter the name"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
