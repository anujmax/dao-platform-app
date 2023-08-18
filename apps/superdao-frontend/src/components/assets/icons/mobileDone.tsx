import { Svg, SvgProps } from 'src/components/assets/svg';

export const MobileDoneIcon = (props: SvgProps) => {
	return (
		<Svg width="16" height="16" viewBox="0 0 13 13" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.5303 3.71967C13.8232 4.01256 13.8232 4.48744 13.5303 4.78033L6.53033 11.7803C6.23744 12.0732 5.76256 12.0732 5.46967 11.7803L2.46967 8.78033C2.17678 8.48744 2.17678 8.01256 2.46967 7.71967C2.76256 7.42678 3.23744 7.42678 3.53033 7.71967L6 10.1893L12.4697 3.71967C12.7626 3.42678 13.2374 3.42678 13.5303 3.71967Z"
				fill="fill"
			/>
		</Svg>
	);
};
