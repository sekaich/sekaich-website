import { createTheme } from '@mui/material';

//Material-UI の各アイテムの共通CSS変更 & リセットCSS効かない場合の追加項目
const theme = createTheme({
  palette: {
    primary: {
      main: '#009845',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          a: { textDecoration: 'none' },
          ul: { margin: 'unset', padding: 'unset' },
          li: { listStyle: 'none' },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 12px',
          minWidth: '160px',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
    },
    MuiRadio: {},
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: 'dotted 1.8px rgba(224,224,224,1)',
        },
        head: {
          borderBottom: 'solid 1px rgba(160,160,160,1)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '0px 12px',
          height: '48px',
          borderBottom: 'unset',
        },
        head: {
          background: '#f2f2f2',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#ffffff',
        },
        input: {
          padding: '12px !important',
        },
        multiline: {
          padding: 'unset !important',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: '0 !important',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          display: 'flex',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          '&.select-store-paper': {
            '& p': {
              fontSize: '14px',
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '36px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .preview': {
            margin: '24px 48px',
            width: '390px',
            height: '844px',
            '& iframe': {
              height: '100%',
            },
          },
        },
        paper: {
          padding: '8px 24px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
    },
  },
});
export default theme;
