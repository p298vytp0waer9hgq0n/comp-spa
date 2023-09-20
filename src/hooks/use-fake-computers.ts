import { useEffect } from 'react';
import { computers } from '../utils/fake-computers';
import { Computer } from '../utils/types';

export default function useFakeComputers() {
  useEffect(() => {
    sessionStorage.setItem('computers', JSON.stringify(computers));
  }, []);

  function getComputers(
    limit: number,
    offset: number,
    filter: string,
    type: string,
    tag: string[]
  ) {
    const computerList = JSON.parse(sessionStorage.getItem('computers') || '');
    const workingList = computerList.filter((computer: Computer) => {
      if (filter && !computer.name.toLowerCase().includes(filter.toLowerCase()))
        return false;
      if (type && computer.type !== type) return false;
      if (tag.length > 0) {
        for (const str of tag) {
          if (!computer.tags.includes(str)) return false;
        }
      }
      return true;
    });
    return {
      computers: workingList.slice(offset, limit + offset),
      total: workingList.length,
    };
  }

  return { getComputers };
}
