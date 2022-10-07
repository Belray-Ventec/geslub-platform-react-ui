import { useEffect, useState } from 'react';
import { OptionProps, UseSelectValueProps } from '../types';

export default function useSelectValue({
  multiple,
  initialValue,
}: UseSelectValueProps) {
  const [selectedValue, setSelectedValue] = useState<
    OptionProps | OptionProps[] | null
  >(multiple ? [] : null);

  const removeAllTags = () => {
    setSelectedValue([]);
  };

  const handleRemoveTag = (label: string) => {
    const filtered = (selectedValue as OptionProps[]).filter(
      (item) => item.label !== label
    );
    setSelectedValue([...filtered]);
  };

  const handleOptionClick = (label: string, value: string | number) => {
    if (multiple) {
      if (
        (selectedValue as OptionProps[]).find((item) => item.value === value)
      ) {
        const filtered = (selectedValue as OptionProps[]).filter(
          (item) => item.value !== value
        );
        setSelectedValue(filtered);
      } else {
        setSelectedValue([
          ...(selectedValue as OptionProps[]),
          { label, value },
        ]);
      }
    } else {
      setSelectedValue({ label, value });
    }
  };

  useEffect(() => {
    if (multiple && initialValue) {
      setSelectedValue([...(initialValue as OptionProps[])]);
    } else {
      initialValue && setSelectedValue(initialValue);
    }
  }, [initialValue]);

  return {
    removeAllTags,
    handleRemoveTag,
    handleOptionClick,
    selectedValue,
  };
}
