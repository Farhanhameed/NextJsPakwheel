import Image from "next/image";
import TCorolla from "../../../../public/images/TCorolla.png"
import alto from "../../../../public/images/SAlto.png"
import civic from "../../../../public/images/hcivic.png"
import city from "../../../../public/images/hcity.png"
import Link from "next/link";

export default function CarDetail(){
return(
<div>
{/* FEATURING SECTION */}
<div className="flex w-full">
  <div className="flex text-3xl w-6/12 m-4">Featured New Cars</div>
  <div className="flex justify-center w-6/12 text-2xl text-blue-300">View All New Cars</div>
</div>

<div> {/* Div of Featured new cars*/}
<ul className="flex space-x-12 m-4">
  <li>Popular</li>
  <li>Upcoming</li>
  <li>Newly Launched</li>
</ul>
</div> {/* End of Div of Featured new cars*/}

<div className="flex m-4">

<div className="flex w-3/12 m-4"><Link href="/component/corolla1"><Image src={TCorolla} alt="corolla" width={150} height={150}></Image></Link></div>
  <div className="flex w-3/12"><Link href="/component/alto1"><Image src={alto} alt="alto" width={150} height={150}></Image></Link></div>
  <div className="flex w-3/12"><Link href="/component/city1"><Image src={city} alt="city" width={150} height={150}></Image></Link></div>
  <div className="flex w-3/12"><Link href="/component/civic1"><Image src={civic} alt="civic" width={150} height={150}></Image></Link></div>
</div>

<div className="flex m-8"> {/* Div of car details*/}
  <div className="w-3/12 m-4"><Link href="/component/corolla1"><h1 className="text-blue-500">Toyato Corolla</h1> {/* */}
  <h1 className="text-green-500">PKR 59.7 - 75.5 lacs</h1>
  <h1 className="text-slat-500">621 Reviews</h1></Link>
  </div>

  <div className="w-3/12 m-4"><Link href="/component/alto1"><h1 className="text-blue-500 m-18">Suzuki Alto</h1> {/* */}
  <h1 className="text-green-500">PKR 23.3 - 30.5 lacs</h1>
  <h1 className="text-slat-500">199 Reviews</h1></Link>
  </div>

  <div className="w-3/12 m-4"><Link href="/component/city1"><h1 className="text-blue-500">Honda City</h1> {/* */}
  <h1 className="text-green-500">PKR 46.5 - 58.5 lacs</h1>
  <h1 className="text-slat-500">458 Reviews</h1></Link>
  </div>
  <div className="w-3/12 m-4"><Link href="/component/civic1"><h1 className="text-blue-500">Honda Civic</h1> {/* */}
  <h1 className="text-green-500">PKR 86.6 - 99.0 lacs</h1>
  <h1 className="text-slat-500">357 Reviews</h1></Link>
  </div>
  </div>{/* Div of car details*/}
</div>
)
}