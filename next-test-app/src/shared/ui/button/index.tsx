import React, { CSSProperties, FC, ReactNode } from "react";

import classes from "./button.module.scss";

export type TButtonType = "dark" | "yellow";

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
	typeButton: TButtonType;
	size?: "regular" | "small" | "medium" | "large";
	isDisabled?: boolean;
	isLoading?: boolean;
}

const Button: FC<IButton> = (props) => {
	const {
		typeButton = "yellow",
		children,
		className,
		size,
		isDisabled,
		onClick,
		isLoading,
		...rest
	} = props;

	const typesRenderCondition = () => {
		if (typeButton === "dark") {
			return classes.dark;
		} else if (typeButton === "yellow") {
			return classes.yellow;
		}
	};

	const sizesRenderCondition = () => {
		if (size === "regular") {
			return classes.regular;
		}
	};

	return (
		<button
			onClick={onClick}
			disabled={isDisabled}
			className={`${className} ${classes.button} ${sizesRenderCondition()} ${typesRenderCondition()}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export { Button };
