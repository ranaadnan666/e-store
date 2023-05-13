import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ContactsIcon from "@mui/icons-material/Contacts";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PeopleIcon from "@mui/icons-material/People";
import UpdateIcon from "@mui/icons-material/Update";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
const data = [
  {
    id: 1,
    heading: "My Orders",
    link: "/account/order",
    icon: <StarOutlineIcon fontSize="large" />,
  },
  {
    id: 2,
    heading: "Reset Password",
    link: "/account/password",
    icon: <ContactsIcon fontSize="large" />,
  },
  {
    id: 3,
    heading: "My Payment Options",
    link: "/account/paymentoption",

    icon: <LocalLibraryIcon fontSize="large" />,
  },
  {
    id: 5,
    heading: "My Profile",
    link: "/account/profile",
    icon: <UpdateIcon fontSize="large" />,
  },

  {
    id: 6,
    heading: "Daraz Wallet",
    link: "/account/wallet",

    icon: <LiveHelpIcon fontSize="large" />,
  },
  {
    id: 4,
    heading: "My Returns",
    link: "/account/return",
    icon: <PeopleIcon fontSize="large" />,
  },
  {
    id: 4,
    heading: "Address Book",
    link: "/account/address",
    icon: <LocalLibraryIcon fontSize="large" />,
  },  {
    id: 4,
    heading: "My Cancellation",
    link: "/account/cancel",
    icon: <StarOutlineIcon fontSize="large" />,
  },


];

export default data;
