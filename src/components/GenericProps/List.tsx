type ListProps<T> = {
    items:T[],
    style: React.CSSProperties
}

const List =<T extends {id: number, first: string, last: string} >({items, style}:ListProps<T>) => {
    console.log( items )
    return (
        <>
            <h2>List of Item</h2>
            <ul style={style}>
                {items.map((item, index)=>{
                    return (
                        <li key={item.id ? item.id : index}>{item.first ? item.first : item}--- {item.last ? item.last: ""}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default List;