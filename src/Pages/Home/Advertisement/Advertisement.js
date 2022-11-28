import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementCard from './AdvertisementCard';

const Advertisement = () => {
    const { data: promotions = [], isLoading } = useQuery({
        queryKey: ['promotions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/promotions');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div>
                {
                    promotions.map(promotion => <AdvertisementCard
                        key={promotion._id}
                        promotion={promotion}
                    ></AdvertisementCard>)
                }
            </div>
        </div>
    );
};

export default Advertisement;