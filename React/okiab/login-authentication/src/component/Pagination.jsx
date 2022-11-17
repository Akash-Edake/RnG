import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Pagination = () => {
    const [Data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const onePageList = pageNo/10;
    console.log(onePageList);


    useEffect(() => {
        getData();

    }, [])

    const getData = async () => {
        const albumData = await axios(`https://jsonplaceholder.typicode.com/albums`)
        setData(albumData.data);
        setPageNo(albumData.data.length);
    }
  0
    return (
        <>
            <h1>Pagination</h1>
            {
                Data.map((value) => {
                    return (
                        <>
                            <li>{value.title}</li>
                        </>
                    )
                })
            }
            <button>previous</button>
            <button>1</button>
            <button>Next</button>
        </>


    )
}

export default Pagination