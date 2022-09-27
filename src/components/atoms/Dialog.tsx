import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';
import {
  CardMedia,
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
  DialogTitle,
} from '@mui/material';
import { Divider } from './Divider';

type Props = {
  title: string;
  body?: ReactNode;
  actions?: ReactNode;
  preview?: string;
  borderBody?: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Dialog: FC<Props> = ({
  open,
  body,
  actions,
  preview,
  borderBody,
  setOpen,
  title,
  ...props
}) => {
  return (
    <StyledDialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      {(body || preview) && <Divider />}
      {body && <DialogContent borderBody={borderBody}>{body}</DialogContent>}
      {preview && (
        <>
          <div className='preview'>
            <CardMedia component='iframe' image='https://takelab.co.jp/' />
          </div>
        </>
      )}
      {actions && <DialogActions>{actions}</DialogActions>}
    </StyledDialog>
  );
};

const StyledDialog = styled(MuiDialog)``;

const DialogContent = styled(({ borderBody, ...props }) => (
  <MuiDialogContent {...props} />
))`
  margin: 14px 0;
  padding: 20px 24px;
  border: ${(props) => (props.borderBody ? 'solid 1.4px #cecece' : 'unset')};
  border-radius: ${(props) => (props.borderBody ? '6px' : 'unset')};
`;

const DialogActions = styled(MuiDialogActions)`
  justify-content: center;
`;
