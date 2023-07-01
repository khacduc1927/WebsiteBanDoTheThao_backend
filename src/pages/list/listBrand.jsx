import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableBrand from "../../components/datatable/DatatableBrand"

const ListBrand = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DatatableBrand />
            </div>
        </div>
    )
}

export default ListBrand