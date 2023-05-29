function Teams() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('')
    },())

    return <>
        <ul>
            {teams.map(team => (
            <li>{ team.full_name} </li>
            ))}
        </ul>
    </>

export default Teams;