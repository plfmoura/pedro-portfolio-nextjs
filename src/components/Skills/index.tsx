import data from '../../data/skills.json';

export default function Skills() {
    return (
        <ul className="flex items-center gap-4 flex-wrap">
            {
                data.skills.map((item, key) => (
                    <li key={key} className="lowercase text-slate-500 whitespace-nowrap">
                        {item}
                    </li>
                ))
            }
        </ul>
    )
}
