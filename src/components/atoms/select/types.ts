export interface SelectProps {
  options: OptionProps[];
  onChange?: (option: OptionProps[] | OptionProps | null) => void;
  isInline?: boolean;
  multiple?: boolean;
  initialValue?: OptionProps | OptionProps[];
}

export interface OptionProps {
  label: string;
  value: string | number;
}

export interface ItemListProps {
  filteredOptions: OptionProps[];
  handleOptionClick: (label: string, value: string | number) => void;
}

export interface UseSelectValueProps {
  multiple?: boolean;
  initialValue?: OptionProps | OptionProps[];
}

export interface UseSearchOptionsProps {
  options: OptionProps[];
  onChange?: (option: OptionProps[] | OptionProps | null) => void;
  selectedValue: OptionProps[] | OptionProps | null;
}
