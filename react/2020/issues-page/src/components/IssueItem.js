import OpenIssueIcon from './OpenIssueIcon';
import CloseIssueIcon from './CloseIssueIcon';

function IssueItem({ issue }) {
  if (issue.status === 'open') {
    return (
      <div className="issue open" data-testid="issue">
        <OpenIssueIcon /> {issue.title}
      </div>
    );
  } else {
    return (
      <div className="issue closed" data-testid="issue">
        <CloseIssueIcon /> {issue.title}
      </div>
    );
  }
}

export default IssueItem;
