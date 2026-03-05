import dbConnect from '../../../../lib/db';
import Product from '../../../../lib/models/Product';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    try {
        await dbConnect();
        const { category } = await params;
        const products = await Product.find({ category });
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching products", error }, { status: 500 });
    }
}
