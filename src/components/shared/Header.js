import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import headerImg from '@/assets/The Dragon News.png';
import { showCurrentDate } from '@/utils/showCurrentDate';

const Header = () => {
  const currentDate = showCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          className="mx-auto"
          src={headerImg}
          width={500}
          height={500}
          alt="header logo"
        />
        <Typography
          className="my-2"
          color="gray"
          variant="body1"
          textAlign="center"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography variant="h6" textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
