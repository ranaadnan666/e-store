import {Avatar, Stack, Typography } from "@mui/material";
import moment from "moment";
// import moment from "moment";
import React  from "react";
// import { useAppContext } from "../../../context/app-context";

const Body = () => {
  // const { messagesOfSingleChatRoom, activeChatUser, chatUserId, user } = useAppContext();


  // ======================== Show Datewise Message ==========================//
  // const groupedMessages = messagesOfSingleChatRoom.reduce((groups, message) => {
  //   const date = moment(message.created_at).format("D MMMM YYYY");
  //   const group = groups.find(g => g.date === date);
  //   if (group) {
  //     group.messages.push(message);
  //   } else {
  //     groups.push({ date, messages: [message] });
  //   }
  //   return groups;
  // }, []);

  // useEffect(() => {
  //   const element = document.getElementById("your_div");
  //   element.scrollTop = element.scrollHeight;
  // }, [messagesOfSingleChatRoom]);


  return (
    <Stack 
    
      maxHeight={{
        xs: "calc(100vh - 20px)",
        sm: "calc(100vh - 210px)",
        md: "calc(100vh - 300px)",
      }}
      id="your_div"
      overflow={"auto"}
      mt={2}
      direction={"column"}
      rowGap={1}
      // backgroundColor="blue"
      fontSize={{ xs: "8px", sm: "10px", md: "12px", lg: "14px", xl: "14px" }}
    >
      {/* {
        groupedMessages.reverse().map((group, index) => ( */}
      <Stack
        // key={index}
      >
            {/* show date */}
            <p
              style={{
                background: '#edf7ed',
                padding: '5px 0px',
                textAlign: 'center',
                width: '20%',
                margin:'auto'
              }}>
          {/* {group.date} */}
          12 june 2022
            </p>

            {/* {
              group.messages
                .slice(0)
                .reverse()
                .map((message, index) => ( */}
                  <Stack
                    // Set the direction of the message bubble based on the `sms_sender` property
                    // direction={message.sms_sender === chatUserId ? "row-reverse" : "row"}
                    direction=""
                    padding={"5px"}
                    margin={"4px 0px"}
                    columnGap={{ xs: "1px", sm: "3px", md: "5px" }}
                    // key={index}
                    sx={{
                      // "&:hover": {
                      //   backgroundColor: "lightgray",
                      // },
                      borderRadius: "10px",
                    }}
                  >
                    {/* Avatar */}
                    <Avatar
                      sx={{
                        width: { xs: "40px", sm: "60px" },
                        height: { xs: "40px", sm: "60px" },
                        cursor: "pointer",
                      }}
                      // src={
                      //   // Set the `src` of the `Avatar` based on the `sms_sender` property
                      //   message.sms_sender === chatUserId
                      //     ? user?.data.profile_pic
                      //     : activeChatUser?.other_user?.profile_pic

                      // }
                 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            
                    />
                    <Stack direction={"column"} rowGap={1} width="fit-content">
                      {/* Sender name and date */}
                      <Stack
                        // Set the direction of the date and dot based on the `sms_sender` property
                        // direction={message.sms_sender === chatUserId ? "row-reverse" : "row"}
                      direction="row"
                        columnGap={{ xs: "1px", sm: "3px", md: "5px" }}
                        alignItems="center"
                      >
                        {/* dot */}
                        <div
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            // Set the color of the dot based on the `sms_sender` property
                            // backgroundColor:
                              // message.sms_sender === chatUserId ? "silver" : "green",
                         
                          }}
                        ></div>
                      
                      </Stack>
                      {/* Message */}
            {/* <Typography
                        style={{
                          // padding:
                            // Set the padding of the message based on the `sms_sender` property
                            // message.sms_sender === chatUserId
                            //   ? "0px 0px 0px 0px"
                            //   : "0px 0px 0px 0px",
                          textAlign: "justify",
                        }}
                      >
              {/* {message.message} */}
                  {/* Hi ,how are you */}
            {/* </Typography> */} 
            <div style={{ display: "flex", alignItems: "center",marginTop:'-20px' }}>
              <div
                style={{
                  backgroundColor: "#DCF8C6",
                  borderRadius: "20px",
                  padding: "10px 15px",
                  margin: "5px",
                  Width: "70%",
                }}
              >
                <Typography>
                  Hi, how are you?
                </Typography>
                <Typography style={{ fontSize: "12px" }} textAlign="right">
                  {/* {moment(message.updated_at).format("hh:mm A")} */}
                  {moment().format("hh:mm A")}
                </Typography>
              </div>
            </div>
           
                    </Stack>
                  </Stack>
                {/* ))
            } */}
      </Stack>
    
        {/* ))
      } */}


      {/*============================ sender message================================= */}
      <Stack
        // Set the direction of the message bubble based on the `sms_sender` property
        // direction={message.sms_sender === chatUserId ? "row-reverse" : "row"}
        direction="row-reverse"
        padding={"5px"}
        margin={"4px 0px"}
        columnGap={{ xs: "1px", sm: "3px", md: "5px" }}
        // key={index}
        sx={{
          borderRadius: "10px",
        }}
      >
        {/* Avatar */}
        <Avatar
          sx={{
            width: { xs: "40px", sm: "60px" },
            height: { xs: "40px", sm: "60px" },
            cursor: "pointer",
          }}
          // src={
          //   // Set the `src` of the `Avatar` based on the `sms_sender` property
          //   message.sms_sender === chatUserId
          //     ? user?.data.profile_pic
          //     : activeChatUser?.other_user?.profile_pic

          // }
          src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"

        />
        <Stack direction={"column"} rowGap={1} width="fit-content">
          {/* Sender name and date */}
          <Stack
            // Set the direction of the date and dot based on the `sms_sender` property
            // direction={message.sms_sender === chatUserId ? "row-reverse" : "row"}
            direction="row"
            columnGap={{ xs: "1px", sm: "3px", md: "5px" }}
            alignItems="center"
          >
            {/* dot */}
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                // Set the color of the dot based on the `sms_sender` property
                // backgroundColor:
                // message.sms_sender === chatUserId ? "silver" : "green",
               
              }}
            ></div>

          </Stack>
          {/* Message */}
          <div style={{ display: "flex", alignItems: "center", marginTop: '-20px' }}>
            <div
              style={{
                backgroundColor: "lightgray",
                borderRadius: "20px",
                padding: "10px 15px",
                margin: "5px",
                Width: "70%",
              }}
            >
              <Typography >
              I am fine and you
              </Typography>
              <Typography style={{ fontSize: "12px" }} textAlign="right">
                {/* {moment(message.updated_at).format("hh:mm A")} */}
                {moment().format("hh:mm A")}
              </Typography>
            </div>
          </div>
         
        </Stack>
        </Stack>
    
    
   
    </Stack>


  );
};

export default Body;


