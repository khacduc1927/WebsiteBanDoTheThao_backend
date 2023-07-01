import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableAdmin from "../../components/datatable/DatatableAdmin"

const ListAdmin = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DatatableAdmin />
            </div>
        </div>
    )
}

export default ListAdmin