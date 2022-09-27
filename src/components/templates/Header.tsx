import React, { FC, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import useAuth from 'hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled as s, alpha } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';
const Search = s('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = s('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = s(InputBase)(({ theme }) => ({
  height: '32px',
  maxHeight: '32px',
  minHeight: '32px',
  fontSize: '14px',
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': { width: '28ch' },
    },
  },
}));

const pages = ['RS日本株', '比較', 'Blog'];
const LEFT_LINKS = [
  { label: 'RS日本株', to: '/rs' },
  { label: '比較', to: '/compare' },
  { label: 'リサーチ', to: '/research' },
  { label: '知識', to: '/knowledge' },
];
const RIGHT_LINKS = [
  { label: 'ログイン', to: '/signin' },
  { label: '新規登録', to: '/signup' },
];

export const Header: FC = () => {
  const [selected, setSelected] = useState<string>('店');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { isLogined } = useAuth(null);

  return (
    <React.Fragment>
      {/* <StyledHeader container spacing={1}>
          <Grid item spacing={1}>
            <Toolbar></Toolbar>
          </Grid>
          <Grid item spacing={1}>
            <span style={{ color: 'white' }}>1</span>
          </Grid>
          <Grid item spacing={1}>
            <span style={{ color: 'white' }}>1</span>
          </Grid>
          <Grid item spacing={1}>
            <span style={{ color: 'white' }}>1</span>
          </Grid>
        </StyledHeader> */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#00473a !important' }}>
          <Toolbar sx={{ minHeight: '44px !important', maxHeight: '44px !important' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 0 }}>
              <MenuIcon />
            </IconButton>

            <Typography
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                paddingTop: '6px',
                paddingBottom: '0px',
                paddingLeft: '0px',
                maxWidth: '156px',
                minWidth: '156px',
                width: '156px',
                display: { xs: 'none', sm: 'block' },
                '> a': { '&:hover': { opacity: '0.9' }, cursor: 'pointer' },
              }}>
              <Link href={'/'} passHref>
                <a>
                  <Image
                    src={'/assets/images/logo.png'}
                    objectFit="contain"
                    layout="fixed"
                    width="156px"
                    height="40px"
                    alt="logo"
                  />
                </a>
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {LEFT_LINKS.map(({ label, to }) => (
                <Link href={to} passHref key={label}>
                  <Button
                    size="small"
                    sx={{
                      my: 0,
                      color: 'white',
                      display: 'block',
                      maxWidth: '100px',
                      minWidth: '100px',
                      width: '100px',
                      textAlign: 'center',
                      '&:hover': { opacity: '0.8' },
                    }}>
                    {label}
                  </Button>
                </Link>
              ))}
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="銘柄名/銘柄コードで検索"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                maxWidth: '200px',
                minWidth: '200px',
                width: '200px',
              }}>
              {RIGHT_LINKS.map(({ label, to }) => (
                <Link href={to} passHref key={label}>
                  <Button
                    onClick={handleCloseNavMenu}
                    size="small"
                    sx={{
                      my: 0,
                      color: 'white',
                      display: 'block',
                      maxWidth: '100px',
                      minWidth: '100px',
                      width: '100px',
                      textAlign: 'center',
                      '&:hover': { opacity: '0.8' },
                    }}>
                    {label}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit">
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );

  return (
    <>
      <StyledHeader>
        <div>
          <Link href={'/'}>
            <a style={{ marginLeft: '10px', marginRight: '10px', paddingTop: 0 }}>
              <Image
                src={'/assets/images/logo.png'}
                objectFit="contain"
                layout="fixed"
                width="142px"
                height="38px"
                alt="logo"
              />
            </a>
          </Link>
          <Link href={'/rs'}>
            <a className="header-text-item header-text-item-active">RS 日本株</a>
          </Link>
          <Link href={'/'}>
            <a className="header-text-item">RS 分析</a>
          </Link>
          <Link href={'/'}>
            <a className="header-text-item">ランキング</a>
          </Link>
          <Link href={'/'}>
            <a className="header-text-item">特集</a>
          </Link>
          <Link href={'/'}>
            <a className="header-text-item">知識</a>
          </Link>
          <Link href={'/signin'}>
            <a className="header-text-item">{isLogined ? 'ログイン中' : 'ログイン'}</a>
          </Link>
          <Link href={'/signup'}>
            <a className="header-text-item">アカウント作成</a>
          </Link>
          {/* <Stack direction="row" alignItems="center">
            <FormControl sx={{ width: '360px' }}>
              <Select
                className="select-store-base"
                value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
                MenuProps={{
                  classes: {
                    paper: 'select-store-paper',
                  },
                }}>
                <MenuItem value={'店舗名◯◯１２文字以上は...'}>
                  <Typography>店舗名◯◯１２文字以上は...</Typography>
                </MenuItem>
                <MenuItem value={'サムギョプサルとポッサムの店 PEGOPA 大森店'}>
                  <Typography>サムギョプサルとポッサムの店 PEGOPA 大森店</Typography>
                </MenuItem>
              </Select>
            </FormControl>
            <Stack direction="row" alignItems="center">
              <Chip label={'123'} chipType="bubble" />
              <IconButton>
                <Icon iconType="notification" />
              </IconButton>
            </Stack>
            <Button classes="transparent" onClick={handleClick}>
              名前名前１２文字以上は...
            </Button>
            <Menu
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              onClose={handleClose}>
              <MenuItem
                key={'1'}
                onClick={handleClose}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingRight: '26px',
                  width: '180px',
                }}>
                <ListItemIcon>
                  <Icon iconType="logout" />
                </ListItemIcon>
                <Typography fontSize={14} fontWeight="bold">
                  ログアウト
                </Typography>
              </MenuItem>
            </Menu>
          </Stack> */}
        </div>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled(Grid)`
  width: 100%;
  background-color: #00473a;

  > div {
    display: flex;
    margin: auto;
    height: 54px;
    justify-content: left;
    align-items: center;

    .header-text-item {
      padding: 6px 16px;
      margin: 0px 20px;
      border-radius: 10px;
    }

    .header-text-item-active {
      background: white;
      color: #00473a;
    }

    a {
      text-align: center;
      color: white;

      span {
        color: white;
        background-color: red;
      }
    }
    .select-store-base {
      margin-right: 18px;
      background: unset;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        .MuiOutlinedInput-notchedOutline {
          border-color: #009845;
        }
      }
      fieldset {
        border-color: #009845;
        border-radius: unset;
        border-top: none;
        border-bottom: none;
      }
      .MuiSelect-select {
        padding: 4px 12px !important;
      }
      .MuiSelect-icon {
        color: #009845;
      }
      .MuiTypography-root {
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;
