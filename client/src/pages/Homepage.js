import React from "react";
import { Box, Typography, Card, Stack, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";

const Homepage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Media queries for responsiveness
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const isTablet = useMediaQuery("(max-width: 999px)");

  // Define styles based on media queries
  const cardStyle = {
    boxShadow: 2,
    borderRadius: 5,
    height: isNotMobile ? 190 : isTablet ? 150 : 120,
    width: isNotMobile ? 200 : isTablet ? 150 : 120,
    "&:hover": {
      border: 2,
      boxShadow: 0,
      borderColor: "primary.dark",
      cursor: "pointer",
    },
  };

  return (
    <Box
      width={isNotMobile ? "90%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card onClick={() => navigate("/summary")} sx={cardStyle}>
            <DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                TEXT SUMMARY
              </Typography>
              <Typography variant="h6">Summarize long text into short sentences</Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Parapgraph Generation
          </Typography>
          <Card onClick={() => navigate("/paragraph")} sx={cardStyle}>
            <FormatAlignLeftOutlined sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph
              </Typography>
              <Typography variant="h6">Generate Paragraph with words</Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI ChatBot
          </Typography>
          <Card onClick={() => navigate("/chatbot")} sx={cardStyle}>
            <ChatRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Chatbot
              </Typography>
              <Typography variant="h6">Chat With AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Javascript Converter
          </Typography>
          <Card onClick={() => navigate("/js-converter")} sx={cardStyle}>
            <ChatRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                JS CONVERTER
              </Typography>
              <Typography variant="h6">Translate English to JavaScript code</Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI SCIFI Images
          </Typography>
          <Card onClick={() => navigate("/scifi-image")} sx={cardStyle}>
            <ChatRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Scifi Image
              </Typography>
              <Typography variant="h6">Generate Scifi images</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
