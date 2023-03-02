interface itemadmin {
    fio: string,
    description: string,
    image: string
}

const ItemAdmin = ({fio, description, image}: itemadmin) => {
    return (
        <div className="item-admin">
            <div className="item-admin__image"><img src={image} alt="image-admin" /></div>
            <div className="item-admin__text">
                <h3 className="item-admin__fio">{fio}</h3>
                <p className="item-admin__description">{description}</p>
            </div>
        </div>
    )
}

export default ItemAdmin;