import MenuData from "../Data/MenuData";
import { useState,useEffect } from "react";
const Breakfast = () => {
    const [fetchData, setFetchData] = useState([MenuData])

    useEffect(() => {
        filterdata()

    }, [])

    function filterdata(category) {
        const fliterResult = MenuData.filter((data) => data.category == "breakfast")
        setFetchData(fliterResult)
    }
    return (
        <div>
            <div>
                <h1>Breakfast</h1>
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

export default Breakfast;
