import { NextResponse } from "next/server";
import sequelize from "@/lib/db";
import User from "@/models/user";

await sequelize.sync({ alter: true });

export async function GET() {
  try {
    const users = await User.findAll();
    return NextResponse.json(
      {
        success: true,
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, age } = body;

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and Email are required",
        },
        { status: 400 }
      );
    }

    const user = await User.create({ name, email, age });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}