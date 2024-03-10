import { NextRequest, NextResponse } from "next/server";

import { connect } from "../../../../../dbConfig/dbConfig";
import Tags, {  } from '../../../../../models/tags'

connect()

export async function GET(req: NextRequest, res: NextRequest) {
  try {
    // @ts-ignore:next-line
    const tags = await Tags.find({soft_delete: false})
    return NextResponse.json({ data: tags }, { status: 200 })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}