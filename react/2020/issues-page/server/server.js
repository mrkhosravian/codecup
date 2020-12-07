const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const issues = require('./issues');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/issues', (req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const issuesFilter = req.query.issuesFilter
    ? parseInt(req.query.issuesFilter)
    : 0;
  const pageSize = 15;

  setTimeout(() => {
    if (issuesFilter === 1) {
      res.json(
        issues
          .filter(issue => issue.status === 'open')
          .slice((page - 1) * pageSize, page * pageSize)
      );
    } else if (issuesFilter === 2) {
      res.json(
        issues
          .filter(issue => issue.status === 'closed')
          .slice((page - 1) * pageSize, page * pageSize)
      );
    } else {
      res.json(issues.slice((page - 1) * pageSize, page * pageSize));
    }
  }, 500);
});

app.listen(9000);
