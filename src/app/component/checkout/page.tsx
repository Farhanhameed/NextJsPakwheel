import Link from "next/link";

export default function Checkout() {
  return (
    <div>
        <form className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl text-center">Enter your Details</h1>
        <input type="text" className="border-2 border-black mt-20 box-content h-2 w-72 p-2 rounded-lg" placeholder="Enter your Name"/>
        <input type="text" className="border-2 border-black box-content h-2 w-72 p-2 rounded-lg" placeholder="Enter your Email"/>
        <input type="text" className="border-2 border-black box-content h-2 w-72 p-2 rounded-lg" placeholder="Card Number"/>
        <input type="text" className="border-2 border-black mb-5 box-content h-2 w-72 p-2 rounded-lg" placeholder="Address"/>
        
        <div className='flex flex-col items-center'><Link href="/component/thankyou">
        <button className="bg-blue-500 text-white hover:bg-red-300 rounded-lg py-2 px-3 mb-5">Place your order</button>
        </Link></div>
        </form>
</div>
  )
}
