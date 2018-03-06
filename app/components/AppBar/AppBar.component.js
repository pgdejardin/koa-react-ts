import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
// import MenuIcon from 'material-ui-icons/Menu';

// interface Props {
//   classes: any;
// }

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export function PicsouAppBar(props) {
  const { classes } = props;
  return <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">*/}
          {/*<MenuIcon />*/}
        {/*</IconButton>*/}
        <Typography variant="title" color="inherit" className={classes.flex}>
          Picsou
        </Typography>
        {/*<Button color="inherit">Login</Button>*/}
      </Toolbar>
    </AppBar>
  </div>;
}

export default withStyles(styles)(PicsouAppBar);
