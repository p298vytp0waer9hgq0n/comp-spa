import { MouseEventHandler } from 'react';

type Props = {
  check: boolean;
  onClick: MouseEventHandler<SVGSVGElement>;
  extraClass?: string;
};

export default function RowCheckbox({ check, onClick, extraClass }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      width="20"
      height="20"
      fill="none"
      className={extraClass || ''}
    >
      <g fill="#000" clipPath="url(#a)">
        {check && (
          <path d="M8.536 13.595 5 10.059 6.179 8.88l2.357 2.357 4.714-4.714 1.178 1.179-5.893 5.893Z" />
        )}
        <path
          fillRule="evenodd"
          d="M.833 4.166A3.333 3.333 0 0 1 4.167.833h11.666a3.333 3.333 0 0 1 3.334 3.333v11.667a3.333 3.333 0 0 1-3.334 3.333H4.167a3.333 3.333 0 0 1-3.334-3.333V4.166ZM4.167 2.5h11.666c.92 0 1.667.746 1.667 1.666v11.667c0 .92-.746 1.667-1.667 1.667H4.167c-.92 0-1.667-.747-1.667-1.667V4.166c0-.92.746-1.666 1.667-1.666Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
