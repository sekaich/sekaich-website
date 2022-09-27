import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  FormControl,
  ListItemIcon,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  CheckBox as CheckBoxIcon,
  Notes as NotesIcon,
  RadioButtonChecked as RadioIcon,
  ShortText as ShortTextIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { Button } from 'components/atoms/Button';
import { Switch } from 'components/atoms/Switch';
import { Icon } from 'components/atoms/Icon';
import { Divider } from 'components/atoms/Divider';
import { ChoicesForm } from './ChoicesForm';
import { TextFieldForm } from './TextFieldForm';
import { TextAreaForm } from './TextAreaForm';
import { RateForm } from './RateForm';
import { TimeForm } from './TimeForm';
import { DateForm } from './DateForm';
import { SurveyItem } from 'types/api';

type Props = {
  itemList: SurveyItem[];
  itemIndex: number;
  setItemList: Dispatch<SetStateAction<SurveyItem[]>>;
  pageValue: number;
};

export const SelectParts: FC<Props> = ({
  itemList,
  itemIndex,
  setItemList,
  pageValue,
}) => {
  const [selectType, setSelectType] = useState<SurveyItem['type']>('radio');
  const inputRef = useRef<HTMLDivElement>(null);
  const [itemCount, setItemCount] = useState<number>(itemList.length);
  const [validateParts, setValidateParts] = useState<boolean>(false);

  const usePrevious = (itemCount: any) => {
    const ref: React.MutableRefObject<any> = useRef(itemList.length);
    useEffect(() => {
      ref.current = itemCount;
    });
    return ref.current;
  };

  const prevItemCount = usePrevious(itemCount);
  const prevRef = usePrevious(inputRef);

  useEffect(() => {
    const focus = setTimeout(() => {
      if (
        itemList.length > 1 &&
        prevItemCount === itemCount &&
        prevRef.current !== inputRef.current
      ) {
        inputRef.current?.focus({
          preventScroll: true,
        });
      }
    }, 500);

    const scroll = setTimeout(() => {
      if (itemList.length > 1 && prevItemCount < itemCount) {
        inputRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else if (itemList.length > 1 && prevItemCount > itemCount) {
        scrollBy({ behavior: 'smooth', top: 100 });
      }
    }, 140);

    return () => {
      setItemCount(itemList.length);
      clearTimeout(scroll);
      clearTimeout(focus);
    };
  }, [itemList, prevItemCount, itemCount, prevRef]);

  const changeType = (type: SurveyItem['type']) => {
    itemList[itemIndex].type = type;
    setItemList([...itemList]);
  };

  const changeTitle = (title: string) => {
    itemList[itemIndex].title = title;
    setItemList([...itemList]);
  };

  const editParts = (partsIndex: number, value: string) => {
    if (itemList[itemIndex].parts.some((e) => e.data === value)) {
      setValidateParts(true);
    } else {
      setValidateParts(false);
    }
    itemList[itemIndex].parts[partsIndex].data = value;
    setItemList([...itemList]);
  };

  const addParts = () => {
    const uniquePartsId = Math.max(...itemList[itemIndex].parts.map((e) => e.id)) + 1;
    itemList[itemIndex].parts.push({
      id: uniquePartsId,
      data: '',
    });
    const tmp = new Set(itemList[itemIndex].parts);
    if (tmp.size !== itemList[itemIndex].parts.length) {
      setValidateParts(true);
    }
    setItemList([...itemList]);
  };

  const toggleOtherParts = (value: boolean) => {
    if (value) {
      itemList[itemIndex].partsOther = true;
    } else {
      itemList[itemIndex].partsOther = false;
    }
    setItemList([...itemList]);
  };

  const deleteParts = (partsIndex: number) => {
    itemList[itemIndex].parts.splice(partsIndex, 1);
    setItemList([...itemList]);
  };

  // アンケートタイプ変更時に最適な形でStateを初期化
  const resetParts = (partsType: SurveyItem['type']) => {
    if (partsType === 'radio' || partsType === 'checkbox' || partsType === 'pulldown') {
      if (
        selectType === 'radio' ||
        selectType === 'checkbox' ||
        selectType === 'pulldown'
      ) {
        return;
      }
      itemList[itemIndex].parts.splice(0, 8, { id: 0, data: '選択肢１' });
    } else if (partsType === 'rate') {
      itemList[itemIndex].parts.splice(
        0,
        8,
        { id: 0, data: '1' },
        { id: 1, data: '5' },
        { id: 2, data: '' },
        { id: 3, data: '' },
      );
    } else {
      itemList[itemIndex].parts.splice(0, 8, { id: 0, data: '' });
    }
    setItemList([...itemList]);
    setSelectType(partsType);
  };

  const copyItem = (itemList: SurveyItem[], itemIndex: number) => {
    setTimeout(() => {
      inputRef.current?.scrollIntoView({
        block: 'nearest',
      });
    }, 1);
    const uniqueItemId = Math.max(...itemList.map((e) => e.id)) + 1;
    itemList.splice(itemIndex + 1, 0, {
      id: uniqueItemId,
      pageId: pageValue,
      type: itemList[itemIndex].type,
      title: `${itemList[itemIndex].title}のコピー`,
      parts: itemList[itemIndex].parts.map((value) => ({ ...value })),
      partsOther: itemList[itemIndex].partsOther,
    });
    setItemList([...itemList]);
  };

  const deleteItem = () => {
    setTimeout(() => {
      inputRef.current?.scrollIntoView({
        block: 'nearest',
      });
    }, 1);
    if (itemList.length > 1) {
      itemList.splice(itemIndex, 1);
      setItemList([...itemList]);
    } else {
      alert('アンケートは１つ以上必要です。');
    }
  };

  const comparePageItems = () => {
    const tmp = itemList.filter((e) => e.pageId === pageValue);
    return tmp.length !== 1;
  };

  return (
    <>
      <StyledSelectParts>
        <Stack
          className='header'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={1}>
          <FormControl fullWidth>
            <TextField
              placeholder='質問内容'
              value={itemList[itemIndex].title}
              inputRef={inputRef}
              onChange={(e) => changeTitle(e.target.value)}
              inputProps={{ maxLength: 100 }}
            />
          </FormControl>
          <FormControl sx={{ width: '300px' }}>
            <Select
              value={itemList[itemIndex].type}
              onChange={(e: any) => {
                changeType(e.target.value);
                resetParts(e.target.value);
              }}>
              <MenuItem value={'radio'}>
                <ListItemIcon>
                  <RadioIcon color='primary' />
                </ListItemIcon>
                <Typography>ラジオボタン</Typography>
              </MenuItem>
              <MenuItem value={'checkbox'}>
                <ListItemIcon>
                  <CheckBoxIcon color='primary' />
                </ListItemIcon>
                <Typography>チェックボックス</Typography>
              </MenuItem>
              <MenuItem value={'pulldown'}>
                <ListItemIcon>
                  <Icon iconType='pulldown' iconSize='sm' />
                </ListItemIcon>
                <Typography>プルダウン</Typography>
              </MenuItem>
              <MenuItem value={'textfield'}>
                <ListItemIcon>
                  <ShortTextIcon color='primary' />
                </ListItemIcon>
                <Typography>記述式 - 短文</Typography>
              </MenuItem>
              <MenuItem value={'textarea'}>
                <ListItemIcon>
                  <NotesIcon color='primary' />
                </ListItemIcon>
                <Typography>記述式 - 長文</Typography>
              </MenuItem>
              <MenuItem value={'rate'}>
                <ListItemIcon>
                  <StarIcon color='primary' />
                </ListItemIcon>
                <Typography>段階評価</Typography>
              </MenuItem>
              <MenuItem value={'date'}>
                <ListItemIcon>
                  <Icon iconType='calender' iconSize='sm' />
                </ListItemIcon>
                <Typography>日付</Typography>
              </MenuItem>
              <MenuItem value={'time'}>
                <ListItemIcon>
                  <Icon iconType='time' iconSize='sm' />
                </ListItemIcon>
                <Typography>時刻</Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack className='body' spacing={2}>
          {(itemList[itemIndex].type === 'radio' ||
            itemList[itemIndex].type === 'checkbox' ||
            itemList[itemIndex].type === 'pulldown') && (
            <ChoicesForm
              itemList={itemList}
              itemIndex={itemIndex}
              setItemList={setItemList}
              editParts={editParts}
              addParts={addParts}
              deleteParts={deleteParts}
              validateParts={validateParts}
              toggleOtherParts={toggleOtherParts}
            />
          )}
          {itemList[itemIndex].type === 'textfield' && (
            <TextFieldForm
              itemList={itemList}
              itemIndex={itemIndex}
              editParts={editParts}
            />
          )}
          {itemList[itemIndex].type === 'textarea' && (
            <TextAreaForm
              itemList={itemList}
              itemIndex={itemIndex}
              editParts={editParts}
            />
          )}
          {itemList[itemIndex].type === 'rate' && (
            <RateForm itemList={itemList} itemIndex={itemIndex} editParts={editParts} />
          )}
          {itemList[itemIndex].type === 'time' && <TimeForm />}
          {itemList[itemIndex].type === 'date' && <DateForm />}
        </Stack>
        <div className='action'>
          <Stack direction='row' justifyContent='space-between'>
            <Switch label='必須' />
            <Stack direction='row'>
              {itemList[itemIndex].title !== '' && (
                <Button
                  classes='icon-button'
                  label='コピー'
                  onClick={() => copyItem(itemList, itemIndex)}
                  endIcon={<Icon iconType='copy' iconSize='md' />}
                  disabled={validateParts}
                />
              )}
              {comparePageItems() && (
                <>
                  <Divider orientation='vertical' variant='fullWidth' flexItem />
                  <Button
                    classes='icon-button'
                    label='削除'
                    onClick={() => deleteItem()}
                    endIcon={<Icon iconType='trash' iconSize='md' />}
                    disabled={validateParts}
                  />
                </>
              )}
            </Stack>
          </Stack>
        </div>
      </StyledSelectParts>
    </>
  );
};

const StyledSelectParts = styled.div`
  margin-top: 30px;
  border: solid 1px #cccccc;
  border-radius: 10px;
  background: #f2f2f2;

  .header {
    padding: 16px;
    border-radius: 10px 10px 0 0;
    background: #ffffff;
  }

  .body {
    padding: 16px 0;
  }

  .action {
    padding: 16px;
    border-radius: 0 0 10px 10px;
    background: #ffffff;
  }
`;
