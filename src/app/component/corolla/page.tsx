import Link from "next/link";
import Image from "next/image";
import TCorolla from "../../../../public/images/CorollaD.png"

export default function Corolla() {
    return(
        <div>
            <h1 className="font-bold text-center underline text-3xl">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</h1>
              <div className="flex w-3/12 mt-5 mb-5 m-auto"><Image src={TCorolla} alt="corolla" width={150} height={150} className="w-[300px] h-[300px]"></Image></div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque molestiae asperiores libero labore quis iusto ut dolorem aliquam omnis repellat dignissimos voluptatem magnam vero eveniet voluptatibus, fugit commodi ipsa cum expedita amet nostrum? Rerum quibusdam, natus id fuga laudantium non dolores similique praesentium ipsa error placeat quidem unde iure quo optio et ipsum eius, autem iste illum facilis voluptates ea? Reprehenderit voluptatum optio earum sit sed eligendi totam iusto culpa. Maiores mollitia illum in, expedita dolorem consequatur doloremque quidem alias laudantium odit iusto? Molestiae repudiandae modi dignissimos quod. Recusandae tempore asperiores praesentium sequi optio culpa repudiandae maiores animi beatae?
        
        <h1 className="text-green-800 text-center text-3xl mt-8">PKR 50,00,000</h1>
        <div className='flex flex-col items-center'>
        <Link href="/component/checkout">
        <button className=" bg-blue-500 hover:bg-purple-400 text-white rounded-lg py-2 px-3 m-12">Make Payment</button>
        </Link>
        </div>
        </div>
    )
}