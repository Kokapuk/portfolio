export default function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M240 240L16 16M240 16L16 240"
        stroke="currentColor"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
