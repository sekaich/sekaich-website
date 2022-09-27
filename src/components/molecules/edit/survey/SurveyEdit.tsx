import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import type {
  DraggableProvided,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Stack, TextField, Typography } from '@mui/material';
import { Card } from 'components/atoms/Card';
import { Heading } from 'components/atoms/Heading';
import { Icon } from 'components/atoms/Icon';
import { Button } from 'components/atoms/Button';
import { Tabs } from 'components/atoms/Tab';
import { SelectParts } from 'components/molecules/edit/survey/SelectParts';
import { SurveyItem } from 'types/api';
import { Add } from '@mui/icons-material';
import { Tab } from 'types/domain';
import { Dialog } from 'components/atoms/Dialog';

export const SurveyEdit: FC = () => {
  const [pages, setPages] = React.useState<Tab[]>([{ id: 1, label: 'ページ１' }]);
  const [tabValue, setTabValue] = React.useState(1);
  // const [surveyTitle, setSurveyTitle] = useState<string>('');
  const [itemList, setItemList] = useState<SurveyItem[]>([
    {
      id: 0,
      pageId: 1,
      type: 'radio',
      title: '',
      parts: [{ id: 0, data: '' }],
      partsOther: false,
    },
  ]);
  const [saveStatus, setSaveStatus] = React.useState<'unset' | 'save' | 'register'>(
    'unset',
  );
  const [isBrowser, setIsBrowser] = useState(false);
  const [isItemShow, setIsItemShow] = useState(true);
  const [dialogType, setDialogType] = React.useState<
    '' | 'save' | 'register' | 'preview' | 'validation'
  >('');
  const [open, setOpen] = React.useState<boolean>(false);

  const uniquePageId = Math.max(...pages.map((e) => e.id)) + 1;
  const uniqueItemId = Math.max(...itemList.map((e) => e.id)) + 1;

  const addPage = () => {
    pages.push({
      id: uniquePageId,
      label: 'ページ' + (pages.length + 1),
    });
    itemList.push({
      id: uniqueItemId,
      pageId: uniquePageId,
      type: 'radio',
      title: '',
      parts: [{ id: 0, data: '' }],
      partsOther: false,
    });
    setPages([...pages]);
    setItemList([...itemList]);
    setIsItemShow(false);
    setTimeout(() => setIsItemShow(true), 500);
  };

  const deletePage = (pageIndex: number, pageId: number) => {
    pages.splice(pageIndex, 1);
    const updatePages = pages.map((e, index) => {
      return { id: e.id, label: 'ページ' + (index + 1), iconType: e.iconType };
    });
    setPages([...updatePages]);
    const updateItemList = itemList.filter((e) => e.pageId !== pageId);
    setItemList([...updateItemList]);
    setTabValue(1);
  };

  const emptyTitleCheck = () => {
    if (itemList.some((e) => e.title === '')) {
      setDialogType('validation');
      setTabValue(tabValue);
      setOpen(true);
      return false;
    } else {
      return true;
    }
  };

  const addItem = (itemList: SurveyItem[]) => {
    const uniqueItemId = Math.max(...itemList.map((e) => e.id)) + 1;
    itemList.push({
      id: uniqueItemId,
      pageId: tabValue,
      type: 'radio',
      title: '',
      parts: [{ id: 0, data: '' }],
      partsOther: false,
    });
    setItemList([...itemList]);
  };

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const dragEndState = [...itemList];

      const [removed] = dragEndState.splice(result.source.index, 1);
      dragEndState.splice(result.destination.index, 0, removed);
      setItemList(dragEndState);
    },
    [itemList],
  );

  const save = () => {
    setSaveStatus('save');
    setDialogType('save');
    setOpen(true);
  };

  const regist = () => {
    setSaveStatus('register');
    setDialogType('register');
    setOpen(true);
  };

  const openPreview = () => {
    setDialogType('preview');
    setOpen(true);
  };

  useEffect(() => {
    setIsBrowser(process.browser);
  }, [itemList, pages]);

  return (
    <>
      <StyledWrapper isItemShow={isItemShow}>
        <Card caption='Step1:' title='アンケートを選ぶ'>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ padding: '24px 0' }}>
            <Heading variant='h4'>アンケート新規作成</Heading>
          </Stack>
          <div className='annotation'>
            <Typography>
              ※キャンペーンで「クチコミ依頼あり」にした場合、
              <br />
              「〇〇〇〇（店舗名）」をおすすめできますか？」が最後の質問に入ります。
            </Typography>
            <Typography className='feature'>
              ※質問のフレームをドラッグ＆ドロップで順番の入れ替えが可能です。
            </Typography>
          </div>
          <Stack className='input-title' spacing={1}>
            <TextField
              placeholder='アンケートタイトル（文字数１００文字以内）'
              inputProps={{ maxLength: 100 }}
              sx={{ width: '600px' }}
            />
            <TextField
              multiline
              rows={2}
              placeholder='アンケートの説明を入れることができます（文字数３００文字以内）'
              inputProps={{ maxLength: 300 }}
            />
          </Stack>
          <Tabs
            className='fluctuation'
            tabItem={pages}
            tabValue={tabValue}
            uniqueTabId={uniquePageId}
            setTabValue={setTabValue}
            addPage={addPage}
            deletePage={deletePage}
            hiddenAddTab={pages.length > 5}
            validateFunc={emptyTitleCheck}
          />
          <Stack>
            {isBrowser && (
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='items'>
                  {(provided: DroppableProvided) => (
                    <ul
                      className='select-parts'
                      {...provided.droppableProps}
                      ref={provided.innerRef}>
                      {itemList.map(
                        (item, index) => (
                          <Draggable
                            key={String(item.id)}
                            draggableId={String(item.id)}
                            index={index}>
                            {(provided: DraggableProvided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                                {item.pageId === tabValue && (
                                  <SelectParts
                                    itemList={itemList}
                                    itemIndex={index}
                                    setItemList={setItemList}
                                    pageValue={tabValue}
                                  />
                                )}
                              </li>
                            )}
                          </Draggable>
                        ),
                        [itemList],
                      )}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            )}
            <div className='tool-buttons'>
              <Button
                label='質問を追加'
                onClick={() => addItem(itemList)}
                startIcon={<Add fontSize='large' />}
                fullWidth
              />
            </div>
          </Stack>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}
            sx={{ padding: '36px' }}>
            {saveStatus !== 'unset' && (
              <Button
                label='プレビュー'
                onClick={openPreview}
                startIcon={<Icon iconType='preview' iconSize='md' circle='white' />}
              />
            )}

            <Button label='下書き保存' classes='grey' onClick={save} />
            <Button label='登録' onClick={regist} />
          </Stack>
        </Card>
      </StyledWrapper>
      {dialogType === 'register' && (
        <Dialog title='アンケートを一時保存しました' open={open} setOpen={setOpen} />
      )}
      {dialogType === 'save' && (
        <Dialog title='アンケートを登録しました' open={open} setOpen={setOpen} />
      )}
      {dialogType === 'preview' && (
        <Dialog title='プレビュー' preview='preview' open={open} setOpen={setOpen} />
      )}
      {dialogType === 'validation' && (
        <Dialog
          title='質問への入力がない場合はページを追加できません'
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

const StyledWrapper = styled.div<{ isItemShow: boolean }>`
  padding-bottom: 250px;

  .annotation {
    margin-bottom: 24px;

    p {
      color: #868686;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.8;

      &.feature {
        color: #009845;
      }
    }
  }

  .input-title {
    padding: 14px 16px 16px;
    border: solid 1px #cccccc;
    border-radius: 10px;
    background: #f2f2f2;

    .MuiInputBase-input {
      background: #ffffff;
    }
  }

  .fluctuation {
    margin-top: 24px;
  }

  .select-parts {
    width: 100%;
    transition: ${({ isItemShow }) => (isItemShow ? 'opacity 0.3s ease' : 'unset')};
    opacity: ${({ isItemShow }) => (isItemShow ? 1 : 0)};
  }

  .tool-buttons {
    margin-top: 30px;
  }
`;
