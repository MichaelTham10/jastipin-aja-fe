import { GlobalText } from "../ui/GlobalText";
import { NumberDesign } from "../ui/NumberDesign";

type StepsCardsProps = {
    variant: "primary" | "secondary";
    step: string;
    title: string;
    subtitle: string;
};

export const StepsCards: React.FC<StepsCardsProps> = ({ variant, step, title, subtitle }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <NumberDesign variant={variant}>
                {variant === 'primary' ? (
                    <GlobalText variant='custom' className="text-blue-400 text-2xl font-bold" withSpace={false} >
                        {step}
                    </GlobalText>
                ) : (
                    <GlobalText variant='custom' className="text-green-400 text-2xl font-bold" withSpace={false} >
                        {step}
                    </GlobalText>
                )}
            </NumberDesign>
            <GlobalText withSpace={false} variant='primary' className="text-lg text-center mt-2">
                {title}
            </GlobalText>
            <GlobalText withSpace={false} variant='secondary' className="text-center">
                {subtitle}
            </GlobalText>
        </div>
    );
};