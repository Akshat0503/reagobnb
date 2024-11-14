import Image from "next/image";
interface CategoriesProps  {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                    onClick={() => setCategory('Pools')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Pools' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/inc_components.jpg"
                        alt="Category - Pools"
                        width={40}
                        height={40}
                    />

                    <span className='text-s'>Amazing Pools</span>
                </div>

                <div 
                    onClick={() => setCategory('Farms')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Farms' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/inc_components_farms.jpg"
                        alt="Category - farms"
                        width={40}
                        height={40}
                    />

                    <span className='text-s'>Farms</span>
                </div>

                <div 
                    onClick={() => setCategory('Cabins')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/inc_components_cabin.jpg"
                        alt="Category - Cabins"
                        width={40}
                        height={40}
                    />

                    <span className='text-s'>Cabins</span>
                </div>

                <div 
                    onClick={() => setCategory('tiny_homes')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/inc_components_tiny.jpg"
                        alt="Category - Tinyhomes"
                        width={40}
                        height={40}
                    />

                    <span className='text-s'>Tiny homes </span>
                </div>
            </div>
        </>
    )
}

export default Categories;