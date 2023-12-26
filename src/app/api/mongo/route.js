import {MongoClient} from "mongodb"
import { NextResponse } from "next/server";

export async function GET(request) {
const uri = "mongodb+srv://inventory:Balkhi11@cluster0.efcsf.mongodb.net/";

const client = new MongoClient(uri);
     {
  try {
    const database = client.db('sample_training');
    const grades = database.collection('grades');
    const query = {};
    const grade = await grades.find(query).toArray();
    console.log(grade);
    return NextResponse.json({"a":"mongoos",grade})
  } finally {
    await client.close();
  };
}
}