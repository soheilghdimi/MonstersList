import './input.style.css'
const Input = ({setFilter}) => {
    return (
        <div className="search-box ">
            <button className="btn-search icons8-search">
                <i className="fas fa-search "/></button>
            <input onChange={e => setFilter(e.target.value)} type="text" className="input-search" placeholder="Search..."/>
        </div>
)
}

export default Input