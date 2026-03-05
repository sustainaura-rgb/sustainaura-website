import dbConnect from '../../../lib/db';
import Carousel from '../../../lib/models/Carousel';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    try {
        await dbConnect();
        const items = await Carousel.find({});
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching carousel items", error }, { status: 500 });
    }
}
