//@ts-nocheck
import React, { createRef, useEffect, useState } from "react";
import { Button, Select, MenuItem } from "@mui/material";
import CardContainer from "./CardContainer";
import Input from "@/components/Input";
import { AddCircleRounded } from "@mui/icons-material";
import updateSM2Algorithm from '../../../../helpers/updateSM2Algorithm';
import { usePost, useGet, usePut } from "@/hooks";
import { notesUrl } from "@/urls";
import { Tag } from "@/components/NuggetComponent/nugget.style";
import ProblemList from "@/components/ProblemList";

function Deck() {
  const [text, setText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const tagRef = createRef();
  const { data: cards, refetch: getNotesList } = useGet({ url: notesUrl.listNotes });
  console.log("🚀 ~ Deck ~ cards:", cards)

  const { post: addNote, data: addData } = usePost({ url: notesUrl.addNotes });
  const { post: deleteNote, data: deleteData } = usePut({ url: notesUrl.deleteNote });
  const { post: editNote, data: editData } = usePut({ url: notesUrl.editNote });

  const { data: tagsList = [] } = useGet({ url: notesUrl.getTags });
  const { post: createTag } = usePost({ url: notesUrl.createTag });

  useEffect(() => {
    if (deleteData) {
      const { success } = deleteData;
      if (success) {
        getNotesList();
      }
    }
  }, [deleteData]);

  useEffect(() => {
    if (addData) {
      const { success } = addData;
      if (success) {
        getNotesList();
      }
    }
  }, [addData]);

  useEffect(() => {
    if (editData) {
      const { success } = editData;
      if (success) {
        getNotesList();
      }
    }
  }, [editData]);

  const addCardHandler = () => {
    const newNote = {
      ques: text,
    };

    const newCards = Array.isArray(cards) ? [...cards] : [];
    newCards.push({
      id: crypto.randomUUID(),
      ques: text,
      createdAt: new Date(),
      rate: 0,
      interval: 0,
      repetitionNumber: 0,
      easinessFactor: -100,
    });
    setText('');
    addNote(newNote);
  };

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const rateChangeHandler = (selectedCardId: string, rate: number) => {
    if (Array.isArray(cards)) {
      const newCards = cards.map((card) => {
        const { id, repetitionNumber, easinessFactor, interval } = card;
        if (id === selectedCardId) {
          const { repetitionNumber: newRepetitionNumber, easinessFactor: newEasinessFactor, interval: newInterval } = updateSM2Algorithm(rate, repetitionNumber, easinessFactor, interval);
          return {
            ...card,
            repetitionNumber: newRepetitionNumber,
            easinessFactor: newEasinessFactor,
            interval: newInterval,
          };
        }
        return card;
      });
      setCards(newCards); // Assuming you have a state variable `setCards` to update the cards.
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addCardHandler();
    }
  };

  const deleteCardHandler = (id: string) => {
    deleteNote({ noteId: id });
  };

  const editClickHandler = (id: string, ques: string) => {
    editNote({
      noteId: id,
      ques,
    });
  };

  const tagAddClickHandler = () => {
    const value = tagRef.current.value;
    createTag({ tagsText: value });
  };

  const handleTagsChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      {cards && <ProblemList data={cards} />}
      {/* <h1 className="text-3xl font-bold underline">Deck</h1>
      <Input width={90} onKeyDown={handleKeyDown} value={text} onChange={textChangeHandler} />
      <Button onClick={addCardHandler}>Add</Button>
      <Select
        multiple
        style={{ width: 800 }}
        value={selectedTags}
        onChange={handleTagsChange}
      >
        {Array.isArray(tagsList) && tagsList.length
          ? tagsList.map((tag) => (
            <MenuItem key={tag.id} value={tag.name}>
              {tag.name}
            </MenuItem>
          ))
          : null
        }
      </Select>
      <AddCircleRounded onClick={tagAddClickHandler} />
      <CardContainer editClickHandler={editClickHandler} deleteCardHandler={deleteCardHandler} rateChangeHandler={rateChangeHandler} cards={cards} /> */}
    </>
  );
}

export default Deck;
