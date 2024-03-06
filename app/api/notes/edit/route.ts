import { NextRequest, NextResponse } from "next/server";

import { connect } from "../../../../dbConfig/dbConfig";
import Notes from '../../../../models/notes'

connect()

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json()
    const { noteId, ques } = reqBody
    let response;

    if (!noteId) return NextResponse.json({ error: 'note id is not provided' }, { status: 400 })

    const notesData = await Notes.updateOne({ id: noteId }, { $set: { ques } });

    if (!notesData) return NextResponse.json({ error: 'ques already exist' }, { status: 400 })

    // const savedNote = await newNotes.save()
    return NextResponse.json({ message: 'Success', success: true }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}