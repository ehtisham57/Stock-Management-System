import {MongoClient} from "mongodb"
import { NextResponse } from "next/server";

////get Api

export async function GET(request) {
const uri = "mongodb+srv://inventory:Balkhi11@cluster0.efcsf.mongodb.net/";
const client = new MongoClient(uri);
     {
  try {
    const database = client.db('stock');
    const inventory = database.collection('inventory');
    const query = {};
    const products = await inventory.find(query).toArray();
    console.log(products);
    return NextResponse.json({success :true ,  products})
  } finally {
    await client.close();
  };
}
}


////post Api

export async function POST(request) {
    let body  =await request.json()
    console.log(body);
    const uri = "mongodb+srv://inventory:Balkhi11@cluster0.efcsf.mongodb.net/";
    const client = new MongoClient(uri);
         {
      try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');
        const query = {};
        const product = await inventory.insertOne(body);
        console.log(product);
        return NextResponse.json({product, ok: true})
      } finally {
        await client.close();
      };
    }
    }