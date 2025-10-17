type HandProps = {
    rotation: number;
};

export default function Hand({ rotation }: HandProps) {
    return (
        <div
            className="h-[0.1vh] bg-amber-300 absolute top-1/2 left-1/2 -translate-y-1/2 w-[45%] origin-left transition duration-[750ms]"
            style={{ transform: `rotate(${rotation}deg)` }}
        ></div>
    );
}
