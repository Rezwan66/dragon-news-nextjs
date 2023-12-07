import {
  Box,
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import sidebar from '@/assets/sideBar.png';
import sidebar2 from '@/assets/sideBar2.png';
import Image from 'next/image';

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sidebar} width={800} alt="top news" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white my-4 rounded">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Shaikh Rezwan - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* grid cards */}
      <Box>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia>
            <Image
              src={sidebar}
              width={150}
              height={250}
              alt="cards image"
            ></Image>
          </CardMedia>
          <Box sx={{ display: 'flex' }}>
            <CardContent>
              <Typography component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mar 18 2023
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia>
            <Image
              src={sidebar}
              width={150}
              height={250}
              alt="cards image"
            ></Image>
          </CardMedia>
          <Box sx={{ display: 'flex' }}>
            <CardContent>
              <Typography component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mar 18 2023
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia>
            <Image
              src={sidebar}
              width={150}
              height={250}
              alt="cards image"
            ></Image>
          </CardMedia>
          <Box sx={{ display: 'flex' }}>
            <CardContent>
              <Typography component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mar 18 2023
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia>
            <Image
              src={sidebar}
              width={150}
              height={250}
              alt="cards image"
            ></Image>
          </CardMedia>
          <Box sx={{ display: 'flex' }}>
            <CardContent>
              <Typography component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mar 18 2023
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia>
            <Image
              src={sidebar}
              width={150}
              height={250}
              alt="cards image"
            ></Image>
          </CardMedia>
          <Box sx={{ display: 'flex' }}>
            <CardContent>
              <Typography component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mar 18 2023
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>

      <Image src={sidebar2} width={800} height={800} alt="cards image"></Image>
    </Box>
  );
};

export default SideBar;
