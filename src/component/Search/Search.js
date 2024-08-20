import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Search.css";

const Search = (props) => {

    return (
        <div className={props.showSearch ? "search-container show-search-container" : "search-container"}>
            <div className="search-main">
                <div className="search-option">
                    <h3>Search</h3>
                    <input type="text" placeholder="Search" />
                </div>
                <div className='show-search-result'>
                    <h5>
                        Recent
                    </h5>
                    <p>No recent searches.</p>
                </div>

            </div>
        </div>
    )
}
export default Search;