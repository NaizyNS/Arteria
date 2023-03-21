import { useState } from 'react'
import { FaTimes} from 'react-icons/fa'
import { setGlobalState, useGlobalState } from '../store'
const imgHero ='https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg'

const UpdateNFT = () => {
    const [modal] = useGlobalState('updateModal')
    const [price, setPrice] =useState('')


    const handleSumit = (e) =>{
        e.preventdefault()
        if(!price) return
         console.log('Updated...')

         resetForm()
    }
    const closeModal =() => {
        
        setGlobalState('updateModal','scale-0')
        resetForm()
    }
    const resetForm =() => {
        
        setPrice('')

    }


  return (
    <div className = {`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
    trasform transition-transform duration-300 ${modal}`}>
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970]
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form onSubmit={handleSumit} className="flex flex-col">
                <div className="flex justify-between item-center text-gray-400">
                    <p className="font-semibold text-gray-400">Candy NFT</p>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="border-0 bg-transparent focus:outline-none">
                      <FaTimes className="text-gray-400" />
                    </button>
                 </div>
            <div className='flex flex-row justify-center items-center rounded-xl mt-5'>
              <div className='shrink-0 h-20 w-20 rounedxl overflow-hidden'>
                <img className='h-full w-full object-cover curser-pointer' 
                src={imgHero}
                alt='NFT'/>
              </div>
            </div>   
              <div
                className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
               <input type="NUMBER"
                     accept='image/png,image/gif,image/jpeg,image/jpg,image/webp'
                     className='block w-full text-sm text-slate-500
                     focus:outline-none cursor-pointer focus:ring-0  bg-transparent border-0'
                     placeholder='Price (ETH)'
                     min={(0.01)}
                     step={0.01}
                     name='price'
                     onChange={(e) =>  setPrice(e.target.value)}
                     value={price}
                     required/>

              </div>
              <button className=" flex justify-center item-center shadow-lg
               shadow-black text-white w-full text-md py-2 mt-5 bg-[#e32970] hover:bg-#bd-[#bd255f] rounded-full ">Update Now</button>

            </form>
        </div>
        </div>
  )
}

export default UpdateNFT
