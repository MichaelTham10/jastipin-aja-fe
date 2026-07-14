type NumberDesignProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "custom";
  className?: string;
};

export const NumberDesign: React.FC<NumberDesignProps> = ({children, variant = "primary", className}) => {
    const variants = {
        primary: "bg-blue-950",
        secondary: "bg-green-950",
        custom: "",
    }
    return (
        <div className={`${variants[variant]} ${className} rounded-full w-20 h-20 flex items-center justify-center`}>
            {children}
        </div>   
    )
}