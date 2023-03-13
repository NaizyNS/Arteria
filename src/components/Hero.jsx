const imgHero ='https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg'
const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-4/5 justify-between
    items-center mx-auto py-10'>
        <div className="md:w-3/6 w-full">
            <div> 
                <h1 className="text-white text-5xl font-bold">
                    Buy and Sell <br/> Digital Arts,<br/>
                <span className="text-gradient">NFTs</span>Collections
                </h1>
                <p className="text-gray-500 font-semibold text-sm mt-3">Mint and collect the hottest NFTs around.</p>
            </div>

            <div className="flex mt-5">
                <button className="shadow-xl shadow-black text-white  bg-[#e32970] hover:bg-#bd-[#bd255f] rounded-full p-2">
                    Create NFT
                    </button>
            </div>

        
            <div className="w-3/4 flex justfy-between items-center mt-5">
                <div className="text-white">
                <p className="font-bold">123k</p>
                <small className="text-gray-300">Users</small>
            </div>

            <div className="text-white">
                <p className="font-bold">152k</p>
                <small className="text-gray-300">Artworks</small>
            </div>

            <div className="text-white">
                <p className="font-bold">200k</p>
                <small className="text-gray-300">Artist</small>
            </div>
                </div>      
        </div>
        <div className="shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-grey-800">
            <img className="h-60 w-full object-cover" 
            src={imgHero}
            alt="Hero"/>
        </div>
    </div>
  )
}

export default Hero