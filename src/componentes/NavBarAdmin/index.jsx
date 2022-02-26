import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  Avatar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
import avatar from "../../Img/avatar.jpg";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NavBarAdmin({ name }) {
  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Box
            sx={{
              "& > :not(style)": {
                m: 2,
              },
            }}
          >
            <NavLink to="/">
              <HomeIcon fontSize="large" />
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={name}>
              <IconButton sx={{ p: 0 }}>
                <Avatar all="kinding me" src={avatar}></Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
