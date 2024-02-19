import { NextRequest, NextResponse } from "next/server";

import { connect } from "../../../../dbConfig/dbConfig";
import Notes from '../../../../models/notes'

connect()

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json()
    const { ques, } = reqBody
    const id = crypto.randomUUID()
    let response;

    if (!ques) return NextResponse.json({ error: 'ques is not provided' }, { status: 400 })

    const notesData = await Notes.findOne({ ques })
    if (notesData) return NextResponse.json({ error: 'ques already exist' }, { status: 400 })

    let newNotes = new Notes({
      ques, id
    })

    const savedNote = await newNotes.save()
    return NextResponse.json({ message: 'Success' }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}