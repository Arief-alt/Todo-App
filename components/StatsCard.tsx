const StatsCard = ({id, name, total, icon, color}: StatsCard) => {
    const getBackgroundColor = () => {
        switch(id) {
            case 1:
                return 'bg-light-red border border-red-400';
            case 2:
                return 'bg-dark-green border border-emerald-400';
            case 3:
                return 'bg-dark-blue border border-blue-400';
            case 4:
                return  'bg-light-orange border border-orange-400'
        }
    };

    return (
        <article className={`p-6 flex flex-col gap-6 ${getBackgroundColor()} shadow-400 rounded-xl text-dark-100`}>
            <div className="flex flex-row xl:flex-row xl:items-center justify-between">
                <h1 className="text-gray-400">
                    {name}
                    <div className={`${color} font-bold text-3xl`}>
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