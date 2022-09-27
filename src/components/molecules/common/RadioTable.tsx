import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import {
  FormControlLabel as MuiFormControlLabel,
  IconButton,
  Radio,
  RadioGroup as MuiRadioGroup,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
} from '@mui/material';
import { SurveyListItem } from 'types/api';
import { Icon } from 'components/atoms/Icon';
import { Button } from 'components/atoms/Button';
import { Dialog } from 'components/atoms/Dialog';
import { Stack } from 'components/atoms/Stack';

type Props = {
  surveyList: SurveyListItem[];
};

export const RadioTable: FC<Props> = ({ surveyList }) => {
  const [checked, setChecked] = useState('');
  const [desc, setDesc] = useState(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [targetItem, setTargetItem] = React.useState<SurveyListItem>({
    id: 0,
    title: '',
    createdAt: '',
  });

  const sortSurveyList = useCallback(() => {
    if (desc) {
      return [...surveyList].sort((a, b) => {
        return Number(a.createdAt) - Number(b.createdAt) ? 1 : -1;
      });
    } else {
      return surveyList;
    }
  }, [surveyList, desc]);

  const checkedRow = useCallback(
    (index: number) => {
      return desc
        ? Number(checked) === surveyList.length - index
        : Number(checked) === index + 1;
    },
    [surveyList, checked, desc],
  );

  const deleteItem = (item: SurveyListItem) => {
    // deleteSurvey
    setTargetItem(item);
    setOpen(true);
  };

  return (
    <>
      <RadioGroup
        value={checked}
        onChange={(e) => {
          setChecked(e.target.value);
        }}>
        <div className='table-other'>
          <FormControlLabel
            className='select-button'
            control={<Radio color={'primary'} value={''} />}
            label={'選択する'}
          />
          <Typography>アンケート連携なし</Typography>
        </div>
        <Table>
          <TableHead>
            <TableRow select={''}>
              <TableCell>
                <Typography>選択</Typography>
              </TableCell>
              <TableCell>
                <Typography>ID</Typography>
              </TableCell>
              <TableCell>
                <Stack center space={1}>
                  <Typography>作成日</Typography>
                  <Stack column>
                    <VerticalButton onClick={() => setDesc(true)}>
                      <Icon iconType='asc' iconSize='xs' />
                    </VerticalButton>
                    <VerticalButton onClick={() => setDesc(false)}>
                      <Icon iconType='desc' iconSize='xs' />
                    </VerticalButton>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography>アンケートタイトル</Typography>
              </TableCell>
              <TableCell>
                <Typography>コピーを作成</Typography>
              </TableCell>
              <TableCell>
                <Typography>編集</Typography>
              </TableCell>
              <TableCell>
                <Typography>削除</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortSurveyList().map((item, index) => (
              <TableRow key={item.id} select={checkedRow(index) ? 'select' : ''}>
                <TableCell className='cell-medium-s'>
                  <FormControlLabel
                    className='select-button'
                    control={<Radio color={'primary'} value={item.id} />}
                    label={'選択する'}
                    select={Number(checked) === index + 1 ? 'select' : ''}
                  />
                </TableCell>
                <TableCell className='cell-small'>
                  <Typography className='id'>{item.id}</Typography>
                </TableCell>
                <TableCell className='cell-medium'>
                  <Typography className='date'>{item.createdAt}</Typography>
                </TableCell>
                <TableCell className='cell-large'>
                  <Typography className='title'>{item.title}</Typography>
                </TableCell>
                <TableCell className='cell-small'>
                  <Button IconButton routerPath='/edit/survey'>
                    <Icon iconType='copy' iconSize='md' />
                  </Button>
                </TableCell>
                <TableCell className='cell-small'>
                  <Button IconButton routerPath='/edit/survey'>
                    <Icon iconType='edit' iconSize='md' />
                  </Button>
                </TableCell>
                <TableCell className='cell-small'>
                  <Button IconButton onClick={() => deleteItem(item)}>
                    <Icon iconType='trash' iconSize='md' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </RadioGroup>
      {open && (
        <Dialog
          title='以下のアンケートを削除しますか？'
          body={<Typography>{targetItem.title}</Typography>}
          actions={
            <>
              <Button label='キャンセル' classes='grey' />
              <Button label='削除' />
            </>
          }
          borderBody
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

const RadioGroup = styled(MuiRadioGroup)`
  .table-other {
    display: flex;
    align-items: center;
    padding: 0 12px 14px;
    .MuiTypography-root {
      padding-left: 12px;
    }
  }
`;

const VerticalButton = styled(IconButton)`
  padding: 2px !important;
`;

const FormControlLabel = styled(MuiFormControlLabel)<{ select?: 'select' | '' }>`
  &.select-button {
    .MuiRadio-root {
      display: none;
      + .MuiFormControlLabel-label {
        margin-left: 6px;
        padding: 4px;
        color: #81c21e;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        border: solid 2px #81c21e;
        border-radius: 5px;
        background: #ffffff;
        transition: all 0.3s ease;
      }
    }
    .Mui-checked {
      + .MuiFormControlLabel-label {
        border: solid 2px #009845;
        background: #009444;
        color: #ffffff;
      }
    }
  }
`;

const TableRow = styled(MuiTableRow)<{ select: 'select' | '' }>`
  background: ${({ select }) => (select ? '#efffbd' : '#ffffff')};
  transition: all 0.3s ease;
  .MuiTableCell-root {
    .title {
      width: fit-content;
      cursor: pointer;
      &:hover {
        font-weight: bold;
        border-bottom: solid 2px #83c41e;
      }
    }
  }
`;

const TableCell = styled(MuiTableCell)`
  &.cell-small {
    width: 8.3333%;
  }
  &.cell-medium-s {
    width: 9.2%;
  }
  &.cell-medium {
    width: 12%;
  }
  &.cell-large {
    width: 41.6666%;
  }
`;
