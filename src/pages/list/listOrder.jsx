import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTableOrder from "../../components/datatable/DatatableOrder"

const ListOrder = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataTableOrder />
            </div>
        </div>
    )
}

export default ListOrder