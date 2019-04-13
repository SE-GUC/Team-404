import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import material from "@material-ui/core";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function createData(ID,Name,EMail, Organisationname, Partners, BoardMembers, EventsOrganized, FieldOfWork,ProjectHistory,FeedBackForm) {
  return { ID,Name,EMail, Organisationname, Partners, BoardMembers, EventsOrganized, FieldOfWork,ProjectHistory,FeedBackForm };
}

const rows = [
  createData('1','Frank','Frank@Ubisoft.com','Ubisoft','UbisoftMontreal', 'PeopleFromUbisoft', 'UbisoftEvents', 'VideoGames','SomeGames','form'),
  createData('2','Bart','Bart@marvel.com','Marvel','Someone', 'MarvelEmployees', 'Things', 'Comics','AFewComics','AnotherForm'),
  createData('3','Sheev','Sheev@deathstar.com','DeathStar','Vader', 'Stormtrooperno.532', 'Order66', 'Democracy','TheSenate','YetAnotherForm'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">EMail</TableCell>
            <TableCell align="right">OrganisationName</TableCell>
            <TableCell align="right">Partners</TableCell>
            <TableCell align="right">BoardMembers</TableCell>
            <TableCell align="right">EventsOrganized</TableCell>
            <TableCell align="right">FieldOfWork</TableCell>
            <TableCell align="right">ProjectHistory</TableCell>
            <TableCell align="right">FeedBackForm</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.ID}>
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.EMail}</TableCell>
              <TableCell align="right">{row.Organisationname}</TableCell>
              <TableCell align="right">{row.Partners}</TableCell>
              <TableCell align="right">{row.BoardMembers}</TableCell>
              <TableCell align="right">{row.EventsOrganized}</TableCell>
              <TableCell align="right">{row.FieldOfWork}</TableCell>
              <TableCell align="right">{row.ProjectHistory}</TableCell>
              <TableCell align="right">{row.FeedBackForm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
