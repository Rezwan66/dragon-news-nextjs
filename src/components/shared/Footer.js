import { Box, Button, Container, IconButton, Typography } from '@mui/material';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
  const navItems = [
    {
      route: 'Home',
      pathname: '/',
    },
    {
      route: 'Pages',
      pathname: '/pages',
    },
    {
      route: 'Category',
      pathname: '/category',
    },
    {
      route: 'News',
      pathname: '/news',
    },
    {
      route: 'About',
      pathname: '/about',
    },
    {
      route: 'Contact',
      pathname: '/contact',
    },
  ];
  return (
    <Box className="bg-black px-2 py-10">
      <Container className="space-y-6">
        {/* social icons */}
        <Box
          className="w-full text-center"
          sx={{
            '& svg': {
              color: 'white',
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        {/* nav links */}
        <Box className="w-full text-center">
          {navItems.map(item => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography color="gray" variant="body2" textAlign="center">
          @2023 Dragon News. Design by Programming Hero
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
