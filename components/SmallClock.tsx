import Hand from './Hand';

type ClockProps = {
    children: number[];
};

export default function SmallClock({ children }: ClockProps) {
    return (
        <div className="aspect-square w-full bg-stone-950 border-[0.15vh] border-stone-900 rounded-full">
            <div className="h-full w-full relative">
                <Hand rotation={children[0]} />
                <Hand rotation={children[1]} />
            </div>
        </div>
    );
}
