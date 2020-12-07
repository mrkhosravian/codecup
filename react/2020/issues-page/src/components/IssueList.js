import useInfiniteScroll from '../hooks/useInfiniteScroll';
import React from "react";
import IssueItem from "./IssueItem";
import Loading from "./Loading";

function IssueList(props) {


    return (
        <>
            <div className="issues" data-testid="issues">
                {props.issues.map((item, i) => <IssueItem issue={item}
                                                          key={i}/>)}
            </div>
            {props.isFetching && <Loading/>}
        </>
    );
}

export default IssueList;
