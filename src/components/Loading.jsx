const Loading = () => {
  return (
    <div className = {`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
    trasform transition-transform duration-300 scale-100`}>
        <div className="bg-[#151c25] shadow-xl shadow-[#e32970]
        rounded-xl min-w-min px-10 pb-2 ">
            <div  className="flex flex-col">
               <div className="flex justify-center items-center">
                <div className=".lds-dual-ring scale-50"></div>
                <p className="text-lg">processing...</p>
               </div>
                  <small>Message</small>
            </div>
        </div>
        </div>
  )
}

export default Loading