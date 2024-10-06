import { Button, styled, Box } from "@mui/material"
import { HiOutlineDocumentText } from "react-icons/hi2"

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  width: "340px",
  [theme.breakpoints.down("lg")]: {
    width: "300px",
  },
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
}))

const ResumeButton = () => {
  return (
    <Box
      component='a'
      href='https://drive.google.com/file/d/1WkGKxW-Eb1gRd4ebhFfPIrIkaXRDcSKz/view?usp=sharing'
      target='_blank'
      rel='noopener noreferrer'
    >
      <StyledButton variant="outlined" startIcon={<HiOutlineDocumentText />}>
        Resume
      </StyledButton>
    </Box>
  )
}
export default ResumeButton
