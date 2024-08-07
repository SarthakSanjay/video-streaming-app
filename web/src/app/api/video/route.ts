import { putObject } from '@/aws/aws';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const url = await putObject(body.filename , body.contentType)
    if(!url){
        return NextResponse.json({msg:'Error uploading file'})
    }
    return NextResponse.json({ url })
}