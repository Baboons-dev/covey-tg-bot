import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Dummy data for development
const dummyReferrals = [
  {
    id: '1',
    firstName: 'Alice Johnson',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    firstName: 'Bob Smith',
    createdAt: '2024-01-14T15:45:00Z',
  },
  {
    id: '3',
    firstName: 'Carol Williams',
    createdAt: '2024-01-13T09:20:00Z',
  },
  {
    id: '4',
    firstName: 'David Brown',
    createdAt: '2024-01-12T14:15:00Z',
  },
  {
    id: '5',
    firstName: 'Eva Davis',
    createdAt: '2024-01-11T11:50:00Z',
  }
];

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    // For development, return dummy data
    return NextResponse.json(dummyReferrals);

    // Production code (commented out for now)
    /*
    const referrals = await prisma.user.findMany({
      where: {
        referredById: params.userId,
      },
      select: {
        id: true,
        firstName: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(referrals);
    */
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch referrals' },
      { status: 500 }
    );
  }
}