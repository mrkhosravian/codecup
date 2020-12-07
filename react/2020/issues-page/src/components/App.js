import React, {useEffect, useState} from "react";
import OpenIssueIcon from './OpenIssueIcon';
import CloseIssueIcon from './CloseIssueIcon';
import IssueList from './IssueList';
import useInfiniteScroll from "../hooks/useInfiniteScroll";

function App() {

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState(0);


    function fetchMoreListItems() {
        setPage(p => p + 1);
    }

    useEffect(() => {
        fetch(`http://localhost:9000/issues?page=${page}&issuesFilter=${filter}`)
            .then(t => t.json())
            .then(value => {
                setIsFetching(false)
                setIssues(iss => [...iss, ...value])
            })
    }, [isFetching, filter, page])


    // function setFifi(val) {
    //   setFilter(val)
    //   fetch(`http://localhost:9000/issues?page=1&issuesFilter=${val}`)
    //       .then(t => t.json())
    //       .then(value => {
    //         setIssues(value)
    //       })
    // }

    return (
        <div className="container">
            <div className="box">
                <div className="box-header">
                    <div data-testid="open-issues" className="open-issues"
                         onClick={() => {
                             setIssues([])
                             setPage(1)
                             setFilter(1)
                         }}>
                        <OpenIssueIcon/> Open
                    </div>
                    <div data-testid="close-issues" className="close-issues"
                         onClick={() => {
                             setIssues([])
                             setPage(1)
                             setFilter(2)
                         }}>
                        <CloseIssueIcon/> Closed
                    </div>
                </div>

                <IssueList issues={issues} setIssues={setIssues} filter={filter}
                           page={page} setPage={setPage}
                           isFetching={isFetching}/>
            </div>
        </div>
    );
}

export default App;
