import { useEffect, useState } from "react";
import MenuData from "../Data/MenuData";

const All = () => {
    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        getdata()

    }, [])

    function getdata() {
        const mappedData = MenuData.map(data => (

            {
                price: data.price,
                title: data.title,
                category: data.category,
                img: data.img,
                desc: data.desc
            }
        ))

        setFetchData(mappedData)
    }

    return (
        <div>
            <div>
                <h1> All</h1>
            </div>
            <div className="all">
                {
                    fetchData && fetchData.map(showdata => (

                        <div className="showdata">
                            <img src={showdata.img} />
                            <div className="showdata-para" >
                                <h3 >{showdata.title}</h3>
                                <p >${showdata.price}</p>
                                <p >{showdata.desc}</p>

                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default All;
