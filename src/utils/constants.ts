export const compTypes = ['default', 'vm_host', 'vm_guest'];

export const compTags = [
  'latinica',
  'red tag',
  'blue tag',
  'green tag',
  'yellow tag',
  'orange tag',
];

export const tagStyles: Record<string, React.CSSProperties> = {
  default: { color: 'grey', backgroundColor: 'lightgray' },
  'yellow tag': {
    color: 'rgb(119 149 0)',
    backgroundColor: 'rgb(204 255 0 / .3)',
  },
  'green tag': {
    color: '#0a9d00',
    backgroundColor: '#6aff00',
  },
  'orange tag': {
    color: 'c08d00',
    backgroundColor: '#ffc800',
  },
  'red tag': {
    color: '#ff5656',
    backgroundColor: '#b20000',
  },
  'blue tag': {
    color: '#b6acff',
    backgroundColor: '#0400ff',
  },
};
