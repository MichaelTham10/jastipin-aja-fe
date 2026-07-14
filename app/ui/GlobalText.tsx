import React from "react";

type TextProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "custom";
    className?: string;
    withSpace?: boolean;
};

export const GlobalText: React.FC<TextProps> = (
    { children, variant = "primary", className = "", withSpace = false }
) => {
    const variants = {
        primary: "text-white",
        secondary: "text-gray-400",
        custom: "",
    }
    if (!withSpace) {
        return (
            <span className={`${variants[variant]} ${className}`}>
                {children}
            </span>
        )
    }
    return (
        <p className={`${variants[variant]} ${className}`}>
            {children}
        </p>
    )
}