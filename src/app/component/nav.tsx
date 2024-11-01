import logo from "../../../public/images/logo.jpg"
import phonelogo from "../../../public/images/phonelogo.jpg"
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
return(
    <div>
    {/* <div className="bg-black h-16 w-4/12">
       <Image src={phonelogo} alt="phonelogo" width={80} height={80}></Image>
    </div>
    <div><h1 className="text-white font-2xl jusify-center h-16 w-4/12 flex justify-start">Download App via SMS</h1>
        </div> */}

    <div className="flex w-full h-24 bg-black justify-center"> {/* Div of 2nd navbar */}
    <div className="flex w-3/12 h-24 p-6 mt-1"><Image src={logo} alt="logo" width={100} height={100}></Image>    </div>
                <div className="flex w-6/12 h-24 items-center">
                <ul className="flex space-x-6 text-white mr-6"> 
                            <li>
                        <select id="Used" name="used" className="bg-black text-white border-none">
                                <option value="Used Cars">Used Cars</option>
                                <option value="Used Cars">Used Cars</option>
                            </select></li>
                            <li>
                        <select id="New" name="new" className="bg-black text-white border-none">
                                <option value="New Cars">New Cars</option>
                                <option value="New Cars">New Cars</option>
                            </select></li>
                            <li>
                        <select id="bike" name="bike" className="bg-black text-white border-none">
                                <option value="bike">Bikes</option>
                                <option value="bike">Bikes</option>
                            </select></li>
                            <li>
                        <select id="autostore" name="autostore" className="bg-black text-white border-none">
                                <option value="autostore">Auto Store</option>
                                <option value="autostore">Auto Store</option>
                            </select></li>
                            <li>Video</li>
                            <li>Forums</li>
                            <li>Blog</li>
                            <li>
                            <div className='flex flex-col items-center'><Link href="/">
                            Home</Link></div>
                            </li>
                        {/* <select id="more" name="more" className="bg-black text-white border-none"> */}
                        {/* <div className='flex flex-col items-center'><Link href="/">
                                <option value="more">Home</option> </Link></div>
                                <option value="more">More</option> */}
                            {/* </select></li> */}
                        
                    </ul>
                </div>

                <div className="flex w-3/12 h-24 justify-end items-center">
                <button className="bg-red-600 text-white">Post on Ad</button>
                </div>
    </div> {/* End of Div of 2nd navbar */}
    
    
</div>
    
)
}