import { NextRequest, NextResponse } from "next/server";

import { connect } from "../../../../dbConfig/dbConfig";
import Notes, { INotes } from '../../../../models/notes'

connect()

export async function GET(req: NextRequest, res: NextRequest) {
  try {
    // @ts-ignore:next-line
    const notes = await Notes.find({soft_delete: false})
    return NextResponse.json({ data: notes }, { status: 200 })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}