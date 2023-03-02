interface itemint {
    title: String,
    cheker: boolean | any
}

const ItemSpecialties = ({title, cheker}: itemint) => {
    return (
        <li className={cheker ? "specialties__item cheker" : "specialties__item"}>- <span>{title}</span></li>
    )
}

export default ItemSpecialties;