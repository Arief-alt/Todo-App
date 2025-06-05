const StatsCard = ({id, name, total, icon}: StatsCard) => {
    const getBackgroundColor = () => {
        switch(id) {
            case 1:
                return 'bg-dark-green';
            case 2:
                return 'bg-dark-green';
            case 3:
                return 'bg-dark-blue';
        }
    };

    return (
        <article className={`p-6 flex flex-col gap-6 ${getBackgroundColor()} border border-emerald-800 shadow-400 rounded-xl text-dark-100`}>
            <div className="flex flex-row xl:flex-row xl:items-center justify-between">
                <h1 className="text-gray-400">
                    {name}
                    <div className="text-gray-300 font-bold text-3xl">
                        {total}
                    </div>
                </h1>

                <div className="flex items-center">
                    <img
                        src={icon}
                        alt={name}
                        className="size-8"
                    />
                </div>
            </div>
        </article>
    )
}
export default StatsCard