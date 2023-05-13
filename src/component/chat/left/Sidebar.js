import { Avatar, Divider, Grid, Stack, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { chatUsers } from "./sidedata";
import moment from "moment/moment";
// import moment from "moment";

const Sidebar = () => {
    const [mobilechat, setMobilechat] = useState(false);


    return (
        <>
            <Grid
                item
                xs={12}
                sm={12}
                md={5}
                p={{ xs: "5px", md: "20px" }}
                display={{ xs: mobilechat ? 'none' : 'block', md: 'block' }}
                border="1px solid silver"
            >
                <Stack
                    direction={"column"}
                    rowGap={2}
                    fontSize={{
                        xs: "8px",
                        sm: "10px",
                        md: "12px",
                        lg: "14px",
                        xl: "14px",
                    }}
                >
                    {/* <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <h4>Messaging</h4>
            <Stack
              direction="row"
              justifyContent={"center"}
              columnGap={{ xs: "1px", md: "5px", lg: "10px" }}
              alignItems={"center"}
            >
              <MoreHorizIcon
                sx={{
                  cursor: "pointer",
                  padding: "4px",
                  fontSize: { xs: "10px", md: "15px", lg: "20px" },
                  borderRadius: "50%",
                  color: "#666666",
                  "&:hover": {
                    backgroundColor: "#F3F2EF",
                    color: "skyblue",
                  },
                }}
              />
              <AddCommentIcon
                sx={{
                  cursor: "pointer",
                  padding: "4px",
                  fontSize: { xs: "10px", md: "15px", lg: "20px" },
                  borderRadius: "50%",
                  color: "#666666",
                  "&:hover": {
                    backgroundColor: "#F3F2EF",
                    color: "skyblue",
                  },
                }}
              />
            </Stack>
          </Stack> */}
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        p={{ xs: "5px", md: "0px 10px" }}
                        sx={{
                            borderRadius: "10px",
                            backgroundColor: "#EEF3F8",
                            border: "2px solid white",
                            "&:hover": {
                                border: "2px solid black",
                            },
                        }}
                    >
                        <SearchIcon
                            sx={{
                                color: "#666666",
                                fontSize: { xs: "10px", md: "15px", lg: "20px" },
                            }}
                        />
                        <input
                            style={{
                                outline: "none",
                                border: "none",
                                width: "100%",
                                height: "100%",
                                fontSize: "inherit",
                                color: "#000",
                                textAlign: "center",
                                background: "transparent",
                                padding: "5px",
                            }}
                            type="text"
                            placeholder="Search Messages"
                        />
                        <TuneIcon
                            sx={{
                                cursor: "pointer",
                                padding: "4px",
                                borderRadius: "50%",
                                fontSize: { xs: "10px", md: "15px", lg: "20px" },
                                color: "#666666",
                                "&:hover": {
                                    backgroundColor: "lightgray",
                                    color: "skyblue",
                                },
                            }}
                        />
                    </Stack>
                    <Divider />
                    <Stack
                        direction={"column"}
                        rowGap={1}
                        sx={{
                            maxHeight: "100vh",
                            overflow: "auto",
                        }}
                    >
                        {/* person no. 1 */}
                        {chatUsers?.map((user) => (


                            <Stack

                                direction={"row"}
                                alignItems="center"
                                // key={user?.other_user?.id}
                                p={{ xs: "5px", md: "10px" }}
                                columnGap={{ xs: "1px", sm: "5px", md: "10px" }}
                                sx={{
                                    cursor: "pointer",
                                    borderRadius: "10px",
                                    "&:hover": {
                                        backgroundColor: "#F3F2EF",
                                    },
                                }}
                                // onClick={() => setChatUserId(user.id)}
                                onClick={() => {
                                    //   getSingleUserChatList(user?.id, user?.other_user?.id);
                                    setMobilechat(true);
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: { xs: "50px", sm: "50px" },
                                        height: { xs: "50px", sm: "50px" },
                                        cursor: "pointer",
                                    }}
                                    // src={user?.other_user?.user_pic}
                                    src={user?.user_pic}
                                />
                                <Stack direction={"column"} width="100%" >
                                    <Stack
                                        direction={"row"}
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        {/* <h5>{user?.other_user?.username}</h5> */}
                                        <Typography component={'h5'}>{user?.username}</Typography>
                                        <Typography variant="p">
                                            {/* {moment(user?.last_sms?.updated_at).format("hh:mm A")} */}
                                            {moment().format("hh:mm A")}
                                        </Typography>
                                    </Stack>
                                    {/* <p>{user?.last_sms?.message.substring(0, 100)}</p> */}
                                    <Typography variant="p">{user?.message.substring(0, 100)}</Typography>
                                </Stack>
                            </Stack>

                        ))}

                    </Stack>

                </Stack>
            </Grid>
        </>
    );
};

export default Sidebar;
