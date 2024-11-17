export interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  isdisabled?: boolean;
}
