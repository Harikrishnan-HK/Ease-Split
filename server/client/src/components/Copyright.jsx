import { Link, styled, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Copyright() {

  return (
    <Typography mt="-2" variant="body2" align="center" sx={{ color: 'text.secondary'}}>
            &copy; Harikrishnan Karuppiah &nbsp; 
            <br/>
            <Link variant="subtitle3" component={'a'} href="https://github.com/Harikrishnan-HK/Ease-Split" target="_blank">
            [GitHub]
            </Link>
          </Typography>
  )
}
