"use client";
import {
  Box,
  Typography,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Paper,
  Button,
  Color,
} from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";

const PageBox = muiStyled(Box)(({ theme }) => ({
  // width: {xs: "95%", md: "80%"},
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
  margin: "0 auto",
  marginTop: "3rem",
  marginBottom: "4rem",
}));

const PaperBox = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    alignItems: "flex-start",
  },
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  gap: "1.5rem",
  padding: "1rem",
}));

const TopTextDiv = muiStyled("div")(({ theme }) => ({
  marginBottom: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  // [theme.breakpoints.down("md")]: {
  //   alignItems: "flex-start",
  // },
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
  gap: "1rem",
}));

export default function JobPostings() {
  return (
    <>
      <Navbar />
      <PageBox>
        <TopTextDiv sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Box
            sx={{ justifyContent: { xs: "flex-start", md: "space-between" } }}
          >
            <Link href="#" color="inherit">
              My Jobs
            </Link>
            <span> &nbsp; / &nbsp; </span>
            <Link href="#" color="inherit" underline="hover">
              Job Postings
            </Link>
          </Box>

     
          <Box
            sx={{
              backgroundColor: "#00EF7C",
              color: "#001E00",
              padding: "0.5rem 1.5rem",
              borderRadius: "10px",
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}
          >
            <Link href="/newJob" className="text-black no-underline">
            Post a new Job
            </Link>
          </Box>
        </TopTextDiv>
        <br />
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            pointer: "cursor",
          }}
        >
          <FormControl
            sx={{ width: { xs: "90%", md: "50%" } }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end" >
                  <IconButton
                    edge="end"
                    sx={{ borderRadius: "0px" }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box
            sx={{
              // backgroundColor: "#00EF7C",
              color: "#001E00",
              padding: "0.5em 2em",
              borderRadius: "10px",
              border: "1px solid #D9D9D9",
              pointer: "cursor",
              cursor: "pointer",
            }}
          >
            Filter
          </Box>
        </Box>
        <br />
        <Box
          sx={{
            width: { xs: "50%", md: "100%" },
            backgroundColor: "#00EF7C",
            color: "#001E00",
            padding: "0.5rem 1.5rem",
            borderRadius: "10px",
            display: { xs: "block", md: "none" },
            cursor: "pointer",
          }}
        >
          Post a new Job
        </Box>
        <br />
        <br />
        <Paper elevation={3}>
          <PaperBox>
            <Box sx={{ width: { xs: "100%", md: "53%" } }}>
              <Typography
                variant="h6"
                sx={{ marginBottom: "1rem", fontWeight: "bold" }}
                gutterBottom
                color="#001E00"
              >
                We are looking for an experienced crypto marketer to develop
                strategy in the leadup to our ICO.
              </Typography>
              <Typography variant="caption" color="#777777" gutterBottom>
                Posted 9 Minutes ago by You
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { md: "center" },
                gap: "2rem",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  0
                </Typography>
                <Typography variant="body1" color="#777777" gutterBottom>
                  Proposals
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  0
                </Typography>
                <Typography variant="body1" color="#777777" gutterBottom>
                  Messaged
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  0
                </Typography>
                <Typography variant="body1" color="#777777" gutterBottom>
                  Hired
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: { xs: "50%", md: "100%" },
                  backgroundColor: "#00EF7C",
                  color: "#001E00",
                  padding: "1rem 1.5rem",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Link href="/Job/MyJobs/proposals" className="text-black no-underline">
                  <Typography variant="body2" className="text-black">View Proposals</Typography>
                </Link>
              </Box>
            </Box>
          </PaperBox>
        </Paper>
        <br />
        <br />

        <TopTextDiv>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="caption" gutterBottom>
              1-1 Of Job Postings
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <Typography
              variant="caption"
              gutterBottom
              sx={{ cursor: "pointer" }}
            >
              Previous
            </Typography>
            <div
              style={{
                backgroundColor: "#00EF7C",
                color: "#001E00",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h6>1</h6>
            </div>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ cursor: "pointer" }}
            >
              Next
            </Typography>
          </Box>
        </TopTextDiv>
      </PageBox>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </>
  );
}
