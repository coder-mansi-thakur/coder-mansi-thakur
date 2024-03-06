import { NextRequest, NextResponse } from "next/server";

import { connect } from "../../../../../dbConfig/dbConfig";
import Tags from '../../../../../models/tags'

connect()

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json()
    const { ques, tagsText} = reqBody
    const id = crypto.randomUUID()
    let response;

    if (!tagsText) return NextResponse.json({ error: 'tags text is not provided' }, { status: 400 })

    const notesData = await Tags.findOne({ name: tagsText, soft_delete: false })
    if (notesData) return NextResponse.json({ error: 'tag already exist' }, { status: 400 })
    console.log("🚀 ~ POST ~ notesData:", notesData)

    let newNotes = new Tags({
      id, name: tagsText
    })

    const savedNote = await newNotes.save()
    return NextResponse.json({ message: 'Success' , success: true}, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}