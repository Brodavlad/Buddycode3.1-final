import { SVGProps } from "react";

export default function ProfileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.12 12.78C12.0403 12.77 11.9597 12.77 11.88 12.78C11.032 12.7514 10.2282 12.3944 9.63856 11.7842C9.04891 11.174 8.71953 10.3585 8.72001 9.50999C8.72001 7.69999 10.18 6.22999 12 6.22999C12.8594 6.22849 13.6851 6.5648 14.2988 7.16639C14.9126 7.76798 15.2654 8.58668 15.2811 9.44597C15.2969 10.3053 14.9743 11.1363 14.383 11.76C13.7917 12.3837 12.9789 12.75 12.12 12.78ZM18.74 19.38C16.9023 21.0691 14.496 22.0044 12 22C9.40001 22 7.04001 21.01 5.26001 19.38C5.36001 18.44 5.96001 17.52 7.03001 16.8C9.77001 14.98 14.25 14.98 16.97 16.8C18.04 17.52 18.64 18.44 18.74 19.38Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
