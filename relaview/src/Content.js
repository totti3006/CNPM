import { useState } from "react";
import Table from "./Table";

function Content() {
    const [tables, setTables] = useState([
        { tableNo: 1, tableStatus: "unoccupied" }, { tableNo: 2, tableStatus: "unoccupied" }, { tableNo: 3, tableStatus: "unoccupied" }, { tableNo: 4, tableStatus: "unoccupied" }, { tableNo: 5, tableStatus: "unoccupied" },
        { tableNo: 6, tableStatus: "unoccupied" }, { tableNo: 7, tableStatus: "unoccupied" }, { tableNo: 8, tableStatus: "unoccupied" }, { tableNo: 9, tableStatus: "unoccupied" }, { tableNo: 10, tableStatus: "unoccupied" },
        { tableNo: 11, tableStatus: "unoccupied" }, { tableNo: 12, tableStatus: "unoccupied" }, { tableNo: 13, tableStatus: "unoccupied" }, { tableNo: 14, tableStatus: "unoccupied" }, { tableNo: 15, tableStatus: "unoccupied" },
        { tableNo: 16, tableStatus: "unoccupied" }, { tableNo: 17, tableStatus: "unoccupied" }, { tableNo: 18, tableStatus: "unoccupied" }, { tableNo: 19, tableStatus: "unoccupied" }, { tableNo: 20, tableStatus: "unoccupied" },
        { tableNo: 21, tableStatus: "unoccupied" }, { tableNo: 22, tableStatus: "unoccupied" }, { tableNo: 23, tableStatus: "unoccupied" }, { tableNo: 24, tableStatus: "unoccupied" }, { tableNo: 25, tableStatus: "unoccupied" }
    ])

    return (
        <div className="content">
            <nav className="header">
                <h1>Table List</h1>
                <button> Save </button>
            </nav>
            <div className="tableList">
                {tables.map((table/*Each Blog*/) => (
                    <Table tableNo={table.tableNo} tableStatus={table.tableStatus} key={table.tableNo}/>
                ))}
            </div>
        </div>
    );
}
   
export default Content;