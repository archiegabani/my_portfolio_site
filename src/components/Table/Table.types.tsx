export interface TableProps {
  headers: Array<{ display: string; key: string }>; // Adjusted to accept objects
  data: Array<Record<string, any>>; // Flexible structure for data
  isdisabled?: boolean; // Optional property to control the disabled state
}
