import Link from "next/link";
import Image from "next/image";
import TCorolla from "../../../../public/images/CorollaD.png"

export default function Corolla1() {
    return(
        <div>
            <h1 className="font-bold text-center underline text-3xl">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
              <div className="flex w-3/12 m-4 m-auto"><Image src={TCorolla} alt="corolla" width={150} height={150}></Image></div>      
        
        <div className="flex justify-center"> {/* Div of buttons*/}
        <button className=" bg-blue-500 hover:bg-purple-400 text-white rounded-lg py-2 px-3 m-12">Book a test drive</button>
        <button className=" bg-blue-500 hover:bg-purple-400 text-white rounded-lg py-2 px-3 m-12">Request Bank Finance</button>
        <button className=" bg-blue-500 hover:bg-purple-400 text-white rounded-lg py-2 px-3 m-12">Visit Place</button>
        <Link href="/component/civic">
        <button className=" bg-blue-500 hover:bg-purple-400 text-white rounded-lg py-2 px-3 m-12">Car Inspectionz</button>
        </Link>
        </div> {/* Div of buttons*/}
        <h1 className="text-2xl text-center">Vehicle Description</h1>
        
        <div className="text-center">
            <span className="font-bold">Number of Doors</span><span className=""> 4 </span>
            <span className="font-bold">Engine</span><span className=""> 1800 cc </span>
            <span className="font-bold">Condition</span><span className=""> 8.5 /10 </span>
            <span className="font-bold">Driven</span><span className=""> 9,500 KM </span>
            <span className="font-bold">Suspension Type</span><span className=""> Soft Suspension </span>
            <span className="font-bold">Avg</span><span className=""> 13 km per ltr </span>
            <span className="font-bold">Transmission</span><span className=""> Automatic </span>
            <span className="font-bold">Fuel Type</span><span className=""> High Octane </span>
        </div>

        <h1 className="text-green-800 text-center text-3xl mt-8">PKR 50,00,000</h1>
        <div className='flex flex-col items-center'><Link href="/component/checkout">
        <button className=" bg-blue-500 hover:bg-purple-400 text-white rounded-lg py-2 px-3 m-12">Make Payment</button>
        </Link>
        </div>

        
        </div>
    )
}