
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface Donation {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  image: string;
}

interface DonationCardProps {
  donation: Donation;
}

const DonationCard = ({ donation }: DonationCardProps) => {
  const percentage = Math.min(Math.round((donation.currentAmount / donation.targetAmount) * 100), 100);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <img 
        src={donation.image} 
        alt={donation.title}
        className="w-full h-48 object-cover"
      />
      
      <CardHeader>
        <CardTitle>{donation.title}</CardTitle>
        <CardDescription>{donation.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">${donation.currentAmount.toLocaleString()}</span>
            <span className="text-gray-500">Meta: ${donation.targetAmount.toLocaleString()}</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-petBlue-500 to-petPurple-500 h-2.5 rounded-full" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-600">{percentage}% alcanzado</p>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-petBlue-500 to-petPurple-600 hover:from-petBlue-600 hover:to-petPurple-700">
          Donar Ahora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationCard;
