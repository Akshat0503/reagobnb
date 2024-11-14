'use client';

import { useState } from 'react';
import Image from "next/image";
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';

const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query);
    }
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">

            <div 
                onClick={() =>_setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/inc_components.jpg"
                    alt="Category - Pools"
                    width={40}
                    height={40}
                />

                <span className='text-s'>All</span>
            </div>

            <div 
                onClick={() =>_setCategory('Pools')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Pools' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/inc_components.jpg"
                    alt="Category - Pools"
                    width={40}
                    height={40}
                />

                <span className='text-s'>Amazing Pools</span>
            </div>

            <div 
                onClick={() =>_setCategory('Farms')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Farms' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/inc_components_farms.jpg"
                    alt="Category - Pools"
                    width={40}
                    height={40}
                />

                <span className='text-s'>Farms</span>
            </div>

            <div 
                onClick={() =>_setCategory('Cabins')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/inc_components_cabin.jpg"
                    alt="Category - Pools"
                    width={40}
                    height={40}
                />

                <span className='text-s'>Cabins</span>
            </div>

            <div 
                onClick={() =>_setCategory('tiny_homes')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'tiny_homes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image
                    src="/inc_components_tiny.jpg"
                    alt="Category - Pools"
                    width={40}
                    height={40}
                />

                <span className='text-s'>Tiny homes </span>
            </div>
        </div>
    )
}

export default  Categories;