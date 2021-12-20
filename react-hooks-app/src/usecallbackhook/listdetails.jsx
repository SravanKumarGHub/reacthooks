import React, {useEffect, useState} from  'react'

export default function ListDetails ({getItems}){

    const [items, setItems] = useState([])

    useEffect(() => {
        // setItems(getItems(5))
        setItems(getItems)
        console.log(' Updating Items ')
    },[getItems])

    return ( items.map((item) => <div key={item}> {item}</div> ))
}